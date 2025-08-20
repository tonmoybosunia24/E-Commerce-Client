import { Helmet } from "react-helmet-async";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import useUsers from "../../../Hooks/useUsers";
import { useRef, useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import useDeleteUser from "../../../Hooks/useDeleteUser";
import Swal from "sweetalert2";
import { BsPeopleFill } from "react-icons/bs";
import useUpdateRole from "../../../Hooks/useUpdateRole";


const Users = () => {

       const inputText = useRef();
       const [searchInput, setSearchInput] = useState('');
       const [users, userLoading, refetch] = useUsers(searchInput);
       const { deleteUser, deleteUserLoading } = useDeleteUser();
       const { updateRole, updateRoleLoading } = useUpdateRole();

       const handleDelete = (id) => {
              Swal.fire({
                     title: "Are you sure?",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: ' #ff5252',
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, Delete"
              }).then((result) => {
                     if (result.isConfirmed) {
                            deleteUser(id, {
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
       const handleUpdateRole = (id, role) => {
              Swal.fire({
                     title: "Are you sure?",
                     icon: "info",
                     showCancelButton: true,
                     confirmButtonColor: ' #ff5252',
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, Update Role"
              }).then((result) => {
                     if (result.isConfirmed) {
                            updateRole({ id, role }, {
                                   onSuccess: () => {
                                          Swal.fire({
                                                 title: "Role Updated",
                                                 text: `This Person Is Now An ${role}.`,
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
                     <Helmet><title>E-Commerce | Users</title></Helmet>
                     <AdminSectionTitle SubHeading='---------Manage Users--------' Heading='User Account Management'></AdminSectionTitle>
                     <div className="flex justify-between items-center pb-5">
                            <h2 className="font-semibold text-sm lg:text-lg flex-2/5 lg:flex-3/5">Total Users : {users.length}</h2>
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
                     {userLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : users.length === 0 ? (<div className="flex items-center justify-center min-h-[200px]"><p className="text-gray-500 text-lg font-medium">No Products Found</p></div>) : (
                            <div className="overflow-x-auto border border-gray-300 rounded-sm">
                                   {/* --------------------Table------------------- */}
                                   <table className="table table-zebra w-full table-fixed lg:table-auto">
                                          {/* -----------------Table Header--------------- */}
                                          <thead>
                                                 <tr>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5">Image</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-1 md:px-0 lg:px-5">Name</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-2">Email</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-2 text-center">Role Of User</th>
                                                        <th className="font-bold text-black border-b border-gray-300 py-5 px-2 text-center">Delete</th>
                                                 </tr>
                                          </thead>
                                          {/* ------------------Table Body--------------- */}
                                          <tbody>
                                                 {users.map((user) => (
                                                        <tr key={user._id}>
                                                               <th className="w-16 h-16"><img className="aspect-[2/2] object-cover rounded-full border border-gray-300 p-0.5 " src={user?.image && user.image.length > 0 ? user?.image[0] : '/images/default.png'} alt="" /></th>
                                                               <td className="font-semibold text-xs md:text-base lg:text-base px-1 md:px-0 lg:px-5">{user?.name}</td>
                                                               <td className="font-semibold px-2 truncate mx-w-full">{user?.email}</td>
                                                               <td>
                                                                      {user?.role === 'Admin' ? (<MdAdminPanelSettings onClick={() => { handleUpdateRole(user?._id, 'User') }} className="mx-auto bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer" />) : user?.role === 'Moderator' ? (<FaUserShield onClick={() => { handleUpdateRole(user?._id, 'Admin') }} className="mx-auto bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer" />) : (<BsPeopleFill onClick={() => { handleUpdateRole(user?._id, 'Moderator') }} className="mx-auto bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer" />)}
                                                               </td>
                                                               <td onClick={() => { handleDelete(user?._id) }}><FaTrashAlt className="mx-auto bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer"></FaTrashAlt></td>
                                                        </tr>
                                                 ))}
                                          </tbody>
                                   </table>
                            </div>
                     )}
              </div>
       );
};

export default Users;