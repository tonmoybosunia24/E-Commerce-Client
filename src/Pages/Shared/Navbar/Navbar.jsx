import { useEffect, useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useCategory from "../../../Hooks/useCategory";
import useAdmin from "../../../Hooks/useAdmin";
import { NavLink } from "react-router";
import useModerator from "../../../Hooks/useModerator";

const Navbar = () => {

       const [isAdmin, isAdminLoading] = useAdmin();
       const [isModerator, isModeratorLoading] = useModerator();
       const [drawerOpen, setDrawerOpen] = useState(false)
       const [shadow, setShadow] = useState(false);
       const [categories, categoriesLoading] = useCategory();
       // Handle The Shadow States By Scroll
       useEffect(() => {
              const handleScroll = () => {
                     if (window.scrollY > 100) {
                            setShadow(true)
                     }
                     else {
                            setShadow(false)
                     }
              };
              window.addEventListener('scroll', handleScroll);
              return () => window.removeEventListener('scroll', handleScroll)
       }, [])

       const Links = <>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold text-Radical' : 'text-black font-semibold'}`} to='/'>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='/products'>Products</NavLink></li>
              {!isAdminLoading && !isModeratorLoading && (isAdmin || isModerator) && <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to={isModerator && !isAdmin ? '/dashboard/addProducts' : '/dashboard/adminHome'}>DashBoard</NavLink></li>}
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='/blogs'>Blogs</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold text-Radical' : 'font-semibold text-black'}`} to='/contactUs'>Contact Us</NavLink></li>
       </>

       return (
              <nav className={`hidden lg:flex justify-between items-center sticky top-0 bg-white px-5 md:px-10 lg:px-20 py-3 border-b transition-shadow duration-100 ease-in-out border-gray-300 ${shadow ? 'shadow-md' : ''} relative z-30`}>
                     {/* ----------------Shop By Categories--------------- */}
                     {<div className="relative">
                            <div onClick={() => setDrawerOpen(!drawerOpen)} className="flex items-center gap-2 cursor-pointer border-r border-gray-300 pr-3">
                                   <h3 className="font-semibold">SHOP BY CATEGORIES </h3>
                                   {drawerOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {/* -----------------All Categories----------------- */}
                            {/* <ul tabIndex={0} className={absolute left-0 z-10 w-full p-2 shadow-md mt-3 transition-all delay-75 duration-500 ease-in-out bg-white ${drawerOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} border border-gray-300 space-y-1}>{categoriesLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (categories.map((category, index) => (
                                   <li key={index} className="hover:text-Radical">{category}</li>
                            )))}</ul> */}
                     </div>}
                     {/* --------------------NavBer links------------------ */}
                     <div>
                            <ul className="flex gap-2">{Links}</ul>
                     </div>
                     {/* ------------------Free Delivery------------------ */}
                     <div className="flex items-center gap-2">
                            <HiOutlineRocketLaunch className="text-xl" />
                            <p className="font-semibold">Free International Delivery</p>
                     </div>
              </nav>
       );
};

export default Navbar;