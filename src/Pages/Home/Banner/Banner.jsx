import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/Banner/Banner-1.jpg';
import banner2 from '../../../assets/Banner/Banner-2 (2).jpg';
import banner3 from '../../../assets/Banner/Banner-3.jpg';
import banner4 from '../../../assets/Banner/Banner-4.jpg';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
       return (
              <div className="relative">

                     <div className="absolute top-1/2 -translate-y-1/2 right-2 lg:right-5 z-10">
                            <GrFormNextLink className='Next text-4xl text-white bg-teal-dark rounded-full' />
                     </div>
                     <div className="absolute top-1/2 -translate-y-1/2 left-2 lg:left-5 z-10">
                            <GrFormPreviousLink className='Prev text-4xl text-white bg-teal-dark rounded-full' />
                     </div>

                     <Swiper
                            modules={[Navigation, Pagination]}
                            className='lg:h-[450px] rounded-xl'
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={{
                                   nextEl: '.Next',
                                   prevEl: '.Prev',
                            }}
                            pagination={{ clickable: true }}
                     >
                            <SwiperSlide>
                                   <img className="w-full h-full object-cover" src={banner1} alt="Banner 1" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide>
                                   <img className="w-full h-full object-cover" src={banner2} alt="Banner 2" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide>
                                   <img className="w-full h-full object-cover" src={banner3} alt="Banner 3" loading="lazy" />
                            </SwiperSlide>
                            <SwiperSlide>
                                   <img className="w-full h-full object-cover" src={banner4} alt="Banner 4" loading="lazy" />
                            </SwiperSlide>
                     </Swiper>
              </div>
       );
};

export default Banner;