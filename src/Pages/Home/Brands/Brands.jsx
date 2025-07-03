import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import BrandImg1 from '../../../assets/Brands/Brands1.jpg'
import BrandImg2 from '../../../assets/Brands/Brands2.jpg'
import BrandImg3 from '../../../assets/Brands/Brands3.jpg'
import BrandImg4 from '../../../assets/Brands/Brands4.jpg'
import BrandImg5 from '../../../assets/Brands/Brands5.jpg'
import BrandImg6 from '../../../assets/Brands/Brands6.jpg'
import BrandImg7 from '../../../assets/Brands/Brands7.jpg'
import BrandImg8 from '../../../assets/Brands/Brands8.jpg'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Brands = () => {
       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     <div className='relative'>
                            {/* ------------------Brands Navigation----------------- */}
                            <div className='absolute top-1/2 -translate-y-1/2 -left-3 cursor-pointer z-10'><IoIosArrowDropleftCircle className='PrevCategory  text-3xl lg:text-3xl text-Radical' /></div>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-3 cursor-pointer z-10'><IoIosArrowDroprightCircle className='NextCategory  text-3xl lg:text-3xl text-Radical' /></div>
                            {/* --------------------Swiper Modules-------------------- */}
                            <Swiper
                                   modules={[Navigation]}
                                   spaceBetween={10}
                                   slidesPerView={2}
                                   className='w-11/12'
                                   navigation={{
                                          nextEl: '.NextCategory',
                                          prevEl: '.PrevCategory',
                                   }}
                                   breakpoints={{
                                          640: { slidesPerView: 2 },
                                          768: { slidesPerView: 4 },
                                          1024: { slidesPerView: 5 },
                                   }}
                            >
                                   {/* ---------------------Brands Slider------------------ */}
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg1} alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg2} alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg3} alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg4} alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg5} alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg6} alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg7} alt="" />
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <img className='wave' src={BrandImg8} alt="" />
                                   </SwiperSlide>
                            </Swiper>
                     </div>
              </section>
       );
};

export default Brands;