import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../../Home/Banner/Banner";


const Home = () => {
       return (
              <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                     <Helmet><title>E-Commerce | Home</title></Helmet>
                     <NavBar></NavBar>
                     <Banner></Banner>
              </div>
       );
};

export default Home;