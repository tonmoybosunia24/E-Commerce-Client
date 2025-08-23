import { NavLink, Outlet, useNavigate } from "react-router";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { LuCalendarClock, LuFolderPlus } from "react-icons/lu";
import { PiPhoneCallBold, PiSignOutBold, PiUsersThreeBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Header from "../../Pages/Shared/Header/Header";
import HeaderTop from "../../Pages/Shared/HeaderTop/HeaderTop";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import Footer from "../../Pages/Home/Footer/Footer";
import useAdmin from "../../Hooks/useAdmin";

const DashBoard = () => {

       const [isAdmin, isAdminLoading] = useAdmin();
       const { Logout } = useContext(AuthContext);
       const navigate = useNavigate();
       const handleLogOut = () => {
              Logout()
                     .then(() => {
                            toast.success('Logout Successful')
                            navigate('/')
                     })
                     .catch(error => {
                            toast.error(error.message)
                     })
       }

       return (
              <div>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     <div className="px-5 md:px-10 lg:px-20 py-5 md:py-7 lg:py-10">
                            <div className="flex md:gap-5 lg:gap-5">
                                   <div className="h-fit hidden md:block lg:block lg:flex-3/12 md:flex-4/12 border border-gray-300 rounded-md">
                                          <div className="flex flex-col gap-3 bg-aliceBlue p-5">
                                                 {/* ------------------Admin Home---------------- */}
                                                 {!isAdminLoading && isAdmin && (<NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='adminHome'><li className="flex flex-row gap-2 items-center text-base"><AiOutlineHome className="text-xl p-0" /> Admin Home</li></NavLink>)}
                                                 {/* -----------------Add Products--------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='addProducts'><li className="flex flex-row gap-2 items-center text-base "><LuFolderPlus className="text-xl p-0" /> Add Products</li></NavLink>
                                                 {/* -------------------Products----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='products'><li className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" /> Products</li></NavLink>
                                                 {/* -------------------Bookings----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='orders'><li className="flex flex-row gap-2 items-center text-base "><LuCalendarClock className="text-xl p-0" /> Orders</li></NavLink>
                                                 {/* --------------------Users------------------- */}
                                                 {!isAdminLoading && isAdmin && (<NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='users'><li className="flex flex-row gap-2 items-center text-base "><PiUsersThreeBold className="text-xl p-0" />Users</li></NavLink>)}
                                                 {/* -------------------Divider------------------ */}
                                                 <hr className="border-gray-300" />
                                                 {/* -------------------Home Page----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/'><li className="flex flex-row gap-2 items-center text-base "><AiOutlineHome className="text-xl p-0" />Home</li></NavLink>
                                                 {/* -----------------Products Page--------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/products'><li className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" />Products</li></NavLink>
                                                 {/* -------------------Blogs Page---------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/blogs'><li className="flex flex-row gap-2 items-center text-base "><IoNewspaperOutline className="text-xl p-0" />Blogs</li></NavLink>
                                                 {/* ----------------Contact Us Page-------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/contactUs'><li className="flex flex-row gap-2 items-center text-base "><PiPhoneCallBold className="text-xl p-0" />Contact Us</li></NavLink>
                                                 {/* --------------------Logout------------------- */}
                                                 <li onClick={handleLogOut} className="flex flex-row gap-2 items-center font-semibold text-base text-black cursor-pointer"><PiSignOutBold className="text-xl p-0" />Sign Out</li>
                                          </div>
                                   </div>
                                   <div className="w-full md:flex-9/12 lg:flex-10/12">
                                          <Outlet></Outlet>
                                   </div>
                            </div>
                     </div>
                     <Footer></Footer>
              </div>
       );
};

export default DashBoard;