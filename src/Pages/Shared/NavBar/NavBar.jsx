import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router";

const NavBar = () => {

       const Links = <>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-teal-dark' : 'font-light text-black'}`} to='/'>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-teal-dark' : 'font-light text-black'}`} to='/shop'>Shop</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-teal-dark' : 'font-light text-black'}`} to='/blog'>Blogs</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-teal-dark' : 'font-light text-black'}`} to='/contact'>Contact</NavLink></li>
       </>

       return (
              <nav>
                     {/* -------------------For Desktop------------------- */}
                     <div className="hidden lg:block">
                            <div className="flex justify-between items-center py-3">
                                   <div>
                                          <h2 className="font-secondary font-bold text-4xl">Wara</h2>
                                   </div>
                                   <div>
                                          <ul className="flex gap-3">
                                                 {Links}
                                          </ul>
                                   </div>
                                   <div className="flex items-center gap-2">
                                          <div className="w-fit relative">
                                                 <div className="absolute -top-3 right-0 text-xs bg-teal-dark text-white rounded-full px-[7px] py-[3px]">0</div>
                                                 <IoIosHeartEmpty className="text-3xl" />
                                          </div>
                                          <div className="w-fit relative">
                                                 <div className="absolute -top-3 right-0 text-xs bg-teal-dark text-white rounded-full px-[7px] py-[3px]">0</div>
                                                 <IoBagHandleOutline className="text-3xl" />
                                          </div>
                                   </div>
                            </div>
                     </div>
                     {/* -------------------For Mobile------------------- */}
                     <div className="flex justify-between items-center py-3 lg:hidden">
                            <div>
                                   <h2 className="font-secondary font-bold text-4xl">Wara</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                   <div className="w-fit relative">
                                          <div className="absolute -top-3 right-0 text-xs bg-teal-dark text-white rounded-full px-[7px] py-[3px]">0</div>
                                          <IoIosHeartEmpty className="text-3xl" />
                                   </div>
                                   <div className="w-fit relative">
                                          <div className="absolute -top-3 right-0 text-xs bg-teal-dark text-white rounded-full px-[7px] py-[3px]">0</div>
                                          <IoBagHandleOutline className="text-3xl" />
                                   </div>
                                   <div className="drawer">
                                          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                          <div className="drawer-content">
                                                 <label htmlFor="my-drawer" className="drawer-button"><RxHamburgerMenu className="text-3xl" /></label>
                                          </div>
                                          <div className="drawer-side z-20">
                                                 <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                                 <ul className="menu bg-mint text-base-content min-h-full w-64 p-4">
                                                        {Links}
                                                 </ul>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </nav>
       );
};

export default NavBar;