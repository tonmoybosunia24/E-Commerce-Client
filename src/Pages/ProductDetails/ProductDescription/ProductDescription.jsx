import useProductDetails from "../../../Hooks/useProductDetails";
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillPinterest } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import brandImg1 from '../../../assets/Brands/Brands2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import productBrandImage from '../../../assets/Brands/Brands2.jpg'

const ProductDescription = ({ id }) => {
       const { product, relatedProducts, productDetailsLoading } = useProductDetails(id);
       console.log(relatedProducts)
       const [thumbsSwiper, setThumbsSwiper] = useState(null);
       const [value, setValue] = useState(1);
       const [activeTab, setActiveTab] = useState('Description')
       const { _id, Title, Description, Category, SubCategory, Price, OfferPrice, DiscountPercentage, Rating: ProductRating, Stock, Brand, Images, Colors, Variant, ShippingInformation, OfferTime, Condition, AvailabilityStatus, SellerInformation } = product;

       return (
              <div className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     {productDetailsLoading === true ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                            <div>
                                   <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                                          {/* -----------------------Image Slider------------------- */}
                                          <div className='md:w-5/10 lg:w-4/10'>
                                                 {/* -----------------Upper Swiper------------------ */}
                                                 <Swiper
                                                        style={{
                                                               '--swiper-navigation-color': '#fff',
                                                               '--swiper-pagination-color': '#fff',
                                                        }}
                                                        spaceBetween={10}
                                                        navigation={true}
                                                        thumbs={{ swiper: thumbsSwiper }}
                                                        modules={[FreeMode, Navigation, Thumbs]}
                                                        className="mySwiper2"
                                                 >
                                                        {Images?.map((pic, index) => (
                                                               <SwiperSlide className='border border-gray-400 hover:border-Radical' key={index}>
                                                                      <img className="aspect-[2/2] object-contain p-5" src={pic} />
                                                               </SwiperSlide>
                                                        ))}

                                                 </Swiper>
                                                 {/* -----------------Lower Swiper----------------- */}
                                                 <Swiper
                                                        onSwiper={setThumbsSwiper}
                                                        spaceBetween={10}
                                                        slidesPerView={3}
                                                        freeMode={true}
                                                        watchSlidesProgress={true}
                                                        modules={[FreeMode, Navigation, Thumbs]}
                                                        className="mySwiper mt-5"
                                                 >
                                                        {Images?.map((pic, index) => (
                                                               <SwiperSlide className='border border-gray-400 hover:border-Radical' key={index}>
                                                                      <img className="aspect-[2/2] object-contain p-2" src={pic} />
                                                               </SwiperSlide>
                                                        ))}
                                                 </Swiper>
                                          </div>
                                          {/* ------------------Product Details Side---------------- */}
                                          <div className='text-sm md:text-xs lg:text-base space-y-1.5'>
                                                 <p>Total Releted Products{relatedProducts.length}</p>
                                                 <div className="flex gap-2">
                                                        <Rating style={{ maxWidth: 80 }} value={ProductRating} />
                                                        <p>{ProductRating} Review(s)</p>
                                                 </div>
                                                 <h5 className='font-semibold text-3xl'>{Title}</h5>
                                                 <p className='text-gray-700'>{Description}</p>
                                                 <hr className='text-gray-400 my-1' />
                                                 <div className='flex justify-between items-center'>
                                                        <div className='space-y-1.5'>
                                                               <p><span className='font-bold'>Brand : </span>{Brand}</p>
                                                               <p><span className='font-bold'>Condition : </span>{Condition}</p>
                                                               <p className='font-bold'>Available In Stock : <span className='font-semibold text-green-700'>{Stock} Items</span></p>
                                                               {/* ----------------Variant/Size/Storage----------------- */}
                                                               <div className='flex gap-1'>
                                                                      <span className='font-bold'>{((Category === 'Electronics' || Category === 'Smart Home') && 'Variant :') || ((Category === 'Fashion' || Category === 'Kitchenware' || Category === 'Personal Care') && 'Size :') || (Category === 'Home Appliances' && 'Storage :')}</span>
                                                                      {Variant?.map((item, index) => (<p key={index}>{item} {index === Variant.length - 1 ? '' : ','}</p>
                                                                      ))}
                                                               </div>
                                                               {/* -----------------------Colors------------------------ */}
                                                               <div className='flex items-center gap-1'>
                                                                      <span className='font-bold'>Colors : </span>
                                                                      {Colors?.map(((color, index) => (
                                                                             <div key={index} className='w-7 h-7 border border-gray-400 rounded-full' style={{ backgroundColor: color }}></div>
                                                                      )))}
                                                               </div>
                                                        </div>
                                                        <div className='hidden lg:block'><img className='p-3 border border-gray-400 rounded-md' src={brandImg1} alt="" /></div>
                                                 </div>
                                                 {/* -------------Price/OfferPrice/Discount--------------- */}
                                                 <div className='flex items-center gap-3 '>
                                                        <del className='lg:text-xl text-gray-400'>{Price} Tk,</del>
                                                        <p className='text-Radical font-semibold lg:text-xl'>{OfferPrice} Tk,</p>
                                                        <p className='text-Radical font-semibold'><span>SAVE </span>{DiscountPercentage} % </p>
                                                 </div>
                                                 {/* -------------------Shipping Info--------------------- */}
                                                 <div>
                                                        <p><span className='font-bold'>Inside Dhaka : </span>{ShippingInformation?.InsideDhaka} ,</p>
                                                        <p><span className='font-bold'>Outside Dhaka : </span>{ShippingInformation?.OutsideDhaka}</p>
                                                 </div>
                                                 {/* ----------------Quantity Of Products----------------- */}
                                                 <div className='flex gap-2'>
                                                        <div className='flex'>
                                                               <div><input className='border outline-0 w-12 h-full pl-2' type="tel" value={value} /></div>
                                                               <div className='flex flex-col border border-l-0'>
                                                                      <div className='flex-1 border-b text-sm' onClick={() => setValue(value + 1)}><FaAngleUp /></div>
                                                                      <div className='flex-1 text-sm' onClick={() => value > 1 && setValue(value - 1)}><FaAngleDown /></div>
                                                               </div>
                                                        </div>
                                                        <div><button className='px-7 py-1.5 bg-Radical text-white rounded-sm hover:bg-black'>Add To Card</button></div>
                                                 </div>
                                                 {/* -----------------Wishlist And Compare---------------- */}
                                                 <div className='flex gap-2'>
                                                        <div className='flex items-center gap-0.5 hover:text-Radical cursor-pointer'>
                                                               <CiHeart className='text-2xl' />
                                                               <p>Add To Wishlist</p>
                                                        </div>
                                                        <div className='flex items-center gap-0.5 hover:text-Radical cursor-pointer'>
                                                               <MdContentCopy className='text-xl' />
                                                               <p>Add To Compare</p>
                                                        </div>
                                                 </div>
                                                 <p className={AvailabilityStatus === 'Limited Stock' ? 'w-max flex items-center text-yellow-700 bg-yellow-200 border border-yellow-500 px-2' : AvailabilityStatus === 'Not Available' ? 'w-max flex items-center text-red-700 bg-red-200 border border-red-500 px-2' : 'w-max flex items-center text-green-700 bg-green-200 border border-green-700 px-2'}>{AvailabilityStatus}</p>
                                                 {/* --------------Icons Of Social Media----------------- */}
                                                 <div className='flex gap-2 mt-2'>
                                                        <div className='border border-black px-5 py-2 text-blue-700'><FaFacebookF /></div>
                                                        <div className='border border-black px-5 py-2 text-black'><FaXTwitter /></div>
                                                        <div className='border border-black px-5 py-2 text-red-600'><AiFillPinterest /></div>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* ---------------Tabs For Product Description And Details----------------- */}
                                   <div className='pt-5 md:pt-7 lg:pt-10'>
                                          <Tabs>
                                                 <TabList className='flex gap-3 space-y-2 '>
                                                        <Tab onClick={() => setActiveTab('Description')} className={activeTab === 'Description' ? "font-bold text-lg outline-none cursor-pointer" : "font-semibold text-lg text-black cursor-pointer"}>Description</Tab>
                                                        <Tab onClick={() => setActiveTab('Product Details')} className={activeTab === 'Product Details' ? "font-bold text-lg outline-none cursor-pointer" : "font-semibold text-lg text-black  cursor-pointer"}>Product Details</Tab>
                                                 </TabList>
                                                 <TabPanel className='border border-gray-300 p-5 pb-0 border-b-0'>
                                                        <p>{Description}</p>
                                                 </TabPanel>
                                                 <TabPanel className='border border-gray-300 p-5 pt-0 border-t-0 space-y-0.5'>
                                                        <img src={productBrandImage} alt="" />
                                                        <p><span className='font-bold'>Brand : </span>{Brand}</p>
                                                        <p><span className='font-bold'>Condition : </span>{Condition || 'Unknown'}</p>
                                                        <p className='font-bold'>Available In Stock : <span className='font-semibold text-green-700'>{Stock} Items</span></p>
                                                 </TabPanel>
                                          </Tabs>
                                   </div>
                            </div>
                     )}
              </div>
       );
};

export default ProductDescription;