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
import categoryProduct1 from '../../../assets/Category-Products/Category-Product-1.jpg'
import categoryProduct2 from '../../../assets/Category-Products/Category-Product-2.jpg'
import categoryProduct3 from '../../../assets/Category-Products/Category-Product-3.jpg'
import categoryProduct4 from '../../../assets/Category-Products/Category-Product-4.jpg'
import categoryProduct5 from '../../../assets/Category-Products/Category-Product-5.jpg'
import categoryProduct6 from '../../../assets/Category-Products/Category-Product-6.jpg'
import categoryProduct7 from '../../../assets/Category-Products/Category-Product-7.jpg'
import categoryProduct8 from '../../../assets/Category-Products/Category-Product-8.jpg'

const Banner = () => {
       return (
              <section className='bg-aliceBlue py-5 px-5 md:px-10 lg:px-20'>
                     {/* -------------------Swiper Modules----------------- */}
                     <div className='flex flex-col lg:flex-row gap-5'>
                            {/* ---------------Swiper Modules-------------- */}
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
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 md:right-20 lg:right-20 space-y-1 md:space-y-2 lg:space-y-2'>
                                                 <h4 className='text-xs md:text-xl lg:text-2xl'>Big Saving Days Sale</h4>
                                                 <h2 className='text-sm md:text-3xl lg:text-4xl'>Women Solid Round <br /> Green T-Shirt</h2>
                                                 <p className='text-sm md:text-xl lg:text-2xl'>Starting At Only <span className='text-Radical font-bold text-md lg:text-3xl'>$59.00</span></p>
                                                 <button className='bg-Radical hover:bg-black text-white text-xs lg px-2 lg:px-6 py-1 lg:py-2 rounded-xs lg:rounded-md cursor-pointer'>Shop Now</button>
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='w-full h-full object-fill rounded-md' src={banner2} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 md:right-20 lg:right-20 space-y-1 md:space-y-2 lg:space-y-2'>
                                                 <h4 className='text-xs md:text-xl lg:text-2xl'>Big Saving Days Sale</h4>
                                                 <h2 className='text-sm md:text-3xl lg:text-4xl'>Buy Modern Chair In <br /> Black Color</h2>
                                                 <p className='text-sm md:text-xl lg:text-2xl'>Starting At Only <span className='text-Radical font-bold text-md lg:text-3xl'>$99.00</span></p>
                                                 <button className='bg-Radical hover:bg-black text-white text-xs lg px-2 lg:px-6 py-1 lg:py-2 rounded-xs lg:rounded-md cursor-pointer'>Shop Now</button>
                                          </div>
                                   </SwiperSlide>
                            </Swiper>
                            {/* ------------------Sub Banner For Tablet/Pc----------------- */}
                            <div className='hidden md:flex lg:flex md:flex-row lg:flex-col gap-5'>
                                   <div className='relative overflow-hidden group'>
                                          <img className='rounded-md transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={subBanner1} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 left-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Samsung Gear <br /> VR Camera</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                                   <div className='relative overflow-hidden group'>
                                          <img className='rounded-md transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={subBanner2} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Marcel Dining <br /> Room Chair</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                            </div>
                            {/* ----------------Sub Banner For Mobile--------------- */}
                            <div className='flex flex-col gap-3 md:hidden lg:hidden '>
                                   <div className='relative overflow-hidden group'>
                                          <img className='rounded-md w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={subBanner3} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 left-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Samsung Gear <br /> VR Camera</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                                   <div className='relative overflow-hidden group'>
                                          <img className='rounded-md w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={subBanner4} alt="" />
                                          <div className='absolute top-1/2 transform -translate-y-1/2 right-5 space-y-0.5'>
                                                 <h3 className='text-2xl'>Marcel Dining <br /> Room Chair</h3>
                                                 <p className='text-xl text-Radical font-bold'>$129.00</p>
                                                 <button className='underline cursor-pointer'>SHOP NOW</button>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     {/* -----------------------Category Slider--------------------- */}
                     <div className='relative'>
                            {/* ------------------Category Navigation----------------- */}
                            <div className='absolute top-1/2 -translate-y-1/2 -left-3 cursor-pointer z-10'><IoIosArrowDropleftCircle className='PrevCategory  text-3xl lg:text-3xl text-Radical' /></div>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-3 cursor-pointer z-10'><IoIosArrowDroprightCircle className='NextCategory  text-3xl lg:text-3xl text-Radical' /></div>
                            {/* --------------------Swiper Modules-------------------- */}
                            <Swiper
                                   modules={[Navigation]}
                                   spaceBetween={20}
                                   slidesPerView={2}
                                   className=' mt-5'
                                   navigation={{
                                          nextEl: '.NextCategory',
                                          prevEl: '.PrevCategory',
                                   }}
                                   breakpoints={{
                                          640: { slidesPerView: 2 },
                                          768: { slidesPerView: 4 },
                                          1024: { slidesPerView: 6 },
                                   }}
                            >
                                   {/* ---------------------Category Slider------------------ */}
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct1} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>Smart Tablet</p></div>
                                   </SwiperSlide>
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct2} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>Crape T-Shirt</p></div>
                                   </SwiperSlide>
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct3} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>Leather Watch</p></div>
                                   </SwiperSlide>
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct4} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>Rolling Diamond</p></div>
                                   </SwiperSlide>
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct5} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>Wooden Chair</p></div>
                                   </SwiperSlide>
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct6} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>Sneakers Shoes</p></div>
                                   </SwiperSlide>
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct7} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>Purse</p></div>
                                   </SwiperSlide>
                                   <SwiperSlide className='relative overflow-hidden group cursor-pointer'>
                                          <img className='rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110' src={categoryProduct8} alt="" />
                                          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-lg text-center hover:text-Radical'><p>X-Box Controller</p></div>
                                   </SwiperSlide>
                            </Swiper>
                     </div>
              </section>
       );
};

export default Banner;