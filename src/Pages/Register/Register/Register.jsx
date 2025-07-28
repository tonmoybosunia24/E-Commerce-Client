import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductHeader from "../../../Components/ProductHeader";
import RegisterPage from "../RegisterPage/RegisterPage";
import Footer from "../../Home/Footer/Footer";

const Register = () => {
       return (
              <div>
                     <Helmet><title>E-Commerce | Register</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     <RegisterPage></RegisterPage>
                     <Footer></Footer>
              </div>
       );
};

export default Register;