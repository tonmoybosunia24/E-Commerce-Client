import { Helmet } from "react-helmet-async";
import useAdminProducts from "../../../Hooks/useAdminProducts";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import useDeleteProducts from "../../../Hooks/useDeleteProducts";
import Swal from "sweetalert2";
import { Link } from "react-router";

const AllProducts = () => {

       const [adminProducts, adminProductsLoading, refetch] = useAdminProducts();
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
                     {adminProductsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                            <div className="overflow-x-auto border border-gray-300 rounded-sm">
                                   {/* --------------------Table------------------- */}
                                   <table className="table table-zebra w-full table-fixed lg:table-auto">
                                          {/* -----------------Table Header--------------- */}
                                          <thead>
                                                 <tr>
                                                        <th className="font-semibold text-black border-b border-gray-300 py-5">Images</th>
                                                        <th className="font-semibold text-black border-b border-gray-300 py-5 px-1 md:px-0 lg:px-5">Title</th>
                                                        <th className="font-semibold text-black border-b border-gray-300 py-5 px-2">Price</th>
                                                        <th className="font-semibold text-black border-b border-gray-300 py-5 px-2 text-center">Update</th>
                                                        <th className="font-semibold text-black border-b border-gray-300 py-5 px-2 text-center">Delete</th>
                                                 </tr>
                                          </thead>
                                          {/* ------------------Table Body--------------- */}
                                          <tbody>
                                                 {adminProducts.map((product) => (
                                                        <tr key={product._id}>
                                                               <th className="w-24"><img className="w-10 h-10 lg:w-16 lg:h-16 object-contain border border-gray-300 p-1 lg:p-2 " src={product?.Images && product.Images.length > 0 ? product.Images[0] : '/images/default.png'} alt="" /></th>
                                                               <td className="font-semibold text-xs md:text-base lg:text-base px-1 md:px-0 lg:px-5">{product?.Title}</td>
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