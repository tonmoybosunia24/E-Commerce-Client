import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import useUpdateQuantity from "../../../Hooks/useUpdateQuantity";
import Swal from "sweetalert2";
import useDeleteCart from "../../../Hooks/useDeleteCart";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";

const ShoppingCart = ({ cart, isLast, refetch }) => {

       const { _id, productId, email, Images, Title, Quantity, Price } = cart;
       const [quantity, setQuantity] = useState(Quantity);
       const { updateQuantity } = useUpdateQuantity();
       const { deleteCardItem, isLoading, isSuccess, isError } = useDeleteCart();

       useEffect(() => {
              setQuantity(Quantity);
       }, [Quantity]);

       const handleDelete = (id) => {
              Swal.fire({
                     title: "Are you sure?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                     if (result.isConfirmed) {
                            deleteCardItem(id, {
                                   onSuccess: () => {
                                          Swal.fire({
                                                 title: "Deleted!",
                                                 text: "Your file has been deleted.",
                                                 icon: "success"
                                          });
                                          refetch();
                                   },
                                   onError: (error) => {
                                          toast.error(error.message)
                                   }
                            })
                     }
              });
       }

       return (
              <section className={`grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center gap-5 py-5 ${isLast ? '' : 'border-b border-gray-300'}`}>
                     {/* --------------------Cart Product Image------------------- */}
                     <div className="col-span-1">
                            <img className="w-20 h-20 object-contain border border-gray-300 p-2 rounded-sm" src={Images?.[0]} alt="" />
                     </div>
                     {/* --------------------Cart Product Title------------------- */}
                     <div className="col-span-2 space-y-0.5">
                            <h2 className="font-bold">{Title}</h2>
                            <p className="font-bold text-Radical">{Price} Tk</p>
                     </div>
                     {/* ------------------Cart Product Quantity------------------ */}
                     <div className="flex lg:justify-center h-fit col-span-1 ">
                            <div><input className='border border-gray-300 outline-0 w-14 h-10 pl-2' type="tel" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></div>
                            <div className='flex flex-col border border-l-0 border-gray-300'>
                                   <div className='flex-1 border-b border-gray-300 text-sm' onClick={() => (setQuantity(quantity + 1), updateQuantity({ id: _id, quantity: quantity + 1 }, { onSuccess: () => refetch() }))}><FaAngleUp className="cursor-pointer" /></div>
                                   <div className='flex-1 text-sm' onClick={() => quantity > 1 && (setQuantity(quantity - 1), updateQuantity({ id: _id, quantity: quantity - 1 }, { onSuccess: () => refetch() }))}><FaAngleDown className="cursor-pointer" /></div>
                            </div>
                     </div>
                     {/* -----------------Cart Product Total Price----------------- */}
                     <div className="col-span-1 text-end">
                            <p className="font-bold text-Radical">{Price * quantity} Tk</p>
                     </div>
                     {/* -----------------Cart Product Delete Button----------------- */}
                     <div className="flex justify-end col-span-1">
                            <FaTrashAlt onClick={() => { handleDelete(_id) }} className="bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer" />
                     </div>
              </section>
       );
};

export default ShoppingCart;