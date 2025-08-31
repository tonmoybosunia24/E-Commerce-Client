import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/Logo/Logo-2.jpg'
import { AiOutlineHome } from "react-icons/ai";
import { PiPhoneCallBold, PiShoppingCartLight, PiSignInBold, PiSignOutBold, PiUserCircleLight, PiUsersThreeBold } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowDown, IoIosHeartEmpty, IoMdClose } from 'react-icons/io';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useContext, useEffect, useRef, useState, } from 'react';
import toast from "react-hot-toast";
import useCarts from '../../../Hooks/useCarts';
import useAdmin from '../../../Hooks/useAdmin';
import { FiEdit, FiShoppingBag } from 'react-icons/fi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { LuCalendarClock, LuFolderPlus, LuLayoutDashboard } from 'react-icons/lu';
import useWishlist from '../../../Hooks/useWishlist';
import useModerator from '../../../Hooks/useModerator';
import { FaTrashAlt } from 'react-icons/fa';
import useDeleteCart from '../../../Hooks/useDeleteCart';
import Swal from 'sweetalert2';
import { ImProfile } from "react-icons/im";
import useUserInfo from '../../../Hooks/useUserInfo';

const Header = () => {

       const [isAdmin, isAdminLoading] = useAdmin();
       const [isModerator, isModeratorLoading] = useModerator()
       const inputText = useRef();
       const navigate = useNavigate();
       const [carts, cartsLoading, refetch] = useCarts();
       const { user, searchInput, setSearchInput, Logout } = useContext(AuthContext);
       const [userInfo, userInfoPending] = useUserInfo();
       const [wishlist, wishlistLoading] = useWishlist();
       const [open, setOpen] = useState(false);
       const shippingCharge = 150;
       const taxRate = 0.10;
       const subTotalPrice = parseFloat(carts.reduce((sum, cart) => sum + cart.Price * cart.Quantity, 0).toFixed(2));
       const totalWithoutTax = subTotalPrice + shippingCharge;
       const taxAmount = parseFloat((subTotalPrice * taxRate).toFixed(2));
       const totalWIthTax = parseFloat((totalWithoutTax + taxAmount).toFixed(2));
       const { deleteCardItem, isLoading } = useDeleteCart();
       const [profileOpen, setProfileOpen] = useState(false);
       const [adminOpen, setAdminOpen] = useState(false);

       useEffect(() => {
              if (open) {
                     document.documentElement.style.overflow = "hidden";
                     document.body.style.overflow = "hidden";
              } else {
                     document.documentElement.style.overflow = "";
                     document.body.style.overflow = "";
              }
              return () => {
                     document.documentElement.style.overflow = "";
                     document.body.style.overflow = "";
              };
       }, [open]);

       const handleLogOut = () => {
              Logout()
                     .then(() => {
                            toast.success('Logout Successful')
                     })
                     .catch(error => {
                            toast.error(error.message)
                     })
       }

       const handleDelete = (id) => {
              Swal.fire({
                     title: "Are You Sure?",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: ' #ff5252',
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, Delete"
              }).then((result) => {
                     if (result.isConfirmed) {
                            deleteCardItem(id, {
                                   onSuccess: () => {
                                          Swal.fire({
                                                 title: "Deleted!",
                                                 icon: "success",
                                                 confirmButtonText: "Done",
                                                 confirmButtonColor: "#ff5252"
                                          });
                                          refetch();
                                   },
                                   onError: (error) => {
                                          toast.error(error.message)
                                   }
                            })
                     }
              });
       }

       const Links = <>
              {/* -------------------User Home---------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/'><p className="flex flex-row gap-2 items-center text-base "><AiOutlineHome className="text-xl p-0" />Home</p></NavLink>
              {/* -----------------User Products-------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/products'><p className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" />Products</p></NavLink>
              {/* ---------------Admin DashBoard-------------- */}
              {!isAdminLoading && !isModeratorLoading && (isAdmin || isModerator) &&
                     <div className="w-full">
                            <div>
                                   <button onClick={() => setAdminOpen(!adminOpen)} className="flex justify-between items-center w-full focus:outline-none">
                                          <div className='flex items-center gap-2'>
                                                 <LuLayoutDashboard className='text-xl p-0' />
                                                 <span className="font-semibold text-base text-black">DashBoard</span>
                                          </div>
                                          <IoIosArrowDown className={`transition-transform duration-300 ${adminOpen ? "rotate-180" : ""}`} size={20} />
                                   </button>
                                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${adminOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                          <ul className="space-y-0">
                                                 <li className="cursor-pointer">
                                                        {/* ------------------Admin Home---------------- */}
                                                        {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/adminHome'><p className="flex flex-row gap-2 items-center text-base"><AiOutlineHome className="text-xl p-0" /> Admin Home</p></NavLink>}
                                                        {/* -----------------Add Products--------------- */}
                                                        {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/addProducts'><p className="flex flex-row gap-2 items-center text-base "><LuFolderPlus className="text-xl p-0" /> Add Products</p></NavLink>}
                                                        {!isModeratorLoading && isModerator && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/addProducts'><p className="flex flex-row gap-2 items-center text-base "><LuFolderPlus className="text-xl p-0" /> Add Products</p></NavLink>}
                                                        {/* -------------------Products----------------- */}
                                                        {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/products'><p className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" /> Products</p></NavLink>}
                                                        {!isModeratorLoading && isModerator && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/products'><p className="flex flex-row gap-2 items-center text-base "><FiShoppingBag className="text-xl p-0" /> Products</p></NavLink>}
                                                        {/* -------------------Orders----------------- */}
                                                        {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/orders'><p className="flex flex-row gap-2 items-center text-base "><LuCalendarClock className="text-xl p-0" /> Orders</p></NavLink>}
                                                        {!isModeratorLoading && isModerator && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/orders'><li className="flex flex-row gap-2 items-center text-base "><LuCalendarClock className="text-xl p-0" /> Orders</li></NavLink>}
                                                        {/* --------------------Users------------------- */}
                                                        {!isAdminLoading && isAdmin && <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/dashboard/users'><p className="flex flex-row gap-2 items-center text-base "><PiUsersThreeBold className="text-xl p-0" />Users</p></NavLink>}
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </div>
              }
              {/* -----------------User Profile--------------- */}
              <div className="lg:hidden w-full">
                     <div>
                            <button onClick={() => setProfileOpen(!profileOpen)} className="flex justify-between items-center w-full focus:outline-none">
                                   <div className='flex items-center gap-2'>
                                          <ImProfile className='text-xl p-0' />
                                          <span className="font-semibold text-base text-black">Profile</span>
                                   </div>
                                   <IoIosArrowDown className={`transition-transform duration-300 ${profileOpen ? "rotate-180" : ""}`} size={20} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${profileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                   <ul className="space-y-0">
                                          <li className="cursor-pointer">
                                                 {/* -------------------Home Page----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent py-0.5 ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/userProfile/userHome'><p className="flex flex-row gap-2 items-center text-base "><AiOutlineHome className="text-xl p-0" />Home</p></NavLink>
                                                 {/* -------------------Order Page----------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent py-0.5 ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/userProfile/userOrder'><p className="flex flex-row gap-2 items-center text-base "><LuCalendarClock className="text-xl p-0" />Orders</p></NavLink>
                                                 {/* ---------------Edit Profile Page-------------- */}
                                                 <NavLink className={({ isActive }) => `!bg-transparent py-0.5 ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/userProfile/editProfile'><p className="flex flex-row gap-2 items-center text-base "><FiEdit className="text-xl p-0" />Edit Profile</p></NavLink>
                                          </li>
                                   </ul>
                            </div>
                     </div>
              </div>
              {/* ------------------User Blogs---------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/blogs'><p className="flex flex-row gap-2 items-center text-base "><IoNewspaperOutline className="text-xl p-0" />Blogs</p></NavLink>
              {/* -------------------About Us----------------- */}
              <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/contactUs'><p className="flex flex-row gap-2 items-center text-base "><PiPhoneCallBold className="text-xl p-0" />Contact Us</p></NavLink>
              {/* --------------Sign In/Sign Out-------------- */}
              {user ? <div onClick={handleLogOut} className="flex flex-row gap-2 items-center font-semibold text-base text-black cursor-pointer"><PiSignOutBold className="text-xl p-0" />Sign Out</div> : <NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-semibold text-Radical' : 'font-semibold text-black'}`} to='/login'><p className="flex flex-row gap-2 items-center text-base "><PiSignInBold className="text-xl p-0" />Login</p></NavLink>}
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
                                          <div className='border-r px-3 border-gray-300'><button className='font-bold hover:text-Radical cursor-pointer hidden lg:block' onClick={handleLogOut}> Sign Out</button></div>
                                   ) : (
                                          <div className='border-r px-3 border-gray-300 hidden lg:block'>
                                                 <Link className='font-bold hover:text-Radical' to='/login'>Login</Link> /
                                                 <Link className='font-bold hover:text-Radical' to='/register'> Register</Link>
                                          </div>
                                   )}
                                   {/* --------------------Header Icons------------------ */}
                                   <div className='flex gap-2 lg:gap-2.5'>
                                          {!userInfoPending && userInfo ? (<Link to='/userProfile/userHome' className='cursor-pointer'><img className='w-6 h-6 rounded-full object-cover border-2 border-gray-300' src={userInfo?.image[0]} alt="" /></Link>) : (<Link to='/login'><PiUserCircleLight className='text-2xl' /></Link>)}
                                          <div className="indicator">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">{wishlist.length}</span>
                                                 <Link to='/addToWishlist' className="text-2xl"><IoIosHeartEmpty /></Link>
                                                 <button className="text-2xl"></button>
                                          </div>
                                          <div onClick={() => setOpen(true)} className="relative indicator">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">{carts.length} </span>
                                                 <button className="text-2xl cursor-pointer"><PiShoppingCartLight /></button>
                                          </div>
                                          {open && (<div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"></div>)}
                                          {/* ----------------Shopping Cart Container---------------- */}
                                          <div className={`fixed top-0 right-0 h-screen bg-aliceBlue w-64 md:w-96 lg:w-96 z-50 transform transition-transform duration-300 ease-in-out shadow-lg flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`}>
                                                 <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300">
                                                        <h2 className="font-semibold text-lg">Shopping Cart ({carts?.length})</h2>
                                                        <IoMdClose onClick={() => setOpen(false)} className="text-2xl cursor-pointer" />
                                                 </div>
                                                 <div className='flex-1 overflow-y-auto'>
                                                        {carts.map((cart) => (
                                                               <div key={cart?._id} className={`flex justify-between gap-2 px-5 py-3 border-b border-gray-300`}>
                                                                      <div className='flex gap-3'>
                                                                             <img className="w-14 h-14 lg:w-20 lg:h-20 aspect-2/2 object-contain p-2 border border-gray-300" src={cart?.Images?.[0]} alt="" />
                                                                             <div>
                                                                                    <h2 className=' font-bold text-sm md:text-base lg:text-base'>{cart?.Title}</h2>
                                                                                    <p><span className='font-semibold'>{cart?.Quantity}</span> X <span className='font-semibold text-Radical'>{cart?.Price} Tk</span></p>
                                                                             </div>
                                                                      </div>
                                                                      <div className="">
                                                                             <FaTrashAlt onClick={() => { handleDelete(cart?._id) }} className="bg-Radical hover:bg-aliceBlue text-3xl text-white hover:text-black rounded-xs p-2 cursor-pointer" />
                                                                      </div>
                                                               </div>
                                                        ))}
                                                 </div>
                                                 <div className='px-5 py-5'>
                                                        {/* ----------------Products Total Price------------- */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-semibold">{carts.length} Products</p>
                                                               <p className="font-bold text-Radical">{subTotalPrice.toLocaleString()} Tk</p>
                                                        </div>
                                                        {/* --------------Products Shipping Charges----------- */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-semibold">Shipping</p>
                                                               <p className="font-bold text-Radical">{shippingCharge.toLocaleString()} Tk</p>
                                                        </div>
                                                        {/* -----------Products Price Without Tax------------- */}
                                                        <hr className="text-gray-300 my-3" />
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-semibold">Total (Tax Excl.)</p>
                                                               <p className="font-bold text-Radical">{totalWithoutTax.toLocaleString()} Tk</p>
                                                        </div>
                                                        {/* ------------Products Price Total Tax-------------- */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-semibold">Taxes</p>
                                                               <p className="font-bold text-Radical">{taxAmount.toLocaleString()} Tk</p>
                                                        </div>
                                                        <hr className="text-gray-300 my-2" />
                                                        {/* --------------Products Total Price---------------- */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-semibold">Total (Tax Incl.)</p>
                                                               <p className="font-bold text-Radical">{totalWIthTax.toLocaleString()} Tk</p>
                                                        </div>
                                                        {/* ----------------View & CheckOut Page-------------- */}
                                                        <div className='flex justify-between gap-3 mt-5 text-center'>
                                                               <Link to='/addToCarts' className='font-semibold bg-Radical  hover:bg-black text-sm lg:text-base text-white flex-1 px-2 py-2 rounded-sm'>VIEW CART</Link>
                                                               <Link to='/checkOut' className='font-semibold bg-Radical  hover:bg-black text-sm lg:text-base text-white flex-1 px-2 py-2 rounded-sm'>CHECKOUT</Link>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </header >
       );
};

export default Header;