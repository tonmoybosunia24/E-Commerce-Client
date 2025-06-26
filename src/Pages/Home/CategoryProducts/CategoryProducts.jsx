// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import { Tab, Tabs, TabList } from 'react-tabs';
import { useEffect, useState } from "react";
import useCategoryProducts from "../../../Hooks/useCategoryProducts";
import useCategory from '../../../Hooks/useCategory';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const CategoryProducts = () => {

    const [categories] = useCategory()
    const [activeCategory, setActiveCategory] = useState('');
    const [products, loading] = useCategoryProducts(activeCategory)

    useEffect(() => {
        if (categories.length > 0) {
            setActiveCategory(categories[0])
        }
    }, [categories])

    return (
        <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
            {/* ----------------Products Tabs Container---------------- */}
            <Tabs onSelect={(index) => {
                const selected = categories[index];
                setActiveCategory(selected)
            }}>

                {/* -------------------Tablist For Tabs ---------------- */}
                <div className='flex justify-between items-center mb-3'>
                    <TabList className="flex gap-3 relative active:border-none text-xs md:text-2xl lg:text-lg overflow-x-auto lg:overflow-visible max-w-full">
                        {categories.map((category, index) => (
                            <Tab key={index} className={category === activeCategory ? "text-Radical outline-none whitespace-nowrap"
                                : "text-black whitespace-nowrap"}>{category}</Tab>
                        ))}
                    </TabList>
                    {/* ------------------Category Navigation----------------- */}
                    <div className='flex items-center ml-2 shrink-0'>
                        <div className='cursor-pointer'><IoIosArrowDropleftCircle className='Prev  text-3xl lg:text-3xl text-Radical' /></div>
                        <div className='cursor-pointer'><IoIosArrowDroprightCircle className='Next  text-3xl lg:text-3xl text-Radical' /></div>
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
                            nextEl: '.Next',
                            prevEl: '.Prev',
                        }}
                        className={`mySwiper h-auto ${!loading && products.length >= 5 ? 'border border-l-0 border-gray-400' : ''} ${products.length > 1 && products.length < 5 ? 'border-l border-gray-400' : ''}`}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {loading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (products.map((product, index) => <SwiperSlide key={index} className={`!h-auto flex ${index === 0 ? 'border-l border-gray-400' : 'border-l border-gray-400'} ${products.length > 0 && products.length < 5 ? 'border-t border-r border-b' : ''} ${products.length > 1  && products.length < 5 ? 'border-l-0' : ''}`}>
                        <div className={`w-full h-full flex flex-col`}><ProductCard product={product} /></div></SwiperSlide>))}
                    </Swiper>
                </div>
            </Tabs>
        </section>
    );
};

export default CategoryProducts;