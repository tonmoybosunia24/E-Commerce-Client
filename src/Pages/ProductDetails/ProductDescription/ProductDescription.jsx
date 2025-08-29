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
import ProductCard from "../../Shared/ProductCard/ProductCard";
import productBrandImage from '../../../assets/Brands/Brands2.jpg'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import useAddToCarts from '../../../Hooks/useAddToCarts';

const ProductDescription = ({ product, relatedProducts, productDetailsLoading }) => {

       const [thumbsSwiper, setThumbsSwiper] = useState(null);
       const [value, setValue] = useState(1);
       const [activeTab, setActiveTab] = useState('Description')
       const { _id, Title, Description, Category, SubCategory, Price, OfferPrice, DiscountPercentage, Rating: ProductRating, Stock, Brand, Images, Colors, Variant, ShippingInformation, Condition, AvailabilityStatus, SellerInformation } = product;
       const handleAddToCart = useAddToCarts();

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
                                                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
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
                                          <div className='w-full text-sm md:text-xs lg:text-base space-y-1.5'>
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
                                                               <p className='font-bold'>Available In Stock : <span className={`font-semibold ${Stock <= 10 ? 'text-red-700' : Stock <= 50 ? 'text-yellow-700' : 'text-green-700'}`}>{Stock} Items</span></p>
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
                                                 <div className="flex gap-2">
                                                        {OfferPrice > 0 ? (<><del className={`text-gray-300 text-lg lg:text-2xl font-medium`}>{Price} Tk</del>
                                                               <p className={`text-Radical text-lg lg:text-2xl font-semibold`} >{OfferPrice} Tk</p></>
                                                        ) : (<p className={`text-Radical text-lg lg:text-2xl font-semibold`} >{Price} Tk</p>)}
                                                        {OfferPrice > 0 && <p className='text-Radical font-semibold'><span>SAVE </span>{DiscountPercentage} % </p>}
                                                 </div>
                                                 {/* -------------------Shipping Info--------------------- */}
                                                 <div>
                                                        <p><span className='font-bold'>Inside Dhaka : </span>{ShippingInformation?.InsideDhaka} ,</p>
                                                        <p><span className='font-bold'>Outside Dhaka : </span>{ShippingInformation?.OutsideDhaka}</p>
                                                 </div>
                                                 {/* ----------------Quantity Of Products----------------- */}
                                                 <div className='flex gap-2'>
                                                        <div className='flex'>
                                                               <div><input className='border border-gray-300 outline-0 w-12 h-full pl-2' type="tel" value={value} onChange={(e) => setValue(e.target.value)} /></div>
                                                               <div className='flex flex-col border border-l-0 border-gray-300'>
                                                                      <div className='flex-1 border-b border-gray-300 text-sm' onClick={() => setValue(value + 1)}><FaAngleUp /></div>
                                                                      <div className='flex-1 text-sm' onClick={() => value > 1 && setValue(value - 1)}><FaAngleDown /></div>
                                                               </div>
                                                        </div>
                                                        <div><button onClick={() => handleAddToCart(product, value)} disabled={product.Stock === 0 || value > product.Stock} className={`px-7 py-1.5 rounded-sm text-white ${product.Stock === 0 || value > product.Stock ? 'bg-Radical hover:bg-black cursor-not-allowed' : 'bg-Radical hover:bg-black'}`}>{product.Stock === 0 || value > product.Stock ? 'Out of Stock' : 'Add To Cart'}</button></div>
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
                                                 <p><span className={Stock === 0 ? 'w-max flex items-center text-red-700 bg-red-200 border border-red-500 px-2' : Stock <= 50 ? 'w-max flex items-center text-yellow-700 bg-yellow-200 border border-yellow-500 px-2' : 'w-max flex items-center text-green-700 bg-green-200 border border-green-700 px-2'}>{Stock === 0 ? 'Out Of Stock' : Stock <= 50 ? 'Limited Stock' : 'In Stock'}</span></p>
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
                                                        <p><span className='font-bold'>Delivery Inside Dhaka : </span>{ShippingInformation?.InsideDhaka} Tk</p>
                                                        <p><span className='font-bold'>Delivery Outside Dhaka : </span>{ShippingInformation?.OutsideDhaka} Tk</p>
                                                        <p><span className='font-bold'>DeliveryTime Inside Dhaka : </span>{ShippingInformation?.EstimatedDeliveryTime?.InsideDhaka}</p>
                                                        <p><span className='font-bold'>DeliveryTime Inside Dhaka : </span>{ShippingInformation?.EstimatedDeliveryTime?.OutsideDhaka}</p>
                                                        <p><span className='font-bold'>Description : </span>{Description}</p>
                                                 </TabPanel>
                                                 <TabPanel className='border border-gray-300 p-5 pt-0 border-t-0 space-y-0.5'>
                                                        <img src={productBrandImage} alt="" />
                                                        <p><span className='font-bold'>Brand : </span>{Brand}</p>
                                                        <p><span className='font-bold'>SubCategory : </span>{SubCategory}</p>
                                                        <p><span className='font-bold'>Condition : </span>{Condition || 'Unknown'}</p>
                                                        <p className='font-bold'>Available In Stock : <span className='font-semibold text-green-700'>{Stock} Items</span></p>
                                                        <p><span className='font-bold'>SellerName : </span>{SellerInformation.name}</p>
                                                        <p><span className='font-bold'>Location : </span>{SellerInformation.location}</p>
                                                        <p><span className='font-bold'>Rating : </span>{SellerInformation.rating}</p>
                                                        <p><span className='font-bold'>Contact : </span>{SellerInformation.contact}</p>
                                                 </TabPanel>
                                          </Tabs>
                                   </div>
                                   <div className='pt-5 md:pt-7 lg:pt-10'>
                                          {/* -----------------Title And Slider Navigation----------------- */}
                                          <div className='flex justify-between items-center mb-3'>
                                                 <h2 className='font-bold text-base md:text-xl lg:text-xl hover:text-Radical'>You Might Also Like</h2>
                                                 <div className='flex items-center'>
                                                        <div className='cursor-pointer'><IoIosArrowDropleftCircle className='PrevFeatured  text-3xl lg:text-3xl text-Radical' /></div>
                                                        <div className='cursor-pointer'><IoIosArrowDroprightCircle className='NextFeatured  text-3xl lg:text-3xl text-Radical' /></div>
                                                 </div>
                                          </div>
                                          {/* ------------Products Sent To Product Card & Added Swiper Js----------- */}
                                          <div className='h-auto'>
                                                 <Swiper
                                                        slidesPerView={2}
                                                        spaceBetween={0}
                                                        freeMode={true}
                                                        modules={[FreeMode, Navigation]}
                                                        navigation={{
                                                               nextEl: '.NextFeatured',
                                                               prevEl: '.PrevFeatured',
                                                        }}
                                                        className={`mySwiper h-auto ${!productDetailsLoading && relatedProducts.length >= 5 ? 'border border-l-0 border-gray-400' : ''} ${relatedProducts.length > 1 && relatedProducts.length < 5 ? 'border-l border-gray-400' : ''}`}
                                                        breakpoints={{
                                                               640: { slidesPerView: 2 },
                                                               768: { slidesPerView: 4 },
                                                               1024: { slidesPerView: 5 },
                                                        }}
                                                 >
                                                        {productDetailsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (relatedProducts.map((product, index) => <SwiperSlide key={index} className={`!h-auto flex ${index === 0 ? 'border-l border-gray-400' : 'border-l border-gray-400'} ${relatedProducts.length > 0 && relatedProducts.length < 5 ? 'border-t border-r border-b' : ''} ${relatedProducts.length > 1 && relatedProducts.length < 5 ? 'border-l-0' : ''}`}>
                                                               <div className={`w-full h-full flex flex-col`}><ProductCard product={product} /></div></SwiperSlide>))}
                                                 </Swiper>
                                          </div>
                                   </div>
                            </div>
                     )}
              </div>
       );
};

export default ProductDescription;