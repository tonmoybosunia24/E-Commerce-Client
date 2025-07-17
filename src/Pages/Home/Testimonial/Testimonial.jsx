// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import useTestimonial from "../../../Hooks/useTestimonial";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Testimonial = () => {

       const [reviews, reviewsLoading] = useTestimonial()

       return (
              <section className='px-5 md:px-10 lg:px-20'>
                     <div className='flex justify-between items-center mb-3'>
                            <h2 className='font-bold text-base md:text-xl lg:text-xl hover:text-Radical'>What Our Clients Say</h2>
                            <div className='flex items-center'>
                                   <div className='cursor-pointer'><IoIosArrowDropleftCircle className='PrevReviews  text-3xl lg:text-3xl text-Radical' /></div>
                                   <div className='cursor-pointer'><IoIosArrowDroprightCircle className='NextReviews  text-3xl lg:text-3xl text-Radical' /></div>
                            </div>
                     </div>
                     {/* ------------Products Sent To Card & Added Swiper Js----------- */}
                     <div className='h-auto'>
                            <Swiper
                                   slidesPerView={1}
                                   spaceBetween={20}
                                   freeMode={true}
                                   modules={[FreeMode, Navigation]}
                                   navigation={{
                                          nextEl: '.NextReviews',
                                          prevEl: '.PrevReviews',
                                   }}
                                   className={`mySwiper h-auto`}
                                   breakpoints={{
                                          640: { slidesPerView: 1 },
                                          768: { slidesPerView: 2 },
                                          1024: { slidesPerView: 3 },
                                   }}
                            >
                                   {reviewsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (reviews.map((review, index) =>
                                          <SwiperSlide key={index} className='!h-auto'>
                                                 <div className='w-full h-full border border-gray-400 space-y-2 p-3'>
                                                        <div className='flex items-center gap-3'>
                                                               <img className='rounded-full' src={review.image} alt="" />
                                                               <div>
                                                                      <h4 className='font-bold text-lg'>{review.name}</h4>
                                                                      <p className='font-semibold text-sm'>{review.role}</p>
                                                               </div>
                                                        </div>
                                                        <p className='text-sm text-gray-800'>{review.testimonial}</p>
                                                 </div>
                                          </SwiperSlide>))}
                            </Swiper>
                     </div>
              </section>
       );
};

export default Testimonial;