import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductHeader from "../../../Components/ProductHeader/ProductHeader";
import Footer from "../../Home/Footer/Footer";
import ContactUsSection from "../ContactUsSection/ContactUsSection";

const ContactUs = () => {
       return (
              <div>
                     <Helmet><title>E-Commerce | Contact Us</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     <ContactUsSection></ContactUsSection>
                     <Footer></Footer>
              </div>
       );
};

export default ContactUs;