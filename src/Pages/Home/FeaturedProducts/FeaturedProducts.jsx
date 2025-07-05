// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import ProductCard from "../../Shared/ProductCard/ProductCard";
import useCategoryProducts from "../../../Hooks/useCategoryProducts";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const FeaturedProducts = () => {

       const [products, productsLoading] = useCategoryProducts(`?isBestSeller=true`)

       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     {/* -----------------Title And Slider Navigation----------------- */}
                     <div className='flex justify-between items-center mb-3'>
                            <h2 className='font-semibold text-base md:text-xl lg:text-2xl hover:text-Radical'>Featured Products</h2>
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
                                   className={`mySwiper h-auto ${!productsLoading && products.length >= 5 ? 'border border-l-0 border-gray-400' : ''} ${products.length > 1 && products.length < 5 ? 'border-l border-gray-400' : ''}`}
                                   breakpoints={{
                                          640: { slidesPerView: 2 },
                                          768: { slidesPerView: 4 },
                                          1024: { slidesPerView: 5 },
                                   }}
                            >
                                   {productsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (products.map((product, index) => <SwiperSlide key={index} className={`!h-auto flex ${index === 0 ? 'border-l border-gray-400' : 'border-l border-gray-400'} ${products.length > 0 && products.length < 5 ? 'border-t border-r border-b' : ''} ${products.length > 1 && products.length < 5 ? 'border-l-0' : ''}`}>
                                          <div className={`w-full h-full flex flex-col`}><ProductCard product={product} /></div></SwiperSlide>))}
                            </Swiper>
                     </div>
              </section>
       );
};

export default FeaturedProducts;