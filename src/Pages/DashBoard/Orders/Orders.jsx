import { Helmet } from "react-helmet-async";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import useOrders from "../../../Hooks/useOrders";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef, useState } from "react";
import useUpdateStatus from "../../../Hooks/useUpdateStatus";
import toast from "react-hot-toast";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const Orders = () => {

       const [page, setPage] = useState(1);
       const inputText = useRef();
       const [search, setSearch] = useState('')
       const { orders, ordersLoading, refetch, currentPage, totalPages, limit: orderPerPage, totalOrders } = useOrders(page, search);
       const start = (currentPage - 1) * orderPerPage + 1;
       const end = Math.min(currentPage * orderPerPage, totalPages * orderPerPage);
       const { updateStatus, updateStatusLoading } = useUpdateStatus();

       const handleUpdateStatus = (id, field, value) => {
              updateStatus({ id, field, value }, {
                     onSuccess: () => {
                            toast.success(`${field} Updated To ${value}`)
                            refetch();
                     },
                     onError: (error) => {
                            toast.error(error.message)
                     }
              })
       }

       return (
              <div>
                     <Helmet><title>E-Commerce | Orders</title></Helmet>
                     <AdminSectionTitle SubHeading='--------Manage Orders--------' Heading='Order Management & Tracking'></AdminSectionTitle>
                     {/* ---------------Search & Value Section------------- */}
                     <div className="flex justify-between items-center pb-5">
                            <h2 className="font-semibold text-sm lg:text-lg flex-2/5 lg:flex-3/5">Total Orders: {totalOrders}</h2>
                            <div className="flex-3/5 lg:flex-2/5">
                                   <label className="input w-full focus-within:outline-none">
                                          <svg className="h-[1em] opacity-50 focus:outline-0 focus-within:outline-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                 <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                                        <circle cx="11" cy="11" r="8"></circle>
                                                        <path d="m21 21-4.3-4.3"></path>
                                                 </g>
                                          </svg>
                                          <input ref={inputText} onChange={(e) => setSearch(e.target.value.trim())} type="search" className="w-full input input-bordered focus:outline-0" placeholder="Search" />
                                   </label>
                            </div>
                     </div>
                     {/* --------------------Table Section--------------------- */}
                     {ordersLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : orders.length === 0 ? (<div className="flex items-center justify-center min-h-[200px]"><p className="text-gray-500 text-lg font-medium">No Orders Found</p></div>) : (
                            <div className="overflow-x-scroll  lg:min-w-full md:max-w-[500px] border border-gray-300 rounded-md">
                                   <div className="min-w-[900px] md:min-w-[1000px] lg:min-w-full">
                                          {/* -------------------Table Header Section-------------- */}
                                          <div className="grid p-2 font-semibold text-xs border-b border-gray-300" style={{ gridTemplateColumns: "minmax(130px, 2fr) repeat(6, 1fr)" }}>
                                                 <div className="p-2">Product Name</div>
                                                 <div className="py-2">Payment Method</div>
                                                 <div className="p-2 text-center">Payment Status</div>
                                                 <div className="p-2 text-center">Order Status</div>
                                                 <div className="p-2 text-center">Delivery Status</div>
                                                 <div className="p-2 text-center">Total Price</div>
                                                 <div className="p-2 text-center">Invoice</div>
                                          </div>
                                          {/* -------------------Table Body Section-------------- */}
                                          {orders.map((order, index) => (
                                                 <div key={order._id} className={`grid p-2 gap-2 text-xs text-gray-600 border-b border-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-aliceBlue"}`} style={{ gridTemplateColumns: "minmax(130px, 2fr) repeat(6, 1fr)" }}>
                                                        {/* ------------------Product Name--------------- */}
                                                        <div className="p-2">
                                                               <ul className="space-y-1">
                                                                      {order?.orderItems?.map((item, idx) => (
                                                                             <li key={idx}>{item.productName} ({item?.quantity})</li>
                                                                      ))}
                                                               </ul>
                                                        </div>
                                                        {/* ----------------Product Payment Method------------- */}
                                                        <div className="p-2 flex items-center">{order?.paymentMethod}</div>
                                                        {/* ----------------Product Payment Status------------- */}
                                                        <select
                                                               value={order.paymentStatus}
                                                               onChange={(e) => handleUpdateStatus(order?._id, "paymentStatus", e.target.value)}
                                                               className="h-fit border my-auto rounded px-2 py-1 text-xs"
                                                        >
                                                               <option value="Pending">Pending</option>
                                                               <option value="Paid">Paid</option>
                                                               <option value="Failed">Failed</option>
                                                        </select>
                                                        {/* -----------------Product Order Status-------------- */}
                                                        <select
                                                               value={order?.orderStatus}
                                                               onChange={(e) => handleUpdateStatus(order?._id, "orderStatus", e.target.value)}
                                                               className="h-fit border my-auto rounded px-2 py-1 text-xs"
                                                        >
                                                               <option value="Pending">Pending</option>
                                                               <option value="Processing">Processing</option>
                                                               <option value="Shipped">Shipped</option>
                                                               <option value="Completed">Completed</option>
                                                        </select>
                                                        {/* --------------Product Delivery Status-------------- */}
                                                        <select
                                                               value={order?.deliveryStatus}
                                                               onChange={(e) => handleUpdateStatus(order?._id, "deliveryStatus", e.target.value)}
                                                               className="h-fit border my-auto rounded px-1 py-1 text-xs"
                                                        >
                                                               <option value="Pending">Pending</option>
                                                               <option value="Shipped">Shipped</option>
                                                               <option value="Delivered">Delivered</option>
                                                        </select>
                                                        {/* ----------------Product Price Status---------------- */}
                                                        <div className="p-2 flex items-center justify-center font-medium">{order?.totalAmount} Tk</div>
                                                        {/* ---------------Product Invoice Status--------------- */}
                                                        <button onClick={() => window.open(`http://localhost:5000/invoice/${order?._id}`, "_blank")} className="h-fit m-auto bg-Radical hover:bg-aliceBlue text-white hover:text-black rounded-xs p-2 cursor-pointer"><FaFileInvoiceDollar /></button>
                                                 </div>
                                          ))}
                                   </div>
                            </div>
                     )}
                     {/* ------------------Pagination Section--------------- */}
                     <div className="flex items-center justify-between pt-5">
                            <p className="text-sm text-gray-600 ">Showing {start} To  {end} Of {totalPages * orderPerPage} Orders</p>
                            <div className="flex items-center gap-2">
                                   <button disabled={currentPage === 1} onClick={() => setPage((currentPage) => currentPage - 1)} className="px-1 py-1 border border-gray-300 disabled:text-gray-400 text-lg rounded-full"><FiArrowLeft /></button>
                                   <p className="text-xs">{currentPage} / {totalPages}</p>
                                   <button disabled={currentPage === totalPages} onClick={() => setPage((currentPage) => currentPage + 1)} className="px-1 py-1 border border-gray-300 disabled:text-gray-400 text-lg rounded-full"><FiArrowRight /></button>
                            </div>
                     </div>
              </div>
       );
};

export default Orders;