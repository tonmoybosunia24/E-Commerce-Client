import { Link } from 'react-router';
import logo from '../../../assets/Logo/Logo-2.jpg'
import { PiShoppingCartLight } from 'react-icons/pi';
import { LiaUserSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosGitCompare, IoIosHeartEmpty } from 'react-icons/io';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useContext } from 'react';

const Header = () => {

       const { Links } = useContext(AuthContext)

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
                                                 <ul className="menu bg-white text-base-content min-h-full w-64 md:w-96 p-4">
                                                        {Links}
                                                 </ul>
                                          </div>
                                   </div>
                                   <img className='w-36 lg:w-full' src={logo} alt="" />
                            </div>
                            <div className='hidden md:flex lg:flex lg:flex-grow justify-center items-center gap-2'>
                                   <input type="text" placeholder="Search Products Here.." className="input focus:outline-none focus:border-gray-500" />
                                   <button className='bg-Radical hover:bg-black text-white rounded-sm px-5 py-2 cursor-pointer'>SEARCH</button>
                            </div>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                   {/* --------------------Login/Register Routes---------------- */}
                                   <div className='border-r px-3 border-gray-300 hidden lg:block'>
                                          <Link className='hover:text-Radical' to='/login'>Login</Link> / <Link className='hover:text-Radical' to='/register'>Register</Link>
                                   </div>
                                   {/* --------------------Header Icons------------------ */}
                                   <div className='flex gap-2 lg:gap-3'>
                                          <div className='lg:hidden'>
                                                 <LiaUserSolid className='text-2xl' />
                                          </div>
                                          <div className="indicator -z-10">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">0</span>
                                                 <button className='text-2xl'><IoIosGitCompare /></button>
                                          </div>
                                          <div className="indicator -z-10">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">0</span>
                                                 <button className="text-2xl"><IoIosHeartEmpty /></button>
                                          </div>
                                          <div className="indicator -z-10">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">0</span>
                                                 <button className="text-2xl"><PiShoppingCartLight /></button>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </header>
       );
};

export default Header;