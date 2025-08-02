import { Helmet } from 'react-helmet-async';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Shipping from '../Shipping/Shipping';
import OfferCardBanner from '../OfferCardBanner/OfferCardBanner';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import OfferBanner from '../OfferBanner/OfferBanner';
import LatestProducts from '../LatestProducts/LatestProducts';
import CmsBanner from "../../../Components/CmsBanner/CmsBanner";
import CmsBanner1 from '../../../assets/Cms-Banner/Cms-banner-1.jpg'
import CmsBanner2 from '../../../assets/Cms-Banner/Cms-banner-2.jpg'
import CmsBanner3 from '../../../assets/Cms-Banner/Cms-banner-3.jpg'
import CmsBanner4 from '../../../assets/Cms-Banner/Cms-banner-4.jpg'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import DealOfTheDay from '../DealOfTheDay/DealOfTheDay';
import Brands from '../Brands/Brands';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Follows from '../Follows/Follows';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
       return (
              <div>
                     <Helmet><title>E-Commerce | Home</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <Banner></Banner>
                     <Shipping></Shipping>
                     <OfferCardBanner></OfferCardBanner>
                     <CategoryProducts></CategoryProducts>
                     <OfferBanner></OfferBanner>
                     <LatestProducts></LatestProducts>
                     <CmsBanner cmsBannerImg1={CmsBanner1} cmsBannerImg2={CmsBanner2} offerTitle1='Save Up To 20% Off' offerTitle2='Best Online Discount' mainTitle1={<>Santa Lucia Three <br /> Seater Sofa</>} mainTitle2={<>Woman In Red Crew <br /> Neck T-shirt</>}></CmsBanner>
                     <FeaturedProducts></FeaturedProducts>
                     <DealOfTheDay></DealOfTheDay>
                     <CmsBanner cmsBannerImg1={CmsBanner3} cmsBannerImg2={CmsBanner4} offerTitle1='20 Days Return Products' offerTitle2='Save Up To 30% Off' mainTitle1={<>Mobile Shope-Smart <br /> Watch T-55</>} mainTitle2={<>Decoration Design <br /> Lamp Light</>}></CmsBanner>
                     <Brands></Brands>
                     <Testimonial></Testimonial>
                     <Blogs></Blogs>
                     <Follows></Follows>
                     <Services></Services>
                     <Footer></Footer>
              </div>
       );
};

export default Home;