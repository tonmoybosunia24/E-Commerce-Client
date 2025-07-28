import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductHeader from "../../../Components/ProductHeader";
import LoginPage from "../LoginPage/LoginPage";
import Footer from "../../Home/Footer/Footer";

const Login = () => {
       return (
              <section>
                     <Helmet><title>E-Commerce | Login</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     <LoginPage></LoginPage>
                     <Footer></Footer>
              </section>
       );
};

export default Login;