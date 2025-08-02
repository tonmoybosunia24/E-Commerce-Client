import { useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { PiChatTeardropDotsThin } from "react-icons/pi";
import { IoIosArrowDown, IoLogoInstagram } from "react-icons/io";
import { FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";
import card1 from '../../../assets/CardLogo/visa.png'
import card2 from '../../../assets/CardLogo/master_card.png'
import card3 from '../../../assets/CardLogo/american_express.png'
import card4 from '../../../assets/CardLogo/paypal.png'
import card5 from '../../../assets/CardLogo/carte_bleue.png'

const Footer = () => {

       const [isContactOpen, setIsContactOpen] = useState(false);
       const [isProductsOpen, setIsProductsOpen] = useState(false);
       const [isCompanyOpen, setIsCompanyOpen] = useState(false);

       return (
              <footer className=''>
                     {/* -------------------Footer Top------------------- */}
                     <div className="px-5 md:px-10 lg:px-20 py-10 border-t border-t-gray-300">
                            <div className="flex flex-col lg:flex-row justify-between lg:gap-10 text-gray-700">
                                   {/* ---------- Desktop Contact Us ---------- */}
                                   <div className="flex-3/12 hidden lg:block space-y-3 border-r border-gray-300">
                                          <h3 className="font-semibold text-xl text-black">Contact Us</h3>
                                          <address>
                                                 Classyshop - Mega Super Store <br /> 507-Union Trade Centre <br /> France
                                          </address>
                                          <p>sales@yourcompany.com</p>
                                          <p className="font-semibold text-2xl text-Radical">(+91) 9876-543-210</p>
                                          <div className="flex items-center">
                                                 <PiChatTeardropDotsThin className="text-6xl text-Radical" />
                                                 <div>
                                                        <p className="font-semibold text-xl text-black">Online Chat <br /> Get Expert Help</p>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* ---------- Mobile Accordion: Contact Us ---------- */}
                                   <div className="lg:hidden w-full">
                                          <div>
                                                 <button onClick={() => setIsContactOpen(!isContactOpen)} className="flex justify-between items-center w-full py-3 px-0 focus:outline-none">
                                                        <span className="font-semibold text-xl text-black">Contact Us</span>
                                                        <IoIosArrowDown className={`transition-transform duration-300 ${isContactOpen ? "rotate-180" : ""}`} size={20} />
                                                 </button>
                                                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isContactOpen ? "max-h-[500px] opacity-100 space-y-3" : "max-h-0 opacity-0"}`}>
                                                        <address>
                                                               Classyshop - Mega Super Store <br /> 507-Union Trade Centre <br /> France
                                                        </address>
                                                        <p>sales@yourcompany.com</p>
                                                        <p className="font-semibold text-2xl text-Radical">(+91) 9876-543-210</p>
                                                        <div className="flex items-center">
                                                               <PiChatTeardropDotsThin className="text-6xl text-Radical" />
                                                               <div>
                                                                      <p className="font-semibold text-xl text-black">Online Chat <br /> Get Expert Help</p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* ---------- Desktop Products ---------- */}
                                   <div className="flex-2/12 space-y-3 hidden lg:block">
                                          <h3 className="font-semibold text-xl text-black">Products</h3>
                                          <ul className="space-y-2">
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Prices drop</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">New Products</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Best Sales</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Contact Us</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Sitemap</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Stores</li>
                                          </ul>
                                   </div>
                                   {/* ---------- Mobile Accordion: Products ---------- */}
                                   <div className="lg:hidden w-full">
                                          <div>
                                                 <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="flex justify-between items-center w-full py-3 px-0 focus:outline-none">
                                                        <span className="font-semibold text-xl text-black">Products</span>
                                                        <IoIosArrowDown className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} size={20} />
                                                 </button>
                                                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProductsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                        <ul className="space-y-3">
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Prices drop</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">New Products</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Best Sales</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Contact Us</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Sitemap</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Stores</li>
                                                        </ul>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* ---------- Our Company ---------- */}
                                   <div className="flex-2/12 hidden lg:block space-y-3">
                                          <h3 className="font-semibold text-xl text-black">Our Company</h3>
                                          <ul className="space-y-2">
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Delivery</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Legal Notice</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Terms And Conditions Of Use</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">About Us</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Secure Payment</li>
                                                 <li className="transition-transform duration-500 hover:translate-x-2 hover:text-Radical cursor-pointer">Login</li>
                                          </ul>
                                   </div>
                                   {/* ---------- Mobile Accordion: Company ---------- */}
                                   <div className="w-full lg:hidden">
                                          <div>
                                                 <button onClick={() => setIsCompanyOpen(!isCompanyOpen)} className="flex justify-between items-center w-full py-3 px-0 focus:outline-none">
                                                        <span className="font-semibold text-xl text-black">Our Company</span>
                                                        <IoIosArrowDown className={`transition-transform duration-300 ${isCompanyOpen ? "rotate-180" : ""}`} size={20} />
                                                 </button>
                                                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isCompanyOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                        <ul className="space-y-3">
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Prices drop</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">New Products</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Best Sales</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Contact Us</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Sitemap</li>
                                                               <li className="transition-transform duration-300 hover:translate-x-2 hover:text-Radical cursor-pointer">Stores</li>
                                                        </ul>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* ---------- Newsletter ---------- */}
                                   <div className="flex-4/12 space-y-3">
                                          <h3 className="font-semibold text-xl text-black">Subscribe to newsletter</h3>
                                          <p>Subscribe To Our Latest Newsletter To Get <br /> News About Special Discounts.</p>
                                          <div className="flex flex-col gap-3">
                                                 <input type="email" className="border border-gray-400 rounded-md  outline-0 px-3 py-2" placeholder="Your Email Address" />
                                                 <button className="bg-red-400 hover:bg-gray-800 text-white px-5 py-2 rounded-md">SUBSCRIBE</button>
                                          </div>
                                          <div className="flex items-start gap-1">
                                                 <input type="checkbox" className="checkbox rounded-none checkbox-xs" />
                                                 <p className="text-sm -mt-0.5">I Agree To The Terms And Conditions And The Privacy Policy</p>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     {/* ------------------Footer Bottom----------------- */}
                     <div className="flex flex-col lg:flex-row justify-between items-center gap-2 px-5 md:px-10 lg:px-20 py-5 border-t border-gray-300">
                            <div className="flex gap-1">
                                   <div className="text-sm border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white"><TiSocialFacebook /></div>
                                   <div className="text-sm border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white"><FaXTwitter /></div>
                                   <div className="text-sm border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white"><FaYoutube /></div>
                                   <div className="text-sm border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white"><FaPinterestP /></div>
                                   <div className="text-sm border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white"><IoLogoInstagram /></div>
                            </div>
                            <div><p className="text-gray-700 text-center">© 2025 - Ecommerce Software By PrestaShop™</p></div>
                            <div className="flex gap-1">
                                   <img src={card1} alt="" />
                                   <img src={card2} alt="" />
                                   <img src={card3} alt="" />
                                   <img src={card4} alt="" />
                                   <img src={card5} alt="" />
                            </div>
                     </div>
              </footer>
       );
};

export default Footer;