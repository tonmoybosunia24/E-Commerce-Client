import { Helmet } from "react-helmet-async";
import useBlogs from "../../../Hooks/useBlogs";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import BlogsSection from "../BlogsSection/BlogsSection";
import advertiseImg1 from '../../../assets/Advertise/Advertise1.jpg'
import ProductHeader from "../../../Components/ProductHeader/ProductHeader";
import { useState } from "react";
import useCategory from "../../../Hooks/useCategory";
import { Link } from "react-router";

const Blogs = () => {

       const [limit, setLimit] = useState(6);
       const [blogs, blogsLoading, totalBlogs] = useBlogs(limit);
       const [categories, categoriesLoading] = useCategory();

       return (
              <section>
                     <Helmet><title>E-Commerce | Blogs</title></Helmet>
                     <HeaderTop></HeaderTop>
                     <Header></Header>
                     <Navbar></Navbar>
                     <ProductHeader></ProductHeader>
                     {/* ------------------Blogs Section----------------- */}
                     {blogsLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                            <div className={`flex flex-col-reverse md:flex-row lg:flex-row gap-5 px-5 md:px-10 lg:px-20 ${totalBlogs > blogs.length ? 'mt-5' : 'my-5'} md:my-7 lg:my-10`}>

                                   {/* ------------------Advertise & Categories Container---------------- */}
                                   <div className="h-fit flex-3/12 hidden md:block lg:block bg-aliceBlue p-5 space-y-2 rounded-md">
                                          <div><img className="w-full border border-gray-300 rounded-md" src={advertiseImg1} alt="" /></div>
                                          <h2 className="font-bold text-lg">All Categories</h2>
                                          {/* -----------------All The Categories Section---------------- */}
                                          <div className="space-y-1">
                                                 {categoriesLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                                                        categories.map((category, index) => (
                                                               <p key={index} className="font-semibold hover:text-Radical cursor-pointer"><Link to={`/products?category=${category}`}>{category}</Link></p>
                                                        )))}
                                          </div>
                                   </div>
                                   {/* ----------------------Blogs Section Container--------------------- */}
                                   <div className="flex-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-fit">
                                          {blogs.map((blog) => (<BlogsSection key={blog._id} blog={blog}></BlogsSection>))}
                                          {/* -----------------------See More Button--------------------- */}
                                          {blogs.length < totalBlogs && (
                                                 <div className="flex pb-5 md:pb-7 lg:pb-10 w-full md:col-span-2 lg:col-span-3">
                                                        <button className="mx-auto font-semibold bg-Radical text-white hover:bg-black px-5 py-2 rounded-sm cursor-pointer" onClick={() => setLimit(limit + 3)}>See More</button>
                                                 </div>
                                          )}
                                   </div>
                            </div>
                     )}
                     <Footer></Footer>
              </section>
       );
};

export default Blogs;