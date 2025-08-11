import { Helmet } from "react-helmet-async";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import MultiValueInput from "../../../Components/MultiValueInput/MultiValueInput";
import useUploadImage from "../../../Hooks/useUploadImage";
import { toast } from "react-toastify";
import useAdminSaveProducts from "../../../Hooks/useAdminSaveProducts";
import { AiOutlinePlusCircle } from "react-icons/ai";

const AddProducts = () => {

       const [tags, setTags] = useState([]);
       const [colors, setColors] = useState([]);
       const [variant, setVariant] = useState([]);
       const { uploadImages } = useUploadImage();
       const { adminSaveProducts } = useAdminSaveProducts();
       const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

       const onsubmit = async (data) => {
              const filesArray = Array.from(data.Images);
              uploadImages(filesArray, {
                     onSuccess: (urls) => {
                            const productInfo = {
                                   Title: data.Title,
                                   Description: data.Description,
                                   Category: data.Category,
                                   SubCategory: data.SubCategory,
                                   Price: data.Price,
                                   OfferPrice: data.OfferPrice,
                                   DiscountPercentage: Math.round(((data.Price - data.OfferPrice) / data.Price) * 100),
                                   Rating: data.Rating,
                                   Stock: data.Stock,
                                   Tags: data.Tags,
                                   Brand: data.Brand,
                                   Images: urls,
                                   Colors: data.Colors,
                                   Variant: data.Variant,
                                   WarrantyInformation: data.WarrantyInformation,
                                   ShippingInformation: {
                                          InsideDhaka: "Free delivery within 2 days",
                                          OutsideDhaka: "Delivery charge applicable, 3-5 days",
                                          EstimatedDeliveryTime: {
                                                 InsideDhaka: "2 days",
                                                 OutsideDhaka: "3-5 days"
                                          }
                                   },
                                   Exchange: {
                                          available: data.available,
                                          exchangePeriod: data.exchangePeriod,
                                   },
                                   OfferTime: {
                                          Day: data.Day,
                                          Hour: data.Hour,
                                          Minutes: data.Minutes,
                                          Second: data.Second,
                                   },
                                   Condition: data.Condition,
                                   AvailabilityStatus: data.AvailabilityStatus,
                                   isNewArrival: data.isNewArrival === 'true',
                                   isBestSeller: data.isBestSeller === 'true',
                                   isOnSale: data.isOnSale === 'true',
                                   ReturnPolicy: data.ReturnPolicy,
                                   SellerInformation: {
                                          name: data.name,
                                          location: data.location,
                                          rating: data.rating,
                                          contact: data.contact,
                                   }
                            }
                            console.log('Product Information', productInfo)
                            adminSaveProducts(productInfo, {
                                   onSuccess: () => {
                                          toast.success('Product Added Successfully')
                                   },
                                   onError: (error) => {
                                          toast.error(error.message)
                                   }
                            })
                     },
                     onError: (error) => {
                            toast.error(error.message);
                     }
              })
       }
       useEffect(() => {
              setValue('Tags', tags, { shouldValidate: true });
       }, [tags]);
       useEffect(() => {
              setValue('Colors', colors);
       }, [colors]);
       useEffect(() => {
              setValue('Variant', variant);
       }, [variant]);


       return (
              <div>
                     <Helmet><title>E-Commerce | Add Products</title></Helmet>
                     <AdminSectionTitle SubHeading='--------Whats New--------' Heading='Add A New Product'></AdminSectionTitle>
                     <div className="card flex justify-center items-center w-full md:flex-11/12 lg:flex-9/12 shrink-0 shadow-sm border border-gray-300">
                            <div className="w-10/12 md:w-10/12 lg:w-11/12 py-7">
                                   <form onSubmit={handleSubmit(onsubmit)} className="card-body flex items-center p-0">
                                          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                 {/* -------------------Title Input------------------ */}
                                                 <div className="form-control space-y-1.5 md:col-span-2 lg:col-span-3">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Title : </span>
                                                        </label>
                                                        <input type="text" required {...register('Title', { required: true })} placeholder="Enter Your Title" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Description Input------------------ */}
                                                 <div className="form-control space-y-1.5 md:col-span-2 lg:col-span-3">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Description : </span>
                                                        </label>
                                                        <textarea required {...register('Description', { required: true })} className="textarea  w-full input input-bordered focus:outline-0" placeholder="Enter Your Description"></textarea>
                                                 </div>
                                                 {/* --------------------Category Input------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">Category : </span></label>
                                                        <select required {...register('Category', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select Category</option>
                                                               <option value="Electronics">Electronics</option>
                                                               <option value="Fashion">Fashion</option>
                                                               <option value="Home Appliances">Home Appliances</option>
                                                               <option value="Kitchenware">Kitchenware</option>
                                                               <option value="Personal Care">Personal Care</option>
                                                               <option value="Smart Home">Smart Home</option>
                                                               <option value="Others">Others</option>
                                                        </select>
                                                 </div>
                                                 {/* -------------------SubCategory Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">SubCategory : </span>
                                                        </label>
                                                        <input type="text" required {...register('SubCategory', { required: true })} placeholder="Enter Your SubCategory" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Price Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Price : </span>
                                                        </label>
                                                        <input type="tel" required {...register('Price', { required: true, valueAsNumber: true })} placeholder="Enter Your Price" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------OfferPrice Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">OfferPrice : </span>
                                                        </label>
                                                        <input type="tel" required {...register('OfferPrice', { valueAsNumber: true })} placeholder="Enter Your OfferPrice" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Rating Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Rating : </span>
                                                        </label>
                                                        <input type="tel" required {...register('Rating', { required: true, valueAsNumber: true })} placeholder="Enter Your Rating" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Stock Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Stock : </span>
                                                        </label>
                                                        <input type="tel" required {...register('Stock', { required: true, valueAsNumber: true })} placeholder="Enter Your Stock" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Tags Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <MultiValueInput label="Tags:" placeholder="Type a Tag And Press Enter" value={tags} onChange={setTags} />
                                                 </div>
                                                 {/* -------------------Brand Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Brand : </span>
                                                        </label>
                                                        <input type="text" required {...register('Brand', { required: true })} placeholder="Enter Your Brand" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Colors Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <MultiValueInput required label="Colors:" placeholder="Type # Than Color Code And Press Enter" value={colors} onChange={setColors} />
                                                 </div>
                                                 {/* -------------------Variant Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <MultiValueInput required label="Variant:" placeholder="Enter Your Product Variant" value={variant} onChange={setVariant} />
                                                 </div>
                                                 {/* ------------WarrantyInformation Input------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Warranty Info : </span>
                                                        </label>
                                                        <input type="text" required {...register('WarrantyInformation', { required: true })} placeholder="Enter Your Warranty Info" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* --------------------Available Input------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">Available : </span></label>
                                                        <select required {...register('available', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select Availability</option>
                                                               <option value="true">True</option>
                                                               <option value="false">False</option>
                                                        </select>
                                                 </div>
                                                 {/* ----------------ExchangePeriod Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Exchange Period : </span>
                                                        </label>
                                                        <input type="text" required {...register('exchangePeriod', { required: true })} placeholder="Enter Your Exchange Period" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* --------------------Offer Time Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Offer Time : </span>
                                                        </label>
                                                        <div className="flex gap-2">
                                                               <input type="tel" {...register('Day', { valueAsNumber: true })} placeholder="Day" className="w-full input input-bordered focus:outline-0" />
                                                               <input type="tel" {...register('Hour', { valueAsNumber: true })} placeholder="Hour" className="w-full input input-bordered focus:outline-0" />
                                                               <input type="tel" {...register('Minutes', { valueAsNumber: true })} placeholder="Minutes" className="w-full input input-bordered focus:outline-0" />
                                                               <input type="tel" {...register('Second', { valueAsNumber: true })} placeholder="Seconds" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                 </div>
                                                 {/* ------------------Condition Input--------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Condition : </span>
                                                        </label>
                                                        <input type="text" {...register('Condition')} placeholder="Enter Your Product Condition" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* --------------AvailabilityStatus Input-------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">Availability Status : </span></label>
                                                        <select required {...register('AvailabilityStatus', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select Availability Status</option>
                                                               <option value="In Stock">In Stock</option>
                                                               <option value="Limited Stock">Limited Stock</option>
                                                               <option value="Not Available">Not Available</option>
                                                        </select>
                                                 </div>
                                                 {/* ------------------Is NewArrival Input--------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">New Arrival : </span></label>
                                                        <select required {...register('isNewArrival', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select New Arrival Status</option>
                                                               <option value="true">True</option>
                                                               <option value="false">False</option>
                                                        </select>
                                                 </div>
                                                 {/* -----------------Is BestSeller Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">Best Seller : </span></label>
                                                        <select required {...register('isBestSeller', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select Best Seller Status</option>
                                                               <option value="true">True</option>
                                                               <option value="false">False</option>
                                                        </select>
                                                 </div>
                                                 {/* ------------------Is OnSale Input--------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">On Sale : </span></label>
                                                        <select required {...register('isOnSale', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select On Sale Status</option>
                                                               <option value="true">True</option>
                                                               <option value="false">False</option>
                                                        </select>
                                                 </div>
                                                 {/* ------------------Return Policy Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Return Policy : </span>
                                                        </label>
                                                        <input type="text" required {...register('ReturnPolicy', { required: true })} placeholder="Enter Your Return Policy" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* ------------------Seller Name Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Seller Name : </span>
                                                        </label>
                                                        <input type="text" required {...register('name', { required: true })} placeholder="Enter Your Seller Name" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* ------------------Seller location Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Seller location : </span>
                                                        </label>
                                                        <input type="text" required {...register('location', { required: true })} placeholder="Enter Your Seller location" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* ------------------Seller Rating Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Seller Rating : </span>
                                                        </label>
                                                        <input type="tel" required {...register('rating', { required: true, valueAsNumber: true })} placeholder="Enter Your Seller Rating" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* ------------------Seller Contact Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium"> Seller Number : </span>
                                                        </label>
                                                        <input type="tel" required {...register('contact', { required: true, valueAsNumber: true })} placeholder="Enter Your Seller Number" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 <div className="lg:col-span-3">
                                                        <input type="file" {...register('Images', { required: true, valueAsNumber: true })} multiple className="file-input file-input-ghost" />
                                                 </div>
                                                 {/* ---------------------Submit Button------------------- */}
                                                 <div className="form-control md:col-span-2 lg:col-span-3">
                                                        <button className={`btn w-full hover:bg-black font-semibold ${isValid ? 'bg-Radical text-white' : 'bg-red-400 text-white'}`}><AiOutlinePlusCircle className="text-lg font-bold" /> Add Product</button>
                                                 </div>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       );
};

export default AddProducts;