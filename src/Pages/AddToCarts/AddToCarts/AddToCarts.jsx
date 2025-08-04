import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import CartDetails from "../CartDetails/CartDetails";
import Footer from "../../Home/Footer/Footer";


const AddToCarts = () => {

       return (
              <div>
                     <Helmet><title>E-Commerce | Cart</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <CartDetails></CartDetails>
                     <Footer></Footer>
              </div>
       );
};

export default AddToCarts;