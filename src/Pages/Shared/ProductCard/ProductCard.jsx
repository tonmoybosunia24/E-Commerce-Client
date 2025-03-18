import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from 'react-icons/io';
import { SlSizeFullscreen } from "react-icons/sl";
import { CiShare1 } from "react-icons/ci";

const ProductCard = ({ products, isLast }) => {

       const { _id, title, description, category, subcategory, price, offerPrice, discountPercentage, rating, stock, tags, brand, images, color, variant, warrantyInformation, shippingInformation: { insideDhaka, outsideDhaka, estimatedDeliveryTime }, exchange: { available, exchangePeriod }, offerTime: { start, end }, condition, availabilityStatus, isNewArrival, isBestSeller, isOnSale, returnPolicy, sellerInfo: { name: sellerName, rating: sellerRating, location, contact }, reviews } = products;
       
       return (
              <div className={`flex flex-col justify-center gap-2 relative h-full p-5 space-y-0.5 border border-gray-300 group ${isLast ? 'border-' : 'border-r-0'}`}>
                     <img className="aspect-[4/5] object-contain" src={images} alt="" />
                     <div>
                            <p className='text-gray-500'>{brand}</p>
                            <h2>{title}</h2>
                            <Rating style={{ maxWidth: 80 }} value={parseInt(rating) || 0} />
                            <div className='flex gap-2 text-xl'>
                                   <p className='text-gray-400 text-lg'><del>${price}</del></p>
                                   <p className='text-Radical  text-lg'>${offerPrice}</p>
                            </div>
                     </div>
                     <div className='flex flex-col gap-1 absolute top-0 right-3 opacity-0 transition-all duration-500 group-hover:top-5 group-hover:opacity-100'>
                            <CiHeart className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                            <IoIosGitCompare className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                            {/* ----------------Details Modal---------------- */}
                            <button onClick={() => document.getElementById(`modal_${_id}`).showModal()}><SlSizeFullscreen className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' /></button>
                            <dialog id={`modal_${_id}`} className="modal">
                                   <div className="modal-box">
                                          <h3 className="font-bold text-lg">{title}</h3>
                                   </div>
                                   <form method="dialog" className="modal-backdrop">
                                          <button>close</button>
                                   </form>
                            </dialog>
                            <CiShare1 className='text-4xl border border-gray-400 p-2 bg-white cursor-pointer hover:bg-Radical hover:text-white rounded-full' />
                     </div>
              </div>
       );
};

export default ProductCard;