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
import CmsBanner from '../CmsBanner/CmsBanner';
import CmsBanner1 from '../../../assets/Cms-Banner/Cms-banner-1.jpg'
import CmsBanner2 from '../../../assets/Cms-Banner/Cms-banner-2.jpg'

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
                     <CmsBanner cmsBannerImg1={CmsBanner1} cmsBannerImg2={CmsBanner2} offerTitle1='Save Up To 20% Off' offerTitle2='Best Online Discount' mainTitle1={<>Santa Lucia Three <br/> Seater Sofa</>} mainTitle2={<>Woman In Red Crew <br/> Neck T-shirt</>}></CmsBanner>
              </div>
       );
};

export default Home;