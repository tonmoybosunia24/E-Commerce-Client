import { useContext, useEffect, useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {

       const { Links } = useContext(AuthContext)
       const [drawerOpen, setDrawerOpen] = useState(false)
       const [shadow, setShadow] = useState(false);
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

       return (
              <nav className={`hidden lg:flex justify-between sticky top-0 bg-white px-5 md:px-10 lg:px-20 py-3 border-b transition-shadow duration-100 ease-in-out border-gray-300 ${shadow ? 'shadow-md' : ''} relative z-20`}>
                     {/* ----------------Shop By Categories--------------- */}
                     <div className="relative">
                            <div onClick={() => setDrawerOpen(!drawerOpen)} className="flex items-center gap-2 cursor-pointer border-r border-gray-300 pr-3">
                                   <h3>SHOP BY CATEGORIES </h3>
                                   {drawerOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {/* <ul tabIndex={0} className={`absolute left-0 z-10 w-full p-2 shadow-md mt-3 transition-all delay-75 duration-500 ease-in-out bg-white ${drawerOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} border border-gray-300 space-y-1`}>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                                   <li className='hover:text-Radical cursor-pointer'><a>English</a></li>
                            </ul> */}
                     </div>
                     {/* --------------------NavBerlinks------------------ */}
                     <div>
                            <ul className="flex gap-2">{Links}</ul>
                     </div>
                     {/* ------------------Free Delevery------------------ */}
                     <div className="flex items-center gap-2">
                            <HiOutlineRocketLaunch className="text-xl" />
                            <p>Free International Delivery</p>
                     </div>
              </nav>
       );
};

export default Navbar;