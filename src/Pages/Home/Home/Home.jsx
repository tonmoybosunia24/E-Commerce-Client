import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar/NavBar";

const Home = () => {
       return (
              <div>
                     <Helmet><title>E-Commerce Home</title></Helmet>
                     <h2>This Is The Home Page</h2>
                     <NavBar></NavBar>
              </div>
       );
};

export default Home;