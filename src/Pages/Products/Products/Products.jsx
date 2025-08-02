import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductHeader from "../../../Components/ProductHeader/ProductHeader";
import ProductsSection from "../ProductsSection/ProductsSection";
import Footer from "../../Home/Footer/Footer";
import { useSearchParams } from "react-router";

const Products = () => {

       const [searchCategory] = useSearchParams();
       const category = searchCategory.get('category');

       return (
              <div>
                     <Helmet><title>E-Commerce | Products</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     <ProductsSection categoryFromLink={category}></ProductsSection>
                     <Footer></Footer>
              </div>
       );
};

export default Products;