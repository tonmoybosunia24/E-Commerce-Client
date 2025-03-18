import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useCategoryProducts from "../../../Hooks/useCategoryProducts";
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const CategoryProducts = () => {

  const [Electronics] = useCategoryProducts('Electronics')
  const [Fashion] = useCategoryProducts('Fashion')
  const [HomeKitchen] = useCategoryProducts('Home & Kitchen')


  return (
    <section className='px-5 md:px-10 lg:px-20 mb-10 z-50'>
      <Tabs>
        <div className='flex justify-between items-center mb-5'>
          {/* ------------------------TabList------------------------ */}
        <TabList className='flex gap-3 focus-within::border-none'>
          <Tab className='text-sm md:text-lg lg:text-xl border-none cursor-pointer' selectedClassName="text-Radical">Electronics</Tab>
          <Tab className='text-sm md:text-lg lg:text-xl border-none cursor-pointer' selectedClassName="text-Radical">Fashion</Tab>
          <Tab className='text-sm md:text-lg lg:text-xl border-none cursor-pointer' selectedClassName="text-Radical">Home & Kitchen</Tab>
        </TabList>
        <div className='flex'>
          <div className='cursor-pointer'><IoIosArrowDropleftCircle className='PrevCategoryProducts  text-3xl lg:text-3xl text-Radical' /></div>
          <div className='cursor-pointer'><IoIosArrowDroprightCircle className='NextCategoryProducts  text-3xl lg:text-3xl text-Radical' /></div>
        </div>
        </div>
        {/* ----------------------Electronics---------------------- */}
        <TabPanel>
          <div className='flex'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={2}
              navigation={{
                nextEl: '.NextCategoryProducts',
                prevEl: '.PrevCategoryProducts',
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {Electronics.map((products, index) => <SwiperSlide key={products._id}><ProductCard isLast={index === Electronics.length - 1} products={products}></ProductCard></SwiperSlide>)}
            </Swiper>
          </div>
        </TabPanel>
        {/* ------------------------Fashion------------------------ */}
        <TabPanel>
          <div className='flex'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={2}
              navigation={{
                nextEl: '.NextCategoryProducts',
                prevEl: '.PrevCategoryProducts',
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {Fashion.map((products, index) => <SwiperSlide key={products._id}><ProductCard isLast={index === Electronics.length - 1} products={products}></ProductCard></SwiperSlide>)}
            </Swiper>
          </div>
        </TabPanel>
        {/* ----------------Home & Kitchen Category----------------- */}
        <TabPanel>
          <div className='flex'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={2}
              navigation={{
                nextEl: '.NextCategoryProducts',
                prevEl: '.PrevCategoryProducts',
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {HomeKitchen.map((products, index) => <SwiperSlide key={products._id}><ProductCard isLast={index === Electronics.length - 1} products={products}></ProductCard></SwiperSlide>)}
            </Swiper>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryProducts;