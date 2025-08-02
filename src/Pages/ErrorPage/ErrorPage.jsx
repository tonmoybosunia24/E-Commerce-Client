import { Helmet } from "react-helmet-async";
import HeaderTop from "../Shared/HeaderTop/HeaderTop";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {

       const { searchInput, setSearchInput, } = useContext(AuthContext);
       const errorInputText = useRef();
       const navigate = useNavigate();

       return (
              <div>
                     <Helmet><title>E-Commerce | 404 Error</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <div className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10 space-y-5">
                            <h2 className="font-semibold text-xl">The Page You Are Looking For Was Not Found.</h2>
                            <div className="border border-gray-300 p-5 space-y-2.5">
                                   <h3 className="font-medium text-lg text-gray-700">No Products Available Yet</h3>
                                   <p className="font-medium text-sm text-gray-800">Stay Tuned! More Products Will Be Shown Here As They Are Added.</p>
                                   <div className='flex flex-grow gap-2'>
                                          <input type="text" value={searchInput} ref={errorInputText} onChange={(e) => setSearchInput(e.target.value.trim())} placeholder="Search Products Here.." className="w-full input focus:outline-none focus:border-gray-500" />
                                          <button onClick={() => navigate('/products')} className='font-semibold bg-Radical hover:bg-black text-white rounded-sm px-5 py-2 cursor-pointer'>SEARCH</button>
                                   </div>
                            </div>
                     </div>
                     <Footer></Footer>
              </div>
       );
};

export default ErrorPage;