import useAdminChartData from "../../../Hooks/useAdminChartData";
import useAdminStats from "../../../Hooks/useAdminStats";
import {
       Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell
} from 'recharts';
const COLORS = ['#ff5252', '#666666'];
import { AiOutlineDollar } from "react-icons/ai";
import { LuCalendarClock, LuUsers } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { PiMoneyWavy } from "react-icons/pi";
import { Helmet } from "react-helmet-async";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";

const AdminHome = () => {

       const { adminStats, adminStatsPending } = useAdminStats();
       const { adminChartData, adminChartDataPending } = useAdminChartData();

       const monthlySales = adminChartData?.monthlySales?.map(item => ({
              month: `${item._id.year}-${String(item._id.month).padStart(2, "0")}`,
              TotalRevenue: item.totalRevenue,
              TotalOrders: item.totalOrders
       })) || [];

       const orderStatus = adminChartData?.orderStatus?.map(item => ({
              ordersStatus: item._id,
              TotalOrders: item.totalOrders
       })) || [];

       const paymentMethod = adminStats?.statusWise?.map(item => ({
              paymentStatus: item._id,
              totalOrders: item.totalOrders
       })) || [];

       return (
              <div>
                     <Helmet><title>E-Commerce | Admin Home</title></Helmet>
                     <AdminSectionTitle SubHeading='--------Manage Everything--------' Heading='Admin Dashboard Overview'></AdminSectionTitle>
                     {/* ------------------Admin Stats Container---------------- */}
                     <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {/* ------------------Total Revenue---------------- */}
                            <div className="border border-gray-300 border-b-3 border-b-Radical rounded-md p-3 bg-aliceBlue">
                                   <div className="flex items-center justify-between">
                                          <div className="font-semibold">Total Revenue</div>
                                          <div><AiOutlineDollar className="text-xl" /></div>
                                   </div>
                                   <h3 className="font-semibold text-gray-600">{adminStats?.totalRevenue ? adminStats.totalRevenue.toFixed(2) : 0} Tk</h3>
                            </div>
                            {/* -------------------Total Users----------------- */}
                            <div className="border border-gray-300 border-b-3 border-b-Radical rounded-md p-3 bg-aliceBlue">
                                   <div className="flex items-center justify-between">
                                          <div className="font-semibold">Total Users</div>
                                          <div><LuUsers className="text-xl" /></div>
                                   </div>
                                   <h3 className="font-semibold text-gray-600">{adminStats?.users}</h3>
                            </div>
                            {/* -------------------Total Orders----------------- */}
                            <div className="border border-gray-300 border-b-3 border-b-Radical rounded-md p-3 bg-aliceBlue">
                                   <div className="flex items-center justify-between">
                                          <div className="font-semibold">Total Orders</div>
                                          <div><LuCalendarClock className="text-xl" /></div>
                                   </div>
                                   <h3 className="font-semibold text-gray-600">{adminStats?.orders}</h3>
                            </div>
                            {/* -------------------Total Products---------------- */}
                            <div className="border border-gray-300 border-b-3 border-b-Radical rounded-md p-3 bg-aliceBlue">
                                   <div className="flex items-center justify-between">
                                          <div className="font-semibold">Total Products</div>
                                          <div><MdOutlineInventory2 className="text-xl" /></div>
                                   </div>
                                   <h3 className="font-semibold text-gray-600">{adminStats?.products}</h3>
                            </div>
                            {/* ----------------Online & Offline Sales Revenue-------------- */}
                            <div className="flex gap-5 col-span-2">
                                   {!adminStatsPending && adminStats.statusWise.map((paymentStatus, index) => (
                                          <div key={index} className="w-full border border-gray-300 border-b-3 border-b-Radical rounded-md p-3 bg-aliceBlue">
                                                 <div className="flex items-center justify-between">
                                                        <div className="font-semibold">{paymentStatus?._id}</div>
                                                        <div>{paymentStatus._id === "OnlinePayment" ? (<BsCreditCard2Front className="text-xl" />) : (<PiMoneyWavy className="text-xl" />)}</div>
                                                 </div>
                                                 <h3 className="font-semibold text-gray-600">{paymentStatus?.totalRevenue ? paymentStatus.totalRevenue.toFixed(2) : 0} Tk</h3>
                                          </div>
                                   ))}
                            </div>
                     </div>
                     {/* -------------------Bar & Pie Chart Container---------------- */}
                     <div className="flex flex-col md:flex-row lg:flex-row my-5 md:my-7 lg:my-10">
                            {/* ------------------Bar Chart Container---------------- */}
                            <div className="flex-1">
                                   <ResponsiveContainer width="100%" height={300} >
                                          <BarChart data={orderStatus} margin={{ top: 20, left: -35 }}>
                                                 <XAxis dataKey="ordersStatus" />
                                                 <YAxis />
                                                 <Tooltip />
                                                 <Legend />
                                                 <Bar dataKey="TotalOrders" fill="#ff5252" />
                                          </BarChart>
                                   </ResponsiveContainer>
                            </div>
                            {/* ------------------Pie Chart Container---------------- */}
                            <div className="flex-1">
                                   <ResponsiveContainer width="100%" height={300}>
                                          <PieChart>
                                                 <Pie data={paymentMethod} dataKey="totalOrders" nameKey="paymentStatus" cx="50%" cy="50%" outerRadius={100} label={({ index, percent }) => `${paymentMethod[index].paymentStatus}: ${(percent * 100).toFixed(0)}%`}>
                                                        {paymentMethod.map((entry, index) => (
                                                               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                 </Pie>
                                                 <Tooltip />
                                                 <Legend />
                                          </PieChart>
                                   </ResponsiveContainer>
                            </div>
                     </div>
                     {/* ------------------Monthly Sales AreaChart-------------- */}
                     <ResponsiveContainer width="100%" height={400}>
                            <AreaChart data={monthlySales} syncId="salesData">
                                   <CartesianGrid strokeDasharray="3 3" />
                                   <XAxis dataKey="month" />
                                   <YAxis />
                                   <Tooltip />
                                   <Legend />
                                   <Area type="monotone" dataKey="TotalRevenue" stroke="#ff5252" fill="#ff5252" strokeWidth={1} />
                                   <Area type="monotone" dataKey="TotalOrders" stroke="#666666" fill="#666666" strokeWidth={1} />
                            </AreaChart>
                     </ResponsiveContainer>
              </div>
       );
};

export default AdminHome;