import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import CheckOutSection from "../CheckOutSection/CheckOutSection";

const CheckOut = () => {
       return (
              <div>
                     <Helmet><title>E-Commerce | Check Out</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <CheckOutSection></CheckOutSection>
                     <Footer></Footer>
              </div>
       );
};

export default CheckOut;