import { NavLink, Outlet, useNavigate } from "react-router";
import HeaderTop from "../../Pages/Shared/HeaderTop/HeaderTop";
import Header from "../../Pages/Shared/Header/Header";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import { AiOutlineHome } from "react-icons/ai";
import Footer from "../../Pages/Home/Footer/Footer";
import { LuCalendarClock } from "react-icons/lu";
import { FiEdit, FiShoppingBag } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { IoNewspaperOutline } from "react-icons/io5";
import { PiPhoneCallBold, PiSignOutBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";

const UserProfile = () => {

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
                     <Helmet><title>E-Commerce | User Profile</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     <div className="px-5 md:px-10 lg:px-20 py-5 md:py-7 lg:py-10">
                            <div className="flex md:gap-5 lg:gap-5">
                                   <div className="h-fit hidden md:block lg:block lg:flex-3/12 md:flex-4/12 border border-gray-300 rounded-md">
                                          <div className="flex flex-col gap-3 bg-aliceBlue p-5">
                                                 {/* -------------------Home Page----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/userProfile/userHome'><li className="flex flex-row gap-2 items-center text-base "><AiOutlineHome className="text-xl p-0" />Home</li></NavLink>
                                                 {/* -------------------Order Page----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/userProfile/userOrder'><li className="flex flex-row gap-2 items-center text-base "><LuCalendarClock className="text-xl p-0" />Orders</li></NavLink>
                                                 {/* ---------------Edit Profile Page-------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/userProfile/editProfile'><li className="flex flex-row gap-2 items-center text-base "><FiEdit className="text-xl p-0" />Edit Profile</li></NavLink>
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

export default UserProfile;