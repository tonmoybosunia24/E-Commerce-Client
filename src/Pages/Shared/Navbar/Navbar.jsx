import { useEffect, useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import useCategory from "../../../Hooks/useCategory";
import useAdmin from "../../../Hooks/useAdmin";
import { Link, NavLink } from "react-router";
import useModerator from "../../../Hooks/useModerator";

const Navbar = () => {

       const [isAdmin, isAdminLoading] = useAdmin();
       const [isModerator, isModeratorLoading] = useModerator();
       const [open, setOpen] = useState(false);
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
                            <div onClick={() => setOpen(true)} className="flex items-center gap-2 cursor-pointer border-r border-gray-300 pr-3">
                                   <h3 className="font-semibold">SHOP BY CATEGORIES </h3>
                                   {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {/* -----------------All Categories----------------- */}
                            {open && (<div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"></div>)}
                            {/* ----------------Shopping Cart Container---------------- */}
                            <div className={`fixed top-0 left-0 h-screen bg-aliceBlue w-70 z-50 transform transition-transform duration-300 ease-in-out shadow-lg flex flex-col ${open ? "translate-x-0" : "-translate-x-full"}`}>
                                   <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300">
                                          <h2 className="font-semibold text-lg">All Categories</h2>
                                          <IoMdClose onClick={() => setOpen(false)} className="text-2xl cursor-pointer" />
                                   </div>
                                   <div className="space-y-1 p-5">
                                          {categoriesLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                                                 categories.map((category, index) => (
                                                        <p key={index} className="font-semibold text-lg underline hover:text-Radical cursor-pointer"><Link to={`/products?category=${category}`}>{category}</Link></p>
                                                 )))}
                                   </div>
                            </div>
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