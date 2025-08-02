import { useState } from "react";
import useCarts from "../../../Hooks/useCarts";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { IoIosArrowDown } from "react-icons/io";

const CartDetails = () => {

       const [carts, cartsLoading, refetch] = useCarts();
       const shippingCharge = 150;
       const taxRate = 0.10;
       const subTotalPrice = parseFloat(carts.reduce((sum, cart) => sum + cart.Price * cart.Quantity, 0).toFixed(2));
       const totalWithoutTax = subTotalPrice + shippingCharge;
       const taxAmount = parseFloat((subTotalPrice * taxRate).toFixed(2));
       const totalWIthTax = parseFloat((totalWithoutTax + taxAmount).toFixed(2));
       const [couponOpen, setCouponOpen] = useState(false);

       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                            {/* ------------------Shopping Cart---------------- */}
                            {cartsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                                   <div className="flex-8/12 border border-gray-300 rounded-md">
                                          <h2 className="font-bold text-lg border-b border-gray-300 px-5 py-3">Shopping Cart</h2>
                                          {carts.length === 0 ? (<p className="p-5 text-sm text-gray-400">There Are No More Items In Your Cart</p>) : (<div className="px-5 py-2">{carts.map((cart, index) => <ShoppingCart key={cart._id} cart={cart} isLast={index === carts.length - 1} refetch={refetch}></ShoppingCart>)}</div>)}
                                   </div>
                            )}
                            {/* --------------------Cart Details---------------- */}
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
                                          <button className="font-semibold bg-Radical hover:bg-black text-sm text-white px-5 py-2.5 rounded-sm cursor-pointer">PROCEED TO CHECKOUT</button>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default CartDetails;