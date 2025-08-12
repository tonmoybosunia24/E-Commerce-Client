import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/Logo/Logo-2.jpg'
import { AiOutlineHome } from "react-icons/ai";
import { PiPhoneCallBold, PiShoppingCartLight, PiSignInBold, PiSignOutBold, PiUsersThreeBold } from 'react-icons/pi';
import { LiaUserSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosGitCompare, IoIosHeartEmpty } from 'react-icons/io';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useContext, useRef, } from 'react';
import { toast } from 'react-toastify';
import useCarts from '../../../Hooks/useCarts';
import useAdmin from '../../../Hooks/useAdmin';
import { FiShoppingBag } from 'react-icons/fi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { LuCalendarClock, LuFolderPlus, LuLayoutDashboard } from 'react-icons/lu';
import useWishlist from '../../../Hooks/useWishlist';

const Header = () => {

       const [isAdmin, isAdminLoading] = useAdmin();
       const inputText = useRef();
       const navigate = useNavigate();
       const [carts] = useCarts();
       const { user, searchInput, setSearchInput, Logout } = useContext(AuthContext);
       const [wishlist, wishlistLoading, refetch] = useWishlist();
       const handleLogOut = () => {
              Logout()
                     .then(() => {
                            toast.success('Logout Successful')
                     })
                     .catch(error => {
                            toast.error(error.message)
                     })
       }

       const Links = <>
              {/* ------------------Admin Home---------------- */}
              {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/adminHome'><li className="flex flex-row gap-2 items-center text-base"><AiOutlineHome className="text-xl p-0" /> Admin Home</li></NavLink>}
              {/* -----------------Add Products--------------- */}
              {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/addProducts'><li className="flex flex-row gap-2 items-center text-base "><LuFolderPlus className="text-xl p-0" /> Add Products</li></NavLink>}
              {/* -------------------Products----------------- */}
              {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/products'><li className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" /> Products</li></NavLink>}
              {/* -------------------Bookings----------------- */}
              {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/bookings'><li className="flex flex-row gap-2 items-center text-base "><LuCalendarClock className="text-xl p-0" /> Bookings</li></NavLink>}
              {/* --------------------Users------------------- */}
              {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/users'><li className="flex flex-row gap-2 items-center text-base "><PiUsersThreeBold className="text-xl p-0" />Users</li></NavLink>}
              {/* -------------------Divider------------------ */}
              {!isAdminLoading && isAdmin && <hr className="border-gray-300" />}
              {/* -------------------User Home---------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/'><li className="flex flex-row gap-2 items-center text-base "><AiOutlineHome className="text-xl p-0" />Home</li></NavLink>
              {/* -----------------User Products-------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/products'><li className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" />Products</li></NavLink>
              {/* -----------------User Admin----------------- */}
              {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/adminHome'><li className="flex flex-row gap-2 items-center text-base "><LuLayoutDashboard className="text-xl p-0" />DashBoard</li></NavLink>}
              {/* ------------------User Blogs---------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/blogs'><li className="flex flex-row gap-2 items-center text-base "><IoNewspaperOutline className="text-xl p-0" />Blogs</li></NavLink>
              {/* -------------------About Us----------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/contactUs'><li className="flex flex-row gap-2 items-center text-base "><PiPhoneCallBold className="text-xl p-0" />Contact Us</li></NavLink>
              {/* --------------Sign In/Sign Out-------------- */}
              {user ? <div onClick={handleLogOut} className="flex flex-row gap-2 items-center font-semibold text-base text-black cursor-pointer"><PiSignOutBold className="text-xl p-0" />Sign Out</div> : <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/login'><li className="flex flex-row gap-2 items-center text-base "><PiSignInBold className="text-xl p-0" />Login</li></NavLink>}
       </>

       return (
              <header className='px-5 md:px-10 lg:px-20 py-5 border-b border-gray-300'>
                     <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                   {/* ----------------Header Drawer--------------- */}
                                   <div className="drawer lg:hidden">
                                          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                          <div className="drawer-content">
                                                 <label htmlFor="my-drawer" className="drawer-button"><RxHamburgerMenu className='text-2xl' /></label>
                                          </div>
                                          <div className="drawer-side z-20">
                                                 <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                                 <ul className="menu bg-aliceBlue min-h-full w-52 md:w-72 p-5 space-y-2.5">
                                                        {Links}
                                                 </ul>
                                          </div>
                                   </div>
                                   <img className='w-36 lg:w-full' src={logo} alt="" />
                            </div>
                            <div className='hidden md:flex lg:flex lg:flex-grow justify-center items-center gap-2'>
                                   <input type="text" value={searchInput} ref={inputText} onChange={(e) => setSearchInput(e.target.value.trim())} placeholder="Search Products Here.." className="input focus:outline-none focus:border-gray-500" />
                                   <button onClick={() => navigate('/products')} className='font-semibold bg-Radical hover:bg-black text-white rounded-sm px-5 py-2 cursor-pointer'>SEARCH</button>
                            </div>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                   {/* --------------------Login/Register/Logout Routes---------------- */}
                                   {user ? (
                                          <button className='font-bold hover:text-Radical cursor-pointer hidden lg:block' onClick={handleLogOut}> Sign Out</button>
                                   ) : (
                                          <div className='border-r px-3 border-gray-300 hidden lg:block'>
                                                 <Link className='font-bold hover:text-Radical' to='/login'>Login</Link> /
                                                 <Link className='font-bold hover:text-Radical' to='/register'> Register</Link>
                                          </div>
                                   )}
                                   {/* --------------------Header Icons------------------ */}
                                   <div className='flex gap-2 lg:gap-3'>
                                          <div className='lg:hidden'>
                                                 <LiaUserSolid className='text-2xl' />
                                          </div>
                                          <div className="indicator">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">0</span>
                                                 <button className='text-2xl'><IoIosGitCompare /></button>
                                          </div>
                                          <div className="indicator">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">{wishlist.length}</span>
                                                 <Link to='/addToWishlist' className="text-2xl"><IoIosHeartEmpty /></Link>
                                                 <button className="text-2xl"></button>
                                          </div>
                                          <div className="indicator">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">{carts.length} </span>
                                                 <Link to='/addToCarts' className="text-2xl cursor-pointer"><PiShoppingCartLight /></Link>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </header>
       );
};

export default Header;