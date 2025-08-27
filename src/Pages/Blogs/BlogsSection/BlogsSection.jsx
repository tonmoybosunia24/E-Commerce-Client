import { FiClock } from "react-icons/fi";
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { Link } from "react-router";

const BlogsSection = ({ blog }) => {

       const { _id, title, date, content, image } = blog;

       return (
              <div className='w-full h-full border border-gray-400 rounded-md space-y-1 p-3'>
                     {/* ------------------Blog Image Container-------------- */}
                     <div className='relative overflow-hidden rounded-md group'>
                            <img className='aspect-[3/2] object-cover transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={image} alt="" />
                            <div className='w-full h-full flex items-center justify-center gap-1 absolute top-0 left-0 transition-opacity duration-500 hover:bg-black/50 text-white'>
                                   <div className='flex gap-2 opacity-0 group-hover:opacity-100'>
                                          <IoIosSearch className='border text-4xl hover:bg-Radical hover:border-Radical p-2 cursor-pointer' />
                                          <IoMdSettings className='border text-4xl hover:bg-Radical hover:border-Radical p-2 cursor-pointer' />
                                   </div>
                            </div>
                     </div>
                     {/* ----------------------Blog Clock ------------------- */}
                     <div className='flex items-center gap-1 font-semibold text-Radical '>
                            <FiClock />
                            <p>{date}</p>
                     </div>
                     {/* ----------------------Blog Title ------------------- */}
                     <h3 className='font-bold line-clamp-1'>{title}</h3>
                     {/* --------------------Blog Content ------------------- */}
                     <p className='text-sm line-clamp-4'>{content}</p>
                     {/* -----------------Read More Button ------------------ */}
                     <Link to={`/SingleBLog/${_id}`} className='font-bold text-Radical cursor-pointer text-sm underline hover:no-underline'>Read More</Link>
              </div>
       );
};

export default BlogsSection;