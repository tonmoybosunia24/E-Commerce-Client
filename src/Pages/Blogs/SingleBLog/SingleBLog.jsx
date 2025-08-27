import { useParams } from "react-router";
import useSingleBLog from "../../../Hooks/useSingleBLog";
import { Helmet } from "react-helmet-async";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import ProductHeader from "../../../Components/ProductHeader/ProductHeader";
import { FiClock } from "react-icons/fi";

const SingleBLog = () => {

       const { id } = useParams();
       const { singleBLogs, singleBlogLoadings } = useSingleBLog(id);

       return (
              <div>
                     <Helmet><title>E-Commerce | Blogs</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     {/* -----------------------BLog Section---------------------- */}
                     <section>
                            {singleBlogLoadings ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (<div className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">{singleBLogs.map((singleBlog) => (
                                   <div key={singleBlog._id} className="flex flex-col md:flex-col lg:flex-row gap-5">
                                          {/* ------------------Blog Image-------------- */}
                                          <div className="flex-3/6"><img src={singleBlog?.image} alt="" /></div>
                                          {/* -----------------Blog Contain------------- */}
                                          <div className="flex-3/6">
                                                 {/* ----------------Blog Title & Author------------- */}
                                                 <h3 className="font-semibold text-xl lg:text-2xl">{singleBlog?.title} ({singleBlog?.author})</h3>
                                                 {/* -------------------BLog Date-------------------- */}
                                                 <div className='flex items-center gap-1 font-semibold text-Radical '>
                                                        <FiClock />
                                                        <p>{singleBlog?.date}</p>
                                                 </div>
                                                 {/* -----------------BLog Category------------------ */}
                                                 <p><span className="font-bold">Category : </span> {singleBlog?.category}</p>
                                                 {/* ------------------BLog Contain------------------ */}
                                                 <p>{singleBlog?.content}</p>
                                                 {/* -------------------BLog Tags-------------------- */}
                                                 <div className="flex gap-1 font-bold text-Radical">
                                                        {singleBlog?.tags.map((tag, index) => (
                                                               <p key={index}>#{tag},</p>
                                                        ))}
                                                 </div>
                                          </div>
                                   </div>
                            ))}</div>)}
                     </section>
                     <Footer></Footer>
              </div>
       );
};

export default SingleBLog;