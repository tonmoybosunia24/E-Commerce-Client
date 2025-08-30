import { IoIosArrowDown } from "react-icons/io";
import useCarts from "../../../Hooks/useCarts";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useUserInfo from "../../../Hooks/useUserInfo";
import useSaveOrderInfo from "../../../Hooks/useSaveOrderInfo";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useDeleteCarts from "../../../Hooks/useDeleteCarts";

const CheckOutSection = () => {

       const location = useLocation();
       const navigate = useNavigate();
       const shippingCharge = 150;
       const taxRate = 0.10;
       const [carts, cartsLoading, refetch] = useCarts();
       const subTotalPrice = parseFloat(carts.reduce((sum, cart) => sum + cart.Price * cart.Quantity, 0).toFixed(2));
       const totalWithoutTax = subTotalPrice + shippingCharge;
       const taxAmount = parseFloat((subTotalPrice * taxRate).toFixed(2));
       const totalWIthTax = parseFloat((totalWithoutTax + taxAmount).toFixed(2));
       const [couponOpen, setCouponOpen] = useState(false);
       const { register, handleSubmit, watch, setValue, formState: { errors, isValid } } = useForm({ mode: 'onChange', defaultValues: { paymentMethod: 'CashOnDelivery' } });
       const paymentMethod = watch('paymentMethod');
       const [userInfo, userInfoPending] = useUserInfo();
       const { deleteUserCarts, deleteUserCartsPending } = useDeleteCarts();
       const { saveOderInfo, saveOderInfoLoading } = useSaveOrderInfo();

       useEffect(() => {
              if (userInfo) {
                     setValue('country', userInfo?.country)
              }
       }, [userInfo, setValue]);

       useEffect(() => {

              const params = new URLSearchParams(location.search);
              const orderId = params.get("success");
              const paymentFail = params.get("failed");

              if (orderId) {
                     Swal.fire({
                            title: "Payment Success & Confirmed",
                            icon: "success",
                            confirmButtonText: "Download Invoice",
                            confirmButtonColor: ' #ff5252',
                            showCancelButton: false
                     }).then((result) => {
                            if (result.isConfirmed) {
                                   window.open(`http://localhost:5000/invoice/${orderId}`, "_blank");
                            }
                     });
                     if (userInfo?.email) {
                            deleteUserCarts(userInfo.email, {
                                   onSuccess: () => {
                                          refetch();
                                          navigate('/')
                                   },
                                   onError: () => {
                                          toast.error("Carts Item Can Not Clear");
                                   }
                            });
                     }
              }
              if (paymentFail === "true") {
                     toast.error("Payment Failed");
                     navigate("/");
              }

       }, [location, userInfo]);

       const onsubmit = (data) => {

              const orderInfo = {
                     firstName: data?.firstName,
                     lastName: data?.lastName,
                     name: `${data?.firstName} ${data?.lastName}`,
                     email: userInfo?.email || '',
                     phoneNumber: data.phoneNumber,
                     address: data?.address,
                     city: data?.city,
                     division: data?.division,
                     country: data?.country,
                     postCode: data?.postCode || '',
                     paymentMethod: data?.paymentMethod,
                     paymentStatus: 'Pending',
                     transactionId: '',
                     orderItems: carts.map((cart) => ({
                            productId: cart?.productId,
                            productName: cart.Title,
                            quantity: cart.Quantity,
                            price: cart.Price,
                     })),
                     subTotal: subTotalPrice,
                     taxAmount: taxAmount,
                     totalAmount: totalWIthTax,
                     orderStatus: 'Pending',
                     deliveryStatus: 'Pending',
                     placeAt: new Date().toISOString(),
              };
              if (orderInfo.paymentMethod === 'CashOnDelivery') {
                     saveOderInfo(orderInfo, {
                            onSuccess: (data) => {
                                   deleteUserCarts(userInfo?.email, {
                                          onSuccess: () => {
                                                 Swal.fire({
                                                        title: 'Order Placed',
                                                        icon: 'success',
                                                        confirmButtonText: 'Download Invoice',
                                                        confirmButtonColor: ' #ff5252',
                                                        showCancelButton: false
                                                 }).then(() => {
                                                        window.location.href = `http://localhost:5000/invoice/${data.insertedId}`;
                                                 });
                                                 refetch();
                                                 navigate('/')
                                          },
                                          onError: () => {
                                                 toast.error('Failed To Clear Cart Items. Please Try Again')
                                          }
                                   })
                            },
                            onError: () => {
                                   toast.error('Order Failed')
                            }
                     })
              }
              else {
                     saveOderInfo(orderInfo, {
                            onSuccess: (data) => {
                                   window.location.replace(data?.url)
                            },
                            onError: (error) => {
                                   toast.error(error.message)
                            }
                     })
              }
       }

       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                            {/* ------------------Customer Details---------------- */}
                            <div className="flex-8/12 border border-gray-300 rounded-md">
                                   <h2 className="font-bold text-lg border-b border-gray-300 px-5 py-3">Shipping & Billing Information</h2>
                                   <form onSubmit={handleSubmit(onsubmit)} className="card-body flex items-center p-5">
                                          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                                 {/* -------------------First Name Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">First Name : </span>
                                                        </label>
                                                        <input type="text" defaultValue={userInfo?.name?.trim().split(/\s+/)[0] || ''} required {...register('firstName', { required: true })} placeholder="Your First Name" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Last Name Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Last Name : </span>
                                                        </label>
                                                        <input type="text" defaultValue={userInfo?.name?.trim().split(/\s+/).slice(1).join(' ') || ''} required {...register('lastName', { required: true })} placeholder="Your Last Name" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* --------------------Address Input------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Your Address : </span>
                                                        </label>
                                                        <input type="text" required {...register('address', { required: true })} placeholder="Your Full Address" className="w-full input input-bordered focus:outline-0" />

                                                 </div>
                                                 {/* ----------------------City Input-------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Your City : </span>
                                                        </label>
                                                        <input type="text" required {...register('city', { required: true })} placeholder="Your City Name" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* --------------------Country Input------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">Country : </span></label>
                                                        <select required {...register('country', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select Country</option>
                                                               <option value="Bangladesh">Bangladesh</option>
                                                               <option value="India">India</option>
                                                               <option value="Other">Pakistan</option>
                                                        </select>
                                                 </div>
                                                 {/* --------------------Division Input------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">Division : </span></label>
                                                        <select required {...register('division', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select Country</option>
                                                               <option value="Dhaka">Dhaka</option>
                                                               <option value="Chattogram">Chattogram</option>
                                                               <option value="Rajshahi">Rajshahi</option>
                                                               <option value="Khulna">Khulna</option>
                                                               <option value="Barishal">Barishal</option>
                                                               <option value="Sylhet">Sylhet</option>
                                                               <option value="Rangpur">Rangpur</option>
                                                               <option value="Mymensingh">Mymensingh</option>
                                                        </select>
                                                 </div>
                                                 {/* -----------------Phone Number Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Phone Number : </span>
                                                        </label>
                                                        <input type="tel" required defaultValue={userInfo?.phoneNumber} {...register('phoneNumber', { required: true })} placeholder="Your Phone Number" name="phoneNumber" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -----------------Phone Number Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Post Code : </span>
                                                        </label>
                                                        <input type="tel" {...register('postCode')} placeholder="Your Post Code" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -----------------Payment Method Input--------------- */}
                                                 <div className="flex gap-5 col-span-1 md:col-span-2 lg:col-span-2 mb-2">
                                                        <div className="flex items-center gap-2">
                                                               <input type="radio" value='CashOnDelivery' {...register("paymentMethod", { required: true })} className="radio w-5 h-5 bg-red-100 border-Radical checked:bg-red-100 checked:text-Radical checked:border-Radical" />
                                                               <p className="text-xs md:text-sm lg:text-sm">Pay With Cash On Delivery</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                               <input type="radio" value='OnlinePayment' {...register("paymentMethod", { required: true })} className="radio w-5 h-5 bg-red-100 border-Radical checked:bg-red-100 checked:text-Radical checked:border-Radical" />
                                                               <p className="text-xs md:text-sm lg:text-sm">Pay Online</p>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* -----------------------Agreement Section-------------------- */}
                                          <div className="flex gap-1.5">
                                                 <input type="checkbox" className="checkbox checkbox-xs lg:checkbox-xs rounded-sm" {...register('conditionCheck', { required: true })} />
                                                 <p className="font-medium text-xs md:text-xs lg:text-sm -mt-0.5">I Agree To The Terms And Conditions And The Privacy Policy</p>
                                          </div>
                                   </form>
                            </div>

                            {/* --------------------Order Details---------------- */}
                            <div className="flex-4/12 h-fit border border-gray-300 p-5 space-y-1.5 rounded-md">
                                   {/* ----------------Products Total Price------------- */}
                                   <div className="flex justify-between items-center">
                                          <p className="font-semibold">{carts.length} Products</p>
                                          <p className="font-bold text-Radical">{subTotalPrice.toLocaleString()} Tk</p>
                                   </div>
                                   {/* --------------Products Shipping Charges----------- */}
                                   <div className="flex justify-between items-center">
                                          <p className="font-semibold">Shipping</p>
                                          <p className="font-bold text-Radical">{shippingCharge.toLocaleString()} Tk</p>
                                   </div>
                                   {/* -----------Products Price Without Tax------------- */}
                                   <hr className="text-gray-300 my-3" />
                                   <div className="flex justify-between items-center">
                                          <p className="font-semibold">Total (Tax Excl.)</p>
                                          <p className="font-bold text-Radical">{totalWithoutTax.toLocaleString()} Tk</p>
                                   </div>
                                   {/* ------------Products Price Total Tax-------------- */}
                                   <div className="flex justify-between items-center">
                                          <p className="font-semibold">Taxes</p>
                                          <p className="font-bold text-Radical">{taxAmount.toLocaleString()} Tk</p>
                                   </div>
                                   <hr className="text-gray-300 my-2" />
                                   {/* --------------Products Total Price---------------- */}
                                   <div className="flex justify-between items-center">
                                          <p className="font-semibold">Total (Tax Incl.)</p>
                                          <p className="font-bold text-Radical">{totalWIthTax.toLocaleString()} Tk</p>
                                   </div>
                                   {/* ---------------------Accordion For Coupon------------------ */}
                                   <div>
                                          <button onClick={() => setCouponOpen(!couponOpen)} className="flex justify-between items-center w-full py-3 px-0 focus:outline-none">
                                                 <span className="text-Radical underline cursor-pointer">Have a Promo Code?</span>
                                                 <IoIosArrowDown className={`transition-transform duration-300 text-Radical ${couponOpen ? "rotate-180" : ""}`} size={16} />
                                          </button>
                                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${couponOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                 <div className='flex justify-center items-center gap-2'>
                                                        <input type="text" disabled={carts.length === 0} placeholder="Any Discount Coupon.." className="input focus:outline-none focus:border-gray-500" />
                                                        <button disabled={carts.length === 0} className='font-semibold bg-Radical hover:bg-black text-white rounded-sm px-5 py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400'>Submit</button>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* ------------------CheckOut Button------------------ */}
                                   <div className={`flex justify-center ${couponOpen ? 'pt-3' : ''}`}>
                                          <button onClick={handleSubmit(onsubmit)} className={`${isValid ? 'font-semibold bg-Radical hover:bg-black text-sm text-white w-full px-5 py-2.5 rounded-sm cursor-pointer' : 'font-semibold bg-red-400 hover:bg-black text-sm text-white w-full px-5 py-2.5 rounded-sm cursor-pointer'}`}>{paymentMethod === "OnlinePayment" ? "Proceed to Payment" : "Place Order"}</button>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default CheckOutSection;