import { Helmet } from "react-helmet-async";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import MultiValueInput from "../../../Components/MultiValueInput/MultiValueInput";

const AddProducts = () => {

       const [tags, setTags] = useState([]);
       const [colors, setColors] = useState([]);
       const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
       const onsubmit = (data) => {
              console.log(data)
       }
       useEffect(() => {
              setValue('Tags', tags, { shouldValidate: true });
       }, [tags]);
       useEffect(() => {
              setValue('Colors', colors);
       }, [colors]);


       return (
              <div>
                     <Helmet><title>E-Commerce | Add Products</title></Helmet>
                     <AdminSectionTitle SubHeading='--------Whats New--------' Heading='Add A New Product'></AdminSectionTitle>
                     <div className="card flex justify-center items-center w-full md:flex-11/12 lg:flex-9/12 shrink-0 shadow-sm border border-gray-300">
                            <div className="w-10/12 md:w-10/12 lg:w-11/12 py-7">
                                   <form onSubmit={handleSubmit(onsubmit)} className="card-body flex items-center p-0">
                                          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                 {/* -------------------Title Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Title : </span>
                                                        </label>
                                                        <input type="text" required {...register('Title', { required: true })} placeholder="Enter Your Title" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Description Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">Description : </span>
                                                        </label>
                                                        <input type="text" required {...register('Description', { required: true })} placeholder="Enter Your Description" className="w-full input input-bordered focus:outline-0" />
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
                                                        <input type="tel" required {...register('OfferPrice', { required: true, valueAsNumber: true })} placeholder="Enter Your OfferPrice" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------DiscountPercentage Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">DiscountPercentage : </span>
                                                        </label>
                                                        <input type="tel" required {...register('DiscountPercentage', { required: true, valueAsNumber: true })} placeholder="Enter Your DiscountPercentage" className="w-full input input-bordered focus:outline-0" />
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
                                                 {/* ---------------------Submit Button------------------- */}
                                                 <div className="form-control md:col-span-2 lg:col-span-3">
                                                        <input className={`btn w-full ${isValid ? 'bg-Radical text-white' : 'bg-red-400 text-white'}`} type="submit" value="Sign Up" />
                                                 </div>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       );
};

export default AddProducts;