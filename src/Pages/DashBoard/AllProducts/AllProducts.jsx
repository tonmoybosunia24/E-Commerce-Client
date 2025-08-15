import { Helmet } from "react-helmet-async";
import useAdminProducts from "../../../Hooks/useAdminProducts";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import useDeleteProducts from "../../../Hooks/useDeleteProducts";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { useRef, useState } from "react";

const AllProducts = () => {

       const inputText = useRef();
       const [searchInput, setSearchInput] = useState('')
       const [adminProducts, adminProductsLoading, refetch] = useAdminProducts(searchInput);
       const { deleteProduct } = useDeleteProducts();

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
                            deleteProduct(id, {
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
              <div>
                     <Helmet><title>E-Commerce | Products</title></Helmet>
                     <AdminSectionTitle SubHeading='--------Manage Products--------' Heading='Product Inventory Management'></AdminSectionTitle>
                     <div className="flex justify-between items-center pb-5">
                            <h2 className="font-semibold text-sm lg:text-lg flex-2/5 lg:flex-3/5">Total Products : {adminProducts.length}</h2>
                            <div className="flex-3/5 lg:flex-2/5">
                                   <label className="input w-full focus-within:outline-none">
                                          <svg className="h-[1em] opacity-50 focus:outline-0 focus-within:outline-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                 <g
                                                        strokeLinejoin="round"
                                                        strokeLinecap="round"
                                                        strokeWidth="2.5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                 >
                                                        <circle cx="11" cy="11" r="8"></circle>
                                                        <path d="m21 21-4.3-4.3"></path>
                                                 </g>
                                          </svg>
                                          <input ref={inputText} onChange={(e) => setSearchInput(e.target.value.trim())} type="search" className="w-full input input-bordered focus:outline-0" placeholder="Search" />
                                   </label>
                            </div>
                     </div>
                     {adminProductsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : adminProducts.length === 0 ? (<div className="flex items-center justify-center min-h-[200px]"><p className="text-gray-500 text-lg font-medium">No Products Found</p></div>) : (
                            <div className="overflow-x-auto border border-gray-300 rounded-sm">
                                   {/* --------------------Table------------------- */}
                                   <table className="table table-zebra w-full table-fixed lg:table-auto">
                                          {/* -----------------Table Header--------------- */}
                                          <thead>
                                                 <tr>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5">Images</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-1 md:px-0 lg:px-5">Title</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-2">Price</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-2 text-center">Update</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-2 text-center">Delete</th>
                                                 </tr>
                                          </thead>
                                          {/* ------------------Table Body--------------- */}
                                          <tbody>
                                                 {adminProducts.map((product) => (
                                                        <tr key={product._id}>
                                                               <th className="w-24"><img className="w-10 h-10 lg:w-16 lg:h-16 object-contain border border-gray-300 p-1 lg:p-2 " src={product?.Images && product.Images.length > 0 ? product.Images[0] : '/images/default.png'} alt="" /></th>
                                                               <td className="font-semibold text-xs md:text-base lg:text-base px-1 md:px-0 lg:px-5 truncate">{product?.Title}</td>
                                                               <td className="font-semibold px-2">{product?.Price}</td>
                                                               <td><Link to={`/dashboard/updateProducts/${product._id}`}><MdEdit className="mx-auto bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer" /></Link></td>
                                                               <td><FaTrashAlt onClick={() => { handleDelete(product?._id) }} className="mx-auto bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer"></FaTrashAlt></td>
                                                        </tr>
                                                 ))}
                                          </tbody>
                                   </table>
                            </div>
                     )}
              </div>
       );
};

export default AllProducts;