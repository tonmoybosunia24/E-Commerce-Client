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


const ProductCard = ({ product, fromSlider = '' }) => {

       const { _id, Title, Description, Category, SubCategory, Price, OfferPrice, DiscountPercentage, Rating: ProductRating, Stock, Brand, Images, Colors, Variant, ShippingInformation, OfferTime, Condition, AvailabilityStatus, isNewArrival, isBestSeller, isOnSale, SellerInformation } = product;
       const [thumbsSwiper, setThumbsSwiper] = useState(null);
       const [value, setValue] = useState(1);
       /* ---------------Count Total Milliseconds-------------- */
       const totalMilliseconds = (((OfferTime?.Day || 0) * 24 + (OfferTime?.Hour || 0)) * 60 + (OfferTime?.Minutes || 0)) * 60 * 1000 + (OfferTime?.Second || 0) * 1000;
       const targetDate = Date.now() + totalMilliseconds;

       return (
              <div className="h-full relative p-3 group">
                     {/* ------------------Product Main Card----------------- */}
                     <div className='space-y-1.5'>
                            <img className="aspect-[2/2] object-contain" src={Images?.[0]} alt="" />
                            <p className={`text-gray-500 hover:text-Radical ${fromSlider === 'isOnSale' ? 'mt-10' : ''}`}>{SubCategory}</p>
                            <h4 className='font-semibold text-gray-800 line-clamp-1'>{Title}</h4>
                            <p className='text-sm lg:text-base line-clamp-1'>{SellerInformation?.name}</p>
                            <Rating style={{ maxWidth: 80 }} value={ProductRating} />
                            {/* ------------------Price---------------- */}
                            <div className='flex gap-2'>
                                   <del className='text-gray-300 text-sm lg:text-lg font-semibold'>{Price} Tk </del>
                                   <p className='text-Radical text-sm lg:text-lg font-semibold'>{OfferPrice} Tk </p>
                            </div>
                            {/* ------------------Timer For Deal Of The Day----------------- */}
                            <div>
                                   {fromSlider === 'isOnSale' ? (
                                          <Countdown date={targetDate}
                                                 renderer={({ days, hours, minutes, seconds, completed }) => {
                                                        if (completed) {
                                                               return <span className="flex absolute top-[10.5rem] lg:top-[13.5rem] left-1/2 transform -translate-x-1/2 gap-1 text-center bg-white text-Radical drop-shadow-sm rounded-sm px-2">Offer Ended!</span>;
                                                        } else {
                                                               return (
                                                                      <div className="flex absolute top-[10.5rem] lg:top-[13.5rem] left-1/2 transform -translate-x-1/2 gap-1 text-center bg-white text-Radical drop-shadow-sm rounded-sm px-2">
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
                     </div>
                     <div className='flex flex-col gap-2 absolute top-0 right-3 opacity-0 group-hover:opacity-100 group-hover:top-5  duration-500 transition-all text-3xl'>
                            <CiHeart className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                            <GoGitCompare className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                            {/* -----------------Product Details Icon-------------- */}
                            <button className="" onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}><SlSizeFullscreen className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' /></button>
                            <dialog id={`${`my_modal_${_id}`}`} className="modal">
                                   <div className="flex flex-col md:flex-row lg:flex-row modal-box lg:w-12/12 max-w-5xl gap-5">
                                          {/* -----------------------Image Slider------------------- */}
                                          <div className='lg:w-4/10'>
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
                                                               <SwiperSlide key={index}>
                                                                      <img className="aspect-[2/2] object-contain" src={pic} />
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
                                                               <SwiperSlide className='border' key={index}>
                                                                      <img className="aspect-[3/3] object-contain" src={pic} />
                                                               </SwiperSlide>
                                                        ))}
                                                 </Swiper>
                                          </div>
                                          {/* ------------------Product Details Side---------------- */}
                                          <div className=' text-base space-y-1'>
                                                 <h5 className='text-3xl'>{Title}</h5>
                                                 <p className='text-gray-600'>{Description}</p>
                                                 <hr className='my-1' />
                                                 <p><span className='font-semibold text-gray-800'>Brand : </span>{Brand}</p>
                                                 <p><span className='font-semibold text-gray-800'>Condition : </span>{Condition}</p>
                                                 <p className='text-green-500 font-semibold'><span className='font-semibold text-gray-800'>Available In Stock : </span>{Stock} Items</p>
                                                 {/* ----------------Variant/Size/Storage----------------- */}
                                                 <div className='flex gap-1'>
                                                        <span className='font-semibold text-gray-800'>{((Category === 'Electronics' || Category === 'Smart Home') && 'Variant :') || ((Category === 'Fashion' || Category === 'Kitchenware' || Category === 'Personal Care') && 'Size :') || (Category === 'Home Appliances' && 'Storage :')}</span>
                                                        {Variant?.map((item, index) => (<p key={index}>{item} {index === Variant.length - 1 ? '' : ','}</p>
                                                        ))}
                                                 </div>
                                                 {/* -----------------------Colors------------------------ */}
                                                 <div className='flex items-center gap-1'>
                                                        <span className='font-semibold text-gray-800'>Colors : </span>
                                                        {Colors?.map(((color, index) => (
                                                               <div key={index} className='w-7 h-7 border border-gray-400 rounded-full' style={{ backgroundColor: color }}></div>
                                                        )))}
                                                 </div>
                                                 {/* -------------Price/OfferPrice/Discount--------------- */}
                                                 <div className='flex items-center gap-3 '>
                                                        <del className='font-semibold lg:text-2xl text-gray-300'>{Price} Tk,</del>
                                                        <p className='text-Radical font-semibold lg:text-2xl'>{OfferPrice} Tk,</p>
                                                        <p className='text-Radical'><span>SAVE </span>{DiscountPercentage} % </p>
                                                 </div>
                                                 {/* -------------------Shipping Info--------------------- */}
                                                 <div>
                                                        <p><span className='font-semibold text-gray-800'>Inside Dhaka : </span>{ShippingInformation?.InsideDhaka} ,</p>
                                                        <p><span className='font-semibold text-gray-800'>Outside Dhaka : </span>{ShippingInformation?.OutsideDhaka}</p>
                                                 </div>
                                                 {/* ----------------Quantity Of Products----------------- */}
                                                 <div className='flex gap-2'>
                                                        <div className='flex'>
                                                               <div><input className='border outline-0 w-14 h-10 pl-2' type="tel" value={value} /></div>
                                                               <div className='border border-l-0 flex flex-col'>
                                                                      <div className='border-b flex-1' onClick={() => setValue(value + 1)}><FaAngleUp /></div>
                                                                      <div className='flex-1' onClick={() => value > 1 && setValue(value - 1)}><FaAngleDown /></div>
                                                               </div>
                                                        </div>
                                                        <div><button className='w-40 h-full bg-Radical text-white rounded-sm hover:bg-black'>Add To Card</button></div>
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
                                                 <p className={AvailabilityStatus === 'Limited Stock' ? 'w-max text-yellow-700 bg-yellow-200 border border-yellow-500 px-2' : 'w-max text-green-700 bg-green-200 border border-green-700 px-2'}>{AvailabilityStatus}</p>
                                                 {/* --------------Icons Of Social Media----------------- */}
                                                 <div className='flex mt-2'>
                                                        <div className='border border-black border-r-0 px-4 py-2 text-blue-700'><FaFacebookF /></div>
                                                        <div className='border border-black border-r-0 px-4 py-2 text-black'><FaXTwitter /></div>
                                                        <div className='border border-black px-4 py-2 text-red-600'><AiFillPinterest /></div>
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