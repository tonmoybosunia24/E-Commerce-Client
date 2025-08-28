import { Link, useNavigate } from "react-router";
import useCategory from "../../../Hooks/useCategory";
import advertiseImg1 from '../../../assets/Advertise/Advertise1.jpg'
import { useForm } from "react-hook-form";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import useSendEmail from "../../../Hooks/useSendEmail";
import { toast } from "react-toastify";

const ContactUsSection = () => {

       const [categories, categoriesLoading] = useCategory();
       const { sendEmail, emailDataLoading } = useSendEmail();
       const navigate = useNavigate()
       const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
       const onsubmit = (data) => {
              const contactData = {
                     Fullname: `${data.firstName} ${data.lastName}`,
                     Email: data.email,
                     PhoneNumber: data.phoneNumber,
                     Description: data.description,
              }
              sendEmail(contactData, {
                     onSuccess: () => {
                            toast.success('Your Message Send Successfully')
                            navigate('/')
                     },
                     onError: (error) => {
                            toast.error(error.message)
                     }
              })
       }

       return (
              <div className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-5">
                            {/* ------------------Advertise & Categories Container---------------- */}
                            <div className="h-fit flex-3/12 bg-aliceBlue p-5 space-y-2 rounded-md">
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
                            <div className="flex-9/12">
                                   <AdminSectionTitle SubHeading='--------We’re Always Here--------' Heading='Contact Our Team'></AdminSectionTitle>
                                   {/* --------------------Contact From------------------ */}
                                   <form onSubmit={handleSubmit(onsubmit)} className="card-body flex items-center border border-gray-300 rounded-md">
                                          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                                 {/* -------------------First Name Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-bold">First Name : </span>
                                                        </label>
                                                        <input type="text" required {...register('firstName', { required: true })} placeholder="Your First Name" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Last Name Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-bold">Last Name : </span>
                                                        </label>
                                                        <input type="text" required {...register('lastName', { required: true })} placeholder="Your Last Name" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* ---------------------Email Input-------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-bold">Email : </span>
                                                        </label>
                                                        <input type="email" required {...register('email', { required: true })} placeholder="Email" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -----------------Phone Number Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-bold">Phone Number : </span>
                                                        </label>
                                                        <input type="tel" required {...register('phoneNumber', { required: true })} placeholder="Your Phone Number" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Description Input------------------ */}
                                                 <div className="form-control space-y-1.5 md:col-span-2 lg:col-span-2">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-bold">Description : </span>
                                                        </label>
                                                        <textarea required {...register('description', { required: true })} className="textarea  w-full input input-bordered focus:outline-0 min-h-24" placeholder="Enter Your Description"></textarea>
                                                 </div>
                                                 {/* ---------------------Submit Button------------------- */}
                                                 <div className="form-control md:col-span-2 lg:col-span-2">
                                                        <input className={`btn w-full ${isValid ? 'bg-Radical text-white' : 'bg-red-400 text-white'}`} type="submit" value="Message Us" />
                                                 </div>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       );
};

export default ContactUsSection;