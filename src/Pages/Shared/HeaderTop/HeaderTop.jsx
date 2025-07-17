import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// Language Menu Images
import english from '../../../assets/Icons/English.jpg'
import francais from '../../../assets/Icons/Francais.jpg'
import espanol from '../../../assets/Icons/Espanol.jpg'
import deutsch from '../../../assets/Icons/Deutsch.jpg'
import Italiano from '../../../assets/Icons/Italiano.jpg'
import polski from '../../../assets/Icons/Polski.jpg'
import nederlands from '../../../assets/Icons/Nederlands.jpg'
import pyccknn from '../../../assets/Icons/Pyccknn.jpg'
import portugues from '../../../assets/Icons/Porugues Pt.jpg'
import saudi from '../../../assets/Icons/اللغة العربية.jpg'

const HeaderTop = () => {

       const [languageOpen, setLanguageOpen] = useState(false)
       const [quickLinksOpen, setQuickLinksOpen] = useState(false)
       const [currencyOpen, setCurrencyOpen] = useState(false)

       return (
              <header>
                     <div className='flex justify-center lg:justify-between text-gray-500 text-sm border-b border-gray-300 px-5 md:px-10 lg:px-20 py-2'>
                            <div className='hidden lg:block'><p>Get Up To 50% Off New Season Styles, Limited Time Only</p></div>
                            <div className='flex gap-2'>
                                   <p className='hidden lg:block border-r border-gray-300 pr-2'>Help Center</p>
                                   <p className='hidden lg:block border-r border-gray-300 pr-2'>Order Tracking</p>
                                   {/* ----------------------Quick Links Dropdown Menu For Mobile------------------- */}
                                   <div className="relative lg:hidden border-r border-gray-300 pr-2">
                                          <div onClick={() => setQuickLinksOpen(!quickLinksOpen)} tabIndex={0} role="button" className="flex items-center gap-0.5 cursor-pointer ">Quick Links {quickLinksOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} </div>
                                          <ul tabIndex={0} className={`absolute left-1/2 transform  -translate-x-1/2 z-1 w-40 p-2 shadow-md mt-3 transition-all delay-75 duration-500 ease-in-out bg-white ${quickLinksOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} border border-t-0 border-gray-300`}>
                                                 <li className='hover:text-Radical cursor-pointer'><a>Help Center</a></li>
                                                 <li className='hover:text-Radical cursor-pointer'><a>Order Tracking</a></li>
                                          </ul>
                                   </div>
                                   {/* ---------------------Language Dropdown Menu----------------- */}
                                   <div className="relative border-r border-gray-300 pr-2">
                                          <div onClick={() => setLanguageOpen(!languageOpen)} tabIndex={0} role="button" className="flex items-center gap-1 cursor-pointer"> <img src={english} alt="" /> English {languageOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} </div>
                                          <ul tabIndex={0} className={`absolute left-1/2 transform  -translate-x-1/2 z-50 w-40 p-2 shadow-md mt-3 transition-all delay-75 duration-500 ease-in-out bg-white ${languageOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} border border-t-0 border-gray-300 space-y-1`}>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={english} alt="" /> <a>English</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={francais} alt="" /> <a>Francais</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={espanol} alt="" /> <a>Espanol</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={deutsch} alt="" /> <a>Deutsch</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={Italiano} alt="" /> <a>Italiano</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={polski} alt="" /> <a>Polski</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={nederlands} alt="" /> <a>Nederlands</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={pyccknn} alt="" /> <a>Pyccknn</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={portugues} alt="" /> <a>Portugues</a></li>
                                                 <li className='flex items-center gap-1 hover:text-Radical cursor-pointer'> <img src={saudi} alt="" /> <a>Saudi</a></li>
                                          </ul>
                                   </div>
                                   {/* ---------------------Currency Dhopdown Menu-------------------- */}
                                   <div className="relative">
                                          <div onClick={() => setCurrencyOpen(!currencyOpen)} tabIndex={0} role="button" className="flex items-center gap-0.5 cursor-pointer ">USD {currencyOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} </div>
                                          <ul tabIndex={0} className={`absolute left-1/2 transform  -translate-x-1/2 z-1 w-40 p-2 shadow-md mt-3 transition-all delay-75 duration-500 ease-in-out bg-white ${currencyOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} border border-t-0 border-gray-300`}>
                                                 <li className='hover:text-Radical cursor-pointer'><a>EUR</a></li>
                                                 <li className='hover:text-Radical cursor-pointer'><a>USD</a></li>
                                          </ul>
                                   </div>
                            </div>
                     </div>
              </header>
       );
};

export default HeaderTop;