import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductHeader from "../../../Components/ProductHeader";
import Footer from "../../Home/Footer/Footer";
import ProductDescription from "../ProductDescription/ProductDescription";
import useProductDetails from "../../../Hooks/useProductDetails";

const ProductDetails = () => {

       const { id } = useParams();
       const { product, productTitle, relatedProducts, productDetailsLoading } = useProductDetails(id);

       return (
              <div>
                     <Helmet><title>E-Commerce | ProductDetails</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader productTitle={productTitle}></ProductHeader>
                     <ProductDescription product={product} relatedProducts={relatedProducts} productDetailsLoading={productDetailsLoading}></ProductDescription>
                     <Footer></Footer>
              </div>
       );
};

export default ProductDetails;