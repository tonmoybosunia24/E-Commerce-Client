import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar/NavBar";

const Home = () => {
       return (
              <div className="bg-greenish">
                     <Helmet><title>E-Commerce Home</title></Helmet>
                     <h2>This Is The Home Page</h2>
                     <p className="font-logo  text-xl font-bold">Evara</p>
                     <p className="font-secondary bg-teal-dark">I Am Tonmoy Bosunia</p>
                     <p className="font-primary bg-mint">Kmn Aso Tumi Tonmoy</p>
                     <NavBar></NavBar>
              </div>
       );
};

export default Home;