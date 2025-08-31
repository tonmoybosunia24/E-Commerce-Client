// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import useBlogs from '../../../Hooks/useBlogs';
import { FiClock } from "react-icons/fi";
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router';

const Blogs = () => {

       const [blogs, blogsLoading] = useBlogs();

       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:7 lg:my-10">
                     <div className='flex justify-between items-center mb-3'>
                            <h2 className='font-bold text-base md:text-xl lg:text-xl hover:text-Radical'>From The Blog</h2>
                            <div className='flex items-center'>
                                   <div className='cursor-pointer'><IoIosArrowDropleftCircle className='PrevBlogs  text-3xl lg:text-3xl text-Radical' /></div>
                                   <div className='cursor-pointer'><IoIosArrowDroprightCircle className='NextBlogs  text-3xl lg:text-3xl text-Radical' /></div>
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
                                          nextEl: '.NextBlogs',
                                          prevEl: '.PrevBlogs',
                                   }}
                                   className={`mySwiper h-auto`}
                                   breakpoints={{
                                          640: { slidesPerView: 1 },
                                          768: { slidesPerView: 2 },
                                          1024: { slidesPerView: 3 },
                                   }}
                            >
                                   {blogsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (blogs.map((blog, index) =>
                                          <SwiperSlide key={index} className='!h-auto'>
                                                 <div className='w-full h-full border border-gray-400 rounded-md space-y-1 p-3'>
                                                        <div className='relative overflow-hidden rounded-md group'>
                                                               <img className='aspect-[3/2] object-cover transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={blog.image} alt="" />
                                                               <div className='w-full h-full flex items-center justify-center gap-1 absolute top-0 left-0 transition-opacity duration-500 hover:bg-black/50 text-white'>
                                                                      <div className='flex gap-2 opacity-0 group-hover:opacity-100'>
                                                                             <IoIosSearch className='border text-4xl hover:bg-Radical hover:border-Radical p-2 cursor-pointer' />
                                                                             <IoMdSettings className='border text-4xl hover:bg-Radical hover:border-Radical p-2 cursor-pointer' />
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 font-semibold text-Radical '>
                                                               <FiClock />
                                                               <p>{blog.date}</p>
                                                        </div>
                                                        <h3 className='font-bold line-clamp-1'>{blog.title}</h3>
                                                        <p className='text-sm line-clamp-4'>{blog.content}</p>
                                                        <Link to={`/SingleBLog/${blog?._id}`} className='font-bold text-Radical cursor-pointer text-sm underline hover:no-underline'>Read More</Link>
                                                 </div>
                                          </SwiperSlide>))}
                            </Swiper>
                     </div>
              </section>
       );
};

export default Blogs;