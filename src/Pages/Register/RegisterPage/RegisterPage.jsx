import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import useSaveUsers from "../../../Hooks/useSaveUsers";
import useCategory from "../../../Hooks/useCategory";
import advertiseImg1 from '../../../assets/Advertise/Advertise1.jpg'
import { Link, useLocation, useNavigate } from "react-router";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import SocialAuthentication from "../../../Components/SocialAuthentication/SocialAuthentication";

const RegisterPage = () => {

       const { CreateUser, verificationEmail } = useContext(AuthContext)
       const { saveUser } = useSaveUsers();
       const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
       const password = watch('password');
       const [categories, categoriesLoading] = useCategory();
       const [showPass, setShowPass] = useState(false);
       const [showConfirmPass, setShowConfirmPass] = useState(false);
       const location = useLocation();
       const navigate = useNavigate();
       const from = location?.state?.from?.pathname || '/';
       const onsubmit = (data) => {
              CreateUser(data.email, data.password)
                     .then((userCredential) => {
                            const currentUser = userCredential.user;
                            toast.success('Registration Completed')
                            /* -----------------Update Profile Data------------------ */
                            updateProfile(currentUser, {
                                   displayName: `${data.firstName} ${data.lastName}`,
                            })
                                   .then(() => {
                                          const userInfo = {
                                                 name: `${data.firstName} ${data.lastName}`,
                                                 phoneNumber: data.phoneNumber,
                                                 dateOfBirth: data.dateOfBirth,
                                                 gender: data.gender,
                                                 country: data.country,
                                                 email: data.email,
                                                 password: data.password,
                                                 emailVerified: currentUser.emailVerified,
                                                 referCodes: data.referCode
                                          }
                                          saveUser(userInfo);
                                          verificationEmail()
                                                 .then(() => {
                                                        toast.success('Please Verify Your Email')
                                                 })
                                                 .catch((error) => {
                                                        toast.error(error.message)
                                                 })
                                          navigate(location?.state ? from : '/')
                                   })
                                   .catch((error) => {
                                          toast.error(error.message)
                                   })
                     })
                     .catch((error) => {
                            toast.error(error.message)
                     })
       }

       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-5">
                            {/* ------------------Left Side For Categories And Advertisement------------------ */}
                            <div className="lg:flex-3/12 space-y-2 border p-5 border-gray-300 shadow-sm rounded-lg">
                                   <div><img className="w-full" src={advertiseImg1} alt="" /></div>
                                   <h2 className="font-bold text-lg">All Categories</h2>
                                   {/* -----------------All The Categories Section---------------- */}
                                   <div className="space-y-1">
                                          {categoriesLoading ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                                                 categories.map((category, index) => (
                                                        <p key={index} className="font-semibold hover:text-Radical cursor-pointer"><Link to={`/products?category=${category}`}>{category}</Link></p>
                                                 )))}
                                   </div>
                            </div>
                            {/* ----------------------Right Side Registration Form-------------------- */}
                            <div className="card flex justify-center items-center w-full md:flex-11/12 lg:flex-9/12 shrink-0 shadow-sm border border-gray-300 ">
                                   <div className="w-10/12 md:w-10/12 lg:w-11/12 py-7">
                                          <form onSubmit={handleSubmit(onsubmit)} className="card-body flex items-center p-0">
                                                 <h2 className="font-bold text-center text-2xl hover:text-Radical pb-3">Register Now & Start Exploring!</h2>
                                                 <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                                        {/* -------------------First Name Input------------------ */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label">
                                                                      <span className="label-text text-sm font-medium">First Name : </span>
                                                               </label>
                                                               <input type="text" required {...register('firstName', { required: true })} placeholder="Your First Name" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                        {/* -------------------Last Name Input------------------ */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label">
                                                                      <span className="label-text">Last Name : </span>
                                                               </label>
                                                               <input type="text" required {...register('lastName', { required: true })} placeholder="Your Last Name" name="lastName" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                        {/* ---------------------Email Input-------------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label">
                                                                      <span className="label-text">Email : </span>
                                                               </label>
                                                               <input type="email" required {...register('email', { required: true })} placeholder="Email" name="email" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                        {/* -----------------Phone Number Input----------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label">
                                                                      <span className="label-text">Phone Number : </span>
                                                               </label>
                                                               <input type="tel" required {...register('phoneNumber', { required: true })} placeholder="Your Phone Number" name="phoneNumber" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                        {/* -----------------Date Of Birth Input---------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label">
                                                                      <span className="label-text">Date Of Birth : </span>
                                                               </label>
                                                               <input type="date" required {...register('dateOfBirth', { required: true })} placeholder="Your Date Of Birth" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                        {/* --------------------Country Input------------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label"><span className="label-text">Country : </span></label>
                                                               <select required {...register('country', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                                      <option disabled value="">Select Country</option>
                                                                      <option value="Bangladesh">Bangladesh</option>
                                                                      <option value="India">India</option>
                                                                      <option value="Other">Pakistan</option>
                                                               </select>
                                                        </div>
                                                        {/* -------------------Password Input------------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="flex items-center justify-between label">
                                                                      <span className="label-text">Password : </span>
                                                                      {errors.password?.type === 'pattern' && <span className="text-xs mt-0.5 text-red-600">Please Enter A Stronger Password.</span>}
                                                               </label>
                                                               <div className="flex relative">
                                                                      <input type={showPass ? 'text' : 'password'} required {...register('password', { required: true, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}/, message: "Password Must Contain Uppercase, Lowercase, Number, Special Char, And Minimum 6 Characters" } })} placeholder="Password" name="password" className="w-full input input-bordered focus:outline-0" />
                                                                      <div className="flex  absolute right-3 top-1/2 transform -translate-y-1/2">
                                                                             {showPass ? <IoIosEyeOff onClick={() => setShowPass(!showPass)} className="text-xl" /> : <IoIosEye onClick={() => setShowPass(!showPass)} className="text-xl" />}
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* ---------------Confirm Password Input--------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="flex items-center justify-between  label">
                                                                      <span className="label-text">Confirm Password : </span>
                                                                      {errors.confirmPassword && <span className="text-xs mt-0.5 text-red-600">{errors.confirmPassword.message}</span>}
                                                               </label>
                                                               <div className="flex relative">
                                                                      <input type={showConfirmPass ? 'text' : 'password'} required {...register('confirmPassword', { required: true, validate: value => value === password || 'Passwords Do Not Match' })} placeholder="Confirm Password" name="confirmPassword" className="w-full input input-bordered focus:outline-0" />
                                                                      <div className="flex  absolute right-3 top-1/2 transform -translate-y-1/2">
                                                                             {showPass ? <IoIosEyeOff onClick={() => setShowConfirmPass(!showConfirmPass)} className="text-xl" /> : <IoIosEye onClick={() => setShowConfirmPass(!showConfirmPass)} className="text-xl" />}
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* ---------------------Gender Input------------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label"><span className="label-text">Gender : </span></label>
                                                               <select required {...register('gender', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                                      <option disabled value="">Select Gender</option>
                                                                      <option value="male">Male</option>
                                                                      <option value="female">Female</option>
                                                                      <option value="other">Other</option>
                                                               </select>
                                                        </div>
                                                        {/* -------------------Refer Code Input------------------ */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label">
                                                                      <span className="label-text">Refer Code : </span>
                                                               </label>
                                                               <input type="tel" {...register('referCode')} placeholder="Your Refer Code" name="referCode" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                        {/* ---------------------Submit Button------------------- */}
                                                        <div className="form-control md:col-span-2 lg:col-span-2">
                                                               <input className={`btn w-full ${isValid ? 'bg-Radical text-white' : 'bg-red-400 text-white'}`} type="submit" value="Sign Up" />
                                                        </div>
                                                 </div>
                                                 {/* -----------------------Agreement Section-------------------- */}
                                                 <div className="flex gap-1.5">
                                                        <input type="checkbox" className="checkbox checkbox-xs lg:checkbox-xs rounded-sm" {...register('conditionCheck', { required: true })} />
                                                        <p className="font-medium text-xs md:text-xs lg:text-sm">I Agree To The Terms And Conditions And The Privacy Policy</p>
                                                 </div>
                                                 {/* ---------------------Social Login Section------------------- */}
                                                 <p className="text-center text-Radical text-sm">Already Registered <Link className="font-semibold base" to='/login'>Go to log In</Link></p>
                                                 <p className="text-center">Or Sign In With</p>
                                                 <SocialAuthentication></SocialAuthentication>
                                          </form>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default RegisterPage;