import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import advertiseImg1 from '../../../assets/Advertise/Advertise1.jpg'
import useCategory from "../../../Hooks/useCategory";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import SocialAuthentication from "../../../Components/SocialAuthentication/SocialAuthentication";

const LoginPage = () => {

       const { LoginUser, resetPassword } = useContext(AuthContext)
       const [categories, categoriesLoading] = useCategory()
       const { register, handleSubmit, formState: { errors, isValid }, getValues } = useForm();
       const [showPass, setShowPass] = useState(false);
       const location = useLocation();
       const navigate = useNavigate();
       const from = location?.state?.from?.pathname || '/';
       const onsubmit = (data) => {
              LoginUser(data.email, data.password)
                     .then(() => {
                            toast.success('Login Successful')
                            navigate(location?.state ? from : '/')
                     })
                     .catch((error) => {
                            toast.error(error.message)
                     })
       }
       const handleReset = () => {
              const email = getValues('email')
              if (!email) {
                     toast.error('Please Enter Your Email To Reset Password')
                     return;
              }
              resetPassword(email)
                     .then(() => {
                            toast.success('Reset Email Sent To Your Mail')
                     })
                     .catch((error) => {
                            toast.error(error.message)
                     })
       }

       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-5">
                            {/* ------------------Left Side For Categories And Advertisement------------------ */}
                            <div className="lg:flex-3/12 h-fit space-y-2 border p-5 bg-aliceBlue border-gray-300 shadow-sm rounded-lg">
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
                            {/* ----------------------Right Side Registration Form-------------------- */}
                            <div className="card flex justify-center items-center w-full md:flex-11/12 lg:flex-9/12 shrink-0 shadow-sm border border-gray-300 ">
                                   <div className="w-10/12 md:w-9/12 lg:w-8/12 py-7">
                                          <form onSubmit={handleSubmit(onsubmit)} className="card-body p-0">
                                                 <h2 className="font-bold text-center text-2xl text-Radical pb-3">Please Login</h2>
                                                 <div className="space-y-3">
                                                        {/* ---------------------Email Input-------------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="label">
                                                                      <span className="label-text">Email : </span>
                                                               </label>
                                                               <input type="email" required {...register('email', { required: true })} placeholder="Email" name="email" className="w-full input input-bordered focus:outline-0" />
                                                        </div>
                                                        {/* -------------------Password Input------------------- */}
                                                        <div className="form-control space-y-1.5">
                                                               <label className="flex items-center justify-between label">
                                                                      <span className="label-text">Password : </span>
                                                               </label>
                                                               <div className="flex relative">
                                                                      <input type={showPass ? 'text' : 'password'} required {...register('password', { required: true })} placeholder="Password" name="password" className="w-full input input-bordered focus:outline-0" />
                                                                      <div className="flex  absolute right-3 top-1/2 transform -translate-y-1/2">
                                                                             {showPass ? <IoIosEyeOff onClick={() => setShowPass(!showPass)} className="text-xl" /> : <IoIosEye onClick={() => setShowPass(!showPass)} className="text-xl" />}
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* -------------------Forget Password Section----------------- */}
                                                        <p onClick={handleReset} className="text-Radical cursor-pointer">Forget Password ?</p>
                                                        {/* ---------------------Submit Button------------------- */}
                                                        <div className="form-control md:col-span-2 lg:col-span-2">
                                                               <input className={`btn w-full ${isValid ? 'bg-Radical text-white' : 'bg-red-400 text-white'}`} type="submit" value="Sign In" />
                                                        </div>
                                                 </div>
                                                 {/* ---------------------Social Login Section------------------- */}
                                                 <p className="text-center text-Radical text-sm"> New Here ? <Link className="font-semibold base" to='/register'>Create An Account</Link></p>
                                                 <p className="text-center">Or Sign In With</p>
                                                 <SocialAuthentication></SocialAuthentication>
                                          </form>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default LoginPage;