import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useUserOrder from "../../../Hooks/useUserOrder";
import { FaFileInvoiceDollar } from "react-icons/fa";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import { Helmet } from "react-helmet-async";

const UserOrder = () => {

       const { user } = useContext(AuthContext);
       const [userOrder, userOrderLoading, refetch] = useUserOrder(user?.email)

       return (
              <div>
                     <Helmet><title>E-Commerce | User Order</title></Helmet>
                     <AdminSectionTitle SubHeading='--------Order List--------' Heading='Manage User Orders'></AdminSectionTitle>
                     {userOrderLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : userOrder?.length === 0 ? (<div className="flex items-center justify-center min-h-[200px]"><p className="text-gray-500 text-lg font-medium">No Orders Found</p></div>) : (
                            <div className="overflow-x-scroll  lg:min-w-full md:max-w-[500px] border border-gray-300 rounded-md">
                                   <div className="min-w-[900px] md:min-w-[1000px] lg:min-w-full">
                                          {/* -------------------Table Header Section-------------- */}
                                          <div className="grid p-2 font-semibold text-xs border-b border-gray-300" style={{ gridTemplateColumns: "minmax(130px, 2fr) repeat(6, 1fr)" }}>
                                                 <div className="p-2">Product Name</div>
                                                 <div className="py-2">Payment Method</div>
                                                 <div className="p-2 truncate text-center">Payment Status</div>
                                                 <div className="p-2 text-center">Order Status</div>
                                                 <div className="p-2 text-center">Delivery Status</div>
                                                 <div className="p-2 text-center">Total Price</div>
                                                 <div className="p-2 text-center">Invoice</div>
                                          </div>
                                          {/* -------------------Table Body Section-------------- */}
                                          {userOrder?.map((order, index) => (
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
                                                        <div className="p-2 flex items-center justify-center font-medium">{order?.paymentStatus}</div>
                                                        {/* -----------------Product Order Status-------------- */}
                                                        <div className="p-2 flex items-center justify-center font-medium">{order?.orderStatus}</div>
                                                        {/* --------------Product Delivery Status-------------- */}
                                                        <div className="p-2 flex items-center justify-center font-medium">{order?.deliveryStatus}</div>
                                                        {/* ----------------Product Price Status---------------- */}
                                                        <div className="p-2 flex items-center justify-center font-medium">{order?.totalAmount} Tk</div>
                                                        {/* ---------------Product Invoice Status--------------- */}
                                                        <button onClick={() => window.open(`http://localhost:5000/invoice/${order?._id}`, "_blank")} className="h-fit m-auto bg-Radical hover:bg-aliceBlue text-white hover:text-black rounded-xs p-2 cursor-pointer"><FaFileInvoiceDollar /></button>
                                                 </div>
                                          ))}
                                   </div>
                            </div>
                     )}
              </div>
       );
};

export default UserOrder;