import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { SlSizeFullscreen } from "react-icons/sl";
import { CiShare1 } from "react-icons/ci";
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
import Countdown from 'react-countdown';
import brandImg1 from '../../../assets/Brands/Brands2.jpg'


const ProductCard = ({ product, fromSlider = '', isColumn }) => {

       const { _id, Title, Description, Category, SubCategory, Price, OfferPrice, DiscountPercentage, Rating: ProductRating, Stock, Brand, Images, Colors, Variant, ShippingInformation, OfferTime, Condition, AvailabilityStatus, SellerInformation } = product;
       const [thumbsSwiper, setThumbsSwiper] = useState(null);
       const [value, setValue] = useState(1);
       /* ---------------Count Total Milliseconds-------------- */
       const totalMilliseconds = (((OfferTime?.Day || 0) * 24 + (OfferTime?.Hour || 0)) * 60 + (OfferTime?.Minutes || 0)) * 60 * 1000 + (OfferTime?.Second || 0) * 1000;
       const targetDate = Date.now() + totalMilliseconds;

       return (
              <div className="h-full relative p-3 group">
                     {/* ------------------Product Main Card----------------- */}
                     {fromSlider === 'allProducts' && isColumn === true ? (
                            /* ---------------------Heading Card For Column------------------ */
                            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-5 space-y-1.5'>
                                   <div className='flex-1 md:flex-4/12 lg:flex-2/12'><img className="aspect-[2/2] object-contain" src={Images?.[0]} alt="" /></div>
                                   <div className='flex-9/12 space-y-2'>
                                          <p className={`text-gray-500 text-sm md:text-base lg:text-base hover:text-Radical line-clamp-1 ${fromSlider === 'isOnSale' ? 'mt-10' : ''}`}>{SubCategory}</p>
                                          <h4 className='font-bold line-clamp-1 hover:text-Radical'>{Title}</h4>
                                          <Rating style={{ maxWidth: 80 }} value={ProductRating} />
                                          <div className='flex gap-2'>
                                                 <del className={`text-gray-300 text-xs md:text-base lg:text-lg font-medium`}>{Price} Tk </del>
                                                 <p className={`text-Radical text-xs md:text-base lg:text-lg font-semibold`}>{OfferPrice} Tk </p>
                                          </div>
                                          <p className='line-clamp-2'>{Description}</p>
                                          <div className='flex items-center gap-2'>
                                                 <div className='flex items-center gap-1'>
                                                        {Colors?.map(((color, index) => (
                                                               <div key={index} className='w-4 h-4 border border-gray-400 rounded-full' style={{ backgroundColor: color }}></div>
                                                        )))}
                                                 </div>
                                                 <p className={AvailabilityStatus === 'Limited Stock' ? 'w-max flex items-center text-yellow-700 bg-yellow-200 border border-yellow-500 px-2 text-sm' : 'w-max flex items-center text-green-700 bg-green-200 border border-green-700 px-2 text-sm'}>{AvailabilityStatus}</p>
                                          </div>
                                          <button className='bg-Radical text-white hover:bg-black px-7 py-1.5 rounded-md'>Option</button>
                                   </div>
                            </div>) :
                            /* -----------------------Heading Card For Row ----------------------- */
                            (<div className='space-y-1.5'>
                                   <img className="aspect-[2/2] object-contain" src={Images?.[0]} alt="" />
                                   <p className={`text-gray-500 text-sm md:text-base lg:text-base hover:text-Radical line-clamp-1 ${fromSlider === 'isOnSale' ? 'mt-10' : ''}`}>{SubCategory}</p>
                                   <h4 className='font-bold line-clamp-1 hover:text-Radical'>{Title}</h4>
                                   <p className='font-semibold text-sm line-clamp-1'>{SellerInformation?.name}</p>
                                   <Rating style={{ maxWidth: 80 }} value={ProductRating} />
                                   {/* ------------------Price---------------- */}
                                   <div className='flex gap-2'>
                                          <del className={`text-gray-300 text-xs ${fromSlider === 'allProducts' ? 'lg:text-base' : 'lg:text-lg'} font-medium`}>{Price} Tk </del>
                                          <p className={`text-Radical text-xs${fromSlider === 'allProducts' ? 'line-clamp-1 text-xs lg:text-base' : 'lg:text-lg'} font-semibold`}>{OfferPrice} Tk </p>
                                   </div>
                                   {/* ------------------Timer For Deal Of The Day----------------- */}
                                   <div>
                                          {fromSlider === 'isOnSale' ? (
                                                 <Countdown date={targetDate}
                                                        renderer={({ days, hours, minutes, seconds, completed }) => {
                                                               if (completed) {
                                                                      return <span className="flex absolute top-[9.7rem] lg:top-[13.5rem] left-1/2 transform -translate-x-1/2 gap-1 text-center bg-white text-Radical drop-shadow-sm rounded-sm px-2">Offer Ended!</span>;
                                                               } else {
                                                                      return (
                                                                             <div className="flex absolute top-[9.7rem] lg:top-[13.5rem] left-1/2 transform -translate-x-1/2 gap-1 text-center bg-white text-Radical drop-shadow-sm rounded-sm px-2">
                                                                                    <div className="flex items-center">
                                                                                           <span className="countdown font-mono text-base">
                                                                                                  <span style={{ "--value": days }}>{days}</span>
                                                                                           </span>
                                                                                           <span className="text-xl">:</span>
                                                                                    </div>
                                                                                    <div className="flex items-center">
                                                                                           <span className="countdown font-mono text-base">
                                                                                                  <span style={{ "--value": hours }}>{hours}</span>
                                                                                           </span>
                                                                                           <span className="text-xl">:</span>
                                                                                    </div>
                                                                                    <div className="flex items-center">
                                                                                           <span className="countdown font-mono text-base">
                                                                                                  <span style={{ "--value": minutes }}>{minutes}</span>
                                                                                           </span>
                                                                                           <span className="text-xl">:</span>
                                                                                    </div>
                                                                                    <div>
                                                                                           <span className="countdown font-mono text-base">
                                                                                                  <span style={{ "--value": seconds }}>{seconds}</span>
                                                                                           </span>
                                                                                    </div>
                                                                             </div>
                                                                      );
                                                               }
                                                        }}
                                                 />
                                          ) : null}
                                   </div>
                            </div>)}
                     <div className='flex flex-col gap-2 absolute top-0 left-3 opacity-0 group-hover:opacity-100 group-hover:top-6  duration-500 transition-all'>
                            {DiscountPercentage && <p className='bg-red-600 text-white text-xs px-2 py-1 rounded-xs'> - {DiscountPercentage} %</p>}
                            {Condition && (<p className="bg-green-600 text-center text-white text-xs p-1 rounded-xs font-medium">{Condition}</p>)}
                     </div>
                     <div className={`flex flex-col gap-2 absolute right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 text-3xl ${fromSlider === 'allProducts' && isColumn ? 'top-[10px] right-5 group-hover:top-5 lg:left-32 lg:group-hover:top-1/2 lg:transform lg:-translate-y-1/2' : 'top-0 group-hover:top-5'}`}>
                            <CiHeart className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                            <GoGitCompare className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                            {/* -----------------Product Details Icon-------------- */}
                            <button className="" onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}><SlSizeFullscreen className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' /></button>
                            <dialog id={`${`my_modal_${_id}`}`} className="modal">
                                   <div className="flex flex-col md:flex-row lg:flex-row modal-box lg:w-12/12 md:max-w-3xl lg:max-w-5xl gap-5">
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
                                                                      <img className="aspect-[3/3] object-contain p-2" src={pic} />
                                                               </SwiperSlide>
                                                        ))}
                                                 </Swiper>
                                          </div>
                                          {/* ------------------Product Details Side---------------- */}
                                          <div className='text-sm md:text-xs lg:text-base space-y-1.5'>
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
                                                        <del className='lg:text-2xl text-gray-400'>{Price} Tk,</del>
                                                        <p className='text-Radical font-semibold lg:text-2xl'>{OfferPrice} Tk,</p>
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
                                   <form method="dialog" className="modal-backdrop">
                                          <button>close</button>
                                   </form>
                            </dialog>
                            <CiShare1 className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                     </div>
              </div>
       );
};

export default ProductCard;