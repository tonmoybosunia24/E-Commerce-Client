import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import follows1 from '../../../assets/Follows/Follow-1.jpg'
import follows2 from '../../../assets/Follows/Follow-2.jpg'
import follows3 from '../../../assets/Follows/Follow-3.jpg'
import follows4 from '../../../assets/Follows/Follow-4.jpg'
import follows5 from '../../../assets/Follows/Follow-5.jpg'
import follows6 from '../../../assets/Follows/Follow-6.jpg'
import follows7 from '../../../assets/Follows/Follow-7.jpg'
import follows8 from '../../../assets/Follows/Follow-8.jpg'
import follows9 from '../../../assets/Follows/Follow-9.jpg'
import follows10 from '../../../assets/Follows/Follow-10.jpg'
import { FaInstagram } from 'react-icons/fa';

const Follows = () => {
       return (
              <section className="bg-[#F5F0F0]">
                     <div className="p-7 md:p-10 lg:p-20">
                            <h3 className="font-bold text-center text-lg md:text-xl lg:text-2xl">Follow Us on Instagram</h3>
                            {/* ----------------------Swiper Slider------------------ */}
                            <Swiper
                                   modules={[Autoplay]}
                                   autoplay={{
                                          delay: 5000,
                                          disableOnInteraction: false,
                                   }}
                                   spaceBetween={20}
                                   slidesPerView={2}
                                   className=' mt-5'
                                   breakpoints={{
                                          640: { slidesPerView: 2 },
                                          768: { slidesPerView: 4 },
                                          1024: { slidesPerView: 6 },
                                   }}
                            >
                                   {/* ---------------------Instagram Slider------------------ */}
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows1} alt="" />
                                          <div className='flex items-center justify-center absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows2} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows3} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows4} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows5} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows6} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows7} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows8} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows9} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide className='group relative rounded-md overflow-hidden'>
                                          <img className='w-full h-full object-cover' src={follows10} alt="" />
                                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300'>
                                                 <FaInstagram className='text-white text-3xl' />
                                          </div>
                                   </SwiperSlide>
                            </Swiper>
                     </div>
              </section >
       );
};

export default Follows;