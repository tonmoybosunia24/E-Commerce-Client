import { Link } from "react-router";
import useWishlist from "../../Hooks/useWishlist";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import HeaderTop from "../Shared/HeaderTop/HeaderTop";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { FaCartShopping } from "react-icons/fa6";
import useAddToCarts from "../../Hooks/useAddToCarts";
import useDeleteWishlist from "../../Hooks/useDeleteWishlist";
import Swal from "sweetalert2";

const AddToWishlist = () => {

       const [wishlist, wishlistLoading, refetch] = useWishlist();
       const handleAddToCart = useAddToCarts();
       const { deleteWishlistItem } = useDeleteWishlist();

       const handleDelete = (id) => {
              Swal.fire({
                     title: "Are You Sure?",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: ' #ff5252',
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, Delete"
              }).then((result) => {
                     if (result.isConfirmed) {
                            deleteWishlistItem(id, {
                                   onSuccess: () => {
                                          Swal.fire({
                                                 title: "Deleted!",
                                                 icon: "success",
                                                 confirmButtonText: "Done",
                                                 confirmButtonColor: "#ff5252"
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
              <div>
                     <Helmet><title>E-Commerce | Wishlist</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <div className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                            {wishlistLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : wishlist.length === 0 ? (<div className="flex items-center justify-center min-h-[200px]"><p className="text-gray-500 text-lg font-medium">No Products Found</p></div>) : (
                                   <div className="overflow-x-auto border border-gray-300 rounded-sm">
                                          {/* --------------------Table------------------- */}
                                          <table className="table table-zebra w-full table-fixed lg:table-auto">
                                                 {/* -----------------Table Header--------------- */}
                                                 <thead>
                                                        <tr>
                                                               <th className="font-bold text-black border-b border-gray-300 py-5">Images</th>
                                                               <th className="font-bold text-black border-b border-gray-300 py-5 px-1 md:px-0 lg:px-5">Title</th>
                                                               <th className="font-bold text-black border-b border-gray-300 py-5 px-10 text-center hidden md:block lg:block">Stock</th>
                                                               <th className="font-bold text-black border-b border-gray-300 py-5 px-2">Price</th>
                                                               <th className="font-bold text-black border-b border-gray-300 py-5 px-2 text-center">Add To Cart</th>
                                                               <th className="font-bold text-black border-b border-gray-300 py-5 px-2 text-center">Delete</th>
                                                        </tr>
                                                 </thead>
                                                 {/* ------------------Table Body--------------- */}
                                                 <tbody>
                                                        {wishlist.map((product) => (
                                                               <tr key={product._id}>
                                                                      <th className="w-24"><img className="w-10 h-10 lg:w-16 lg:h-16 object-contain border border-gray-300 p-1 lg:p-2 " src={product?.Images && product.Images.length > 0 ? product.Images[0] : '/images/default.png'} alt="" /></th>
                                                                      <td className="font-semibold text-xs md:text-base lg:text-base px-1 md:px-0 lg:px-5 truncate">{product?.Title}</td>
                                                                      <td className="px-14 text-center hidden md:table-cell lg:table-cell font-bold text-green-700">{product?.Stock}</td>
                                                                      <td className="font-bold text-Radical px-2">{product?.Price}</td>
                                                                      <td><Link onClick={() => product.Stock > 0 && handleAddToCart(product, 1)}><FaCartShopping className={`mx-auto bg-Radical text-3xl text-white rounded-xs p-2 hover:bg-aliceBlue hover:text-black ${product.Stock === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`} /></Link></td>
                                                                      <td><FaTrashAlt onClick={() => { handleDelete(product._id) }} className="mx-auto bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer"></FaTrashAlt></td>
                                                               </tr>
                                                        ))}
                                                 </tbody>
                                          </table>
                                   </div>
                            )}
                     </div>
                     <Footer></Footer>
              </div>
       );
};

export default AddToWishlist;