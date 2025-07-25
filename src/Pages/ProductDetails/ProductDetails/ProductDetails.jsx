import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductHeader from "../../Shared/ProductHeader/ProductHeader";
import Footer from "../../Home/Footer/Footer";
import ProductDescription from "../ProductDescription/ProductDescription";

const ProductDetails = () => {

       const { id } = useParams();

       return (
              <div>
                     <Helmet><title>E-Commerce | ProductDetails</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     <ProductDescription id={id}></ProductDescription>
                     <Footer></Footer>
              </div>
       );
};

export default ProductDetails;