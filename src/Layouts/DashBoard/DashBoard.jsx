import { NavLink, Outlet, useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { LuCalendarClock, LuFolderPlus } from "react-icons/lu";
import { PiPhoneCallBold, PiSignOutBold, PiUsersThreeBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";

const DashBoard = () => {

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
              <div className="flex h-screen relative font-Roboto">
                     {/* -------------------SideBar Container----------------- */}
                     <div className="h-full bg-base-300 w-14 md:w-16 lg:w-20 fixed text-white pt-5">
                            {/* ------------------Drawer Container----------------- */}
                            <div className="drawer">
                                   {/* --------------------Drawer Header------------------ */}
                                   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                   <div className="drawer-content flex flex-col items-center gap-2.5">
                                          {/* -------------------Hamburger---------------- */}
                                          <div>
                                                 <label htmlFor="my-drawer" className="drawer-button text-black text-2xl cursor-pointer"><RxHamburgerMenu className="" /></label>
                                          </div>
                                          {/* ------------------Admin Home---------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Admin Home">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='adminHome'><AiOutlineHome /></NavLink></label>
                                          </div>
                                          {/* -----------------Add Products--------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Add Products">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='addProducts'><LuFolderPlus /></NavLink></label>
                                          </div>
                                          {/* -------------------Products----------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Products">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='products'><FiShoppingBag /></NavLink></label>
                                          </div>
                                          {/* -------------------Bookings----------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Bookings">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='bookings'><LuCalendarClock /></NavLink></label>
                                          </div>
                                          {/* --------------------Users------------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Users">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='users'><PiUsersThreeBold /></NavLink></label>
                                          </div>
                                          <div className="divider px-5"></div>
                                          {/* -------------------Home Page----------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Home">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='/'><AiOutlineHome /></NavLink></label>
                                          </div>
                                          {/* -----------------Products Page--------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Products">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='/products'><FiShoppingBag /></NavLink></label>
                                          </div>
                                          {/* -------------------Blogs Page---------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Blogs">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='/blogs'><IoNewspaperOutline /></NavLink></label>
                                          </div>
                                          {/* ----------------Contact Us Page-------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Contact Us">
                                                 <label htmlFor="my-drawer" className="text-2xl drawer-button"><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='/contactUs'><PiPhoneCallBold /></NavLink></label>
                                          </div>
                                          {/* --------------------Logout------------------- */}
                                          <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Sign Out">
                                                 <label onClick={handleLogOut} htmlFor="my-drawer" className="text-2xl drawer-button text-black cursor-pointer"><PiSignOutBold /></label>
                                          </div>
                                   </div>
                                   {/* --------------------------Drawer Sidebar---------------------- */}
                                   <div className="drawer-side">
                                          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                          <ul className="menu bg-base-300 min-h-full w-52 lg:w-60 p-5 space-y-2.5">
                                                 <h2 className="font-semibold text-xl text-black">Project Name</h2>
                                                 {/* ------------------Admin Home---------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='adminHome'><li className="flex flex-row gap-2 items-center text-base"><AiOutlineHome className="text-xl p-0" /> Admin Home</li></NavLink>
                                                 {/* -----------------Add Products--------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='addProducts'><li className="flex flex-row gap-2 items-center text-base "><LuFolderPlus className="text-xl p-0" /> Add Products</li></NavLink>
                                                 {/* -------------------Products----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='products'><li className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" /> Products</li></NavLink>
                                                 {/* -------------------Bookings----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='bookings'><li className="flex flex-row gap-2 items-center text-base "><LuCalendarClock className="text-xl p-0" /> Bookings</li></NavLink>
                                                 {/* --------------------Users------------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='users'><li className="flex flex-row gap-2 items-center text-base "><PiUsersThreeBold className="text-xl p-0" />Users</li></NavLink>
                                                 <div className="divider"></div>
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
                                          </ul>
                                   </div>
                            </div>
                     </div>
                     {/* -----------------Admin Pages Container--------------- */}
                     <div className="w-full ml-14 md:ml-16 lg:ml-20">
                            <Outlet></Outlet>
                     </div>
              </div>
       );
};

export default DashBoard;