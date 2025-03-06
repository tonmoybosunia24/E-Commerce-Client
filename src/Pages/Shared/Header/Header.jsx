import { Link } from 'react-router';
import logo from '../../../assets/Logo/Logo-2.jpg'
import { IoIosGitCompare, IoIosHeartEmpty } from 'react-icons/io';
import { PiShoppingCartLight } from 'react-icons/pi';
import { LiaUserSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
       return (
              <header className='px-5 lg:px-20 py-5 border border-gray-300'>
                     <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                   <div className="drawer lg:hidden">
                                          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                          <div className="drawer-content">
                                                 <label htmlFor="my-drawer" className="drawer-button"><RxHamburgerMenu className='text-2xl' /></label>
                                          </div>
                                          <div className="drawer-side">
                                                 <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                                 <ul className="menu bg-white text-base-content min-h-full w-64 md:w-96 z-20 p-4">
                                                        <li><a className='hover:bg-white'>Sidebar Item 1</a></li>
                                                        <li><a className='hover:bg-white'>Sidebar Item 2</a></li>
                                                 </ul>
                                          </div>
                                   </div>
                                   <img className='w-36 lg:w-full' src={logo} alt="" />
                            </div>
                            <div className='hidden lg:flex flex-grow justify-center items-center gap-3 z-10'>
                                   <input type="text" placeholder="Search Products Here.." className="input input-md focus:outline-none" />
                                   <button className='bg-Radical hover:bg-black text-white rounded-sm px-5 py-2'>SEARCH</button>
                            </div>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                   <div className='border-r px-3 border-gray-300 hidden lg:block'>
                                          <Link to='/login'>Login</Link> / <Link to='/register'>Register</Link>
                                   </div>
                                   <div className='lg:hidden'>
                                          <LiaUserSolid className='text-2xl' />
                                   </div>
                                   <div className='flex gap-2 lg:gap-3'>
                                          <div className="indicator -z-10">
                                                 <span className="indicator-item bg-Radical text-xs text-white p-1 px-2 rounded-full">0</span>
                                                 <button className="text-2xl"><IoIosGitCompare /></button>
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
                     <div className='flex gap-3 lg:hidden mt-3'>
                            <input type="text" placeholder="Search Products Here.." className="input input-md focus:outline-none -z-10" />
                            <button className='bg-Radical hover:bg-black text-white rounded-sm px-5 py-2'>SEARCH</button>
                     </div>
              </header>
       );
};

export default Header;