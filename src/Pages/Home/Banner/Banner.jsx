import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/Banner/Banner1.jpg';
import banner2 from '../../../assets/Banner/Banner2.jpg';
import subBanner1 from '../../../assets/Sub-Banner/Sub-banner-1.jpg';
import subBanner2 from '../../../assets/Sub-Banner/Sub-banner-2.jpg';
import subBanner3 from '../../../assets/Sub-Banner/Sub-bannerM1.jpeg';
import subBanner4 from '../../../assets/Sub-Banner/Sub-bannerM2.jpeg';

const Banner = () => {
       return (
              <div className='bg-aliceBlue py-5 px-5 md:px-10 lg:px-20'>
                     {/* -------------------Swiper Modules----------------- */}
                     <div className='flex flex-col lg:flex-row gap-5'>
                            <Swiper
                                   modules={[Navigation, Pagination, Autoplay]}
                                   spaceBetween={50}
                                   slidesPerView={1}
                                   className='max-w-full flex-10/12 relative'
                                   navigation={{
                                          nextEl: '.Next',
                                          prevEl: '.Prev',
                                   }}
                                   autoplay={{
                                          delay: 5000,
                                          disableOnInteraction: false,
                                   }}
                                   pagination={{ clickable: true }}
                            >
                                   {/* -------------------Swiper Navigation---------------- */}
                                   <div className='absolute top-1/2 -translate-y-1/2 left-2 lg:left-5 cursor-pointer z-10'><IoIosArrowDropleftCircle className='Prev  text-3xl lg:text-5xl text-Radical' /></div>
                                   <div className='absolute top-1/2 -translate-y-1/2 right-2 lg:right-5 cursor-pointer z-10'><IoIosArrowDroprightCircle className='Next  text-3xl lg:text-5xl text-Radical' /></div>
                                   {/* ---------------------Swiper Banner------------------ */}
                                   <SwiperSlide className='relative'>
                                          <img className='w-full h-full object-fill rounded-md' src={banner1} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 lg:right-20 space-y-1 lg:space-y-2'>
                                                 <h4 className='text-xs lg:text-2xl'>Big Saving Days Sale</h4>
                                                 <h2 className='text-sm lg:text-4xl'>Women Solid Round <br /> Green T-Shirt</h2>
                                                 <p className='text-sm lg:text-2xl'>Starting At Only <span className='text-Radical font-bold text-md lg:text-3xl'>$59.00</span></p>
                                                 <button className='bg-Radical text-white text-xs lg:text-lg px-2 lg:px-6 py-1 lg:py-2 rounded-xs lg:rounded-md cursor-pointer'>Shop Now</button>
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='w-full h-full object-fill rounded-md' src={banner2} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 lg:right-20 space-y-1 lg:space-y-2'>
                                                 <h4 className='text-xs lg:text-2xl'>Big Saving Days Sale</h4>
                                                 <h2 className='text-sm lg:text-4xl'>Buy Modern Chair In <br /> Black Color</h2>
                                                 <p className='text-sm lg:text-2xl'>Starting At Only <span className='text-Radical font-bold text-md lg:text-3xl'>$99.00</span></p>
                                                 <button className='bg-Radical text-white text-xs lg:text-lg px-2 lg:px-6 py-1 lg:py-2 rounded-xs lg:rounded-md cursor-pointer'>Shop Now</button>
                                          </div>
                                   </SwiperSlide>
                            </Swiper>
                            {/* ------------------Sub Banner For Pc----------------- */}
                            <div className='hidden lg:flex flex-col gap-3'>
                                   <div className='relative'>
                                          <img className='rounded-md' src={subBanner1} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 left-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Samsung Gear <br /> VR Camera</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                                   <div className='relative'>
                                          <img className='rounded-md' src={subBanner2} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Marcel Dining <br /> Room Chair</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                            </div>
                            {/* ----------------Sub Banner For Mobile--------------- */}
                            <div className='flex flex-col gap-3 lg:hidden '>
                                   <div className='relative'>
                                          <img className='rounded-md w-full h-[172.25px]' src={subBanner3} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 left-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Samsung Gear <br /> VR Camera</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                                   <div className='relative'>
                                          <img className='rounded-md w-full h-[172.25px]' src={subBanner4} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Marcel Dining <br /> Room Chair</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Banner;
