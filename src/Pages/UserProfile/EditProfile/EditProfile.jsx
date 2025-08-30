import { useForm } from "react-hook-form";
import useUserInfo from "../../../Hooks/useUserInfo";
import useUploadImage from "../../../Hooks/useUploadImage";
import toast from "react-hot-toast";
import { useEffect } from "react";
import useUploadUpdtedUserInfo from "../../../Hooks/useUploadUpdtedUserInfo";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import { Helmet } from "react-helmet-async";

const EditProfile = () => {

       const [userInfo, userInfoPending, refetch] = useUserInfo();
       const { updatedUserInfo, updatedUserInfoLoading } = useUploadUpdtedUserInfo();
       const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
       const { uploadImages } = useUploadImage();
       useEffect(() => {
              if (userInfo) {
                     setValue('country', userInfo?.country);
                     setValue('gender', userInfo?.gender);
              }
       }, [userInfo, setValue])
       const onsubmit = (data) => {
              const filesArray = Array.from(data.Image);
              uploadImages(filesArray, {
                     onSuccess: (urls) => {
                            const updatedUserProfileInfo = {
                                   name: `${data.firstName} ${data.lastName}`,
                                   phoneNumber: data.phoneNumber,
                                   dateOfBirth: data.dateOfBirth,
                                   gender: data.gender,
                                   country: data.country,
                                   email: data.email,
                                   image: urls.length > 0 ? urls : userInfo?.image,
                                   password: userInfo?.password,
                                   emailVerified: userInfo.emailVerified,
                                   role: userInfo?.role,
                                   referCodes: data.referCode,
                            }
                            updatedUserInfo({ id: userInfo?._id, updatedUserInfo: updatedUserProfileInfo }, {
                                   onSuccess: () => {
                                          toast.success('User Profile Updated Successful');
                                          refetch();
                                   },
                                   onError: (error) => {
                                          toast.error(error.message);
                                   }
                            })
                     },
                     onError: (error) => {
                            toast.error(error.message)
                     }
              })
       }

       return (
              <div>
                     <Helmet><title>E-Commerce | User Profile Edit    </title></Helmet>
                     <AdminSectionTitle SubHeading='--------Update Info--------' Heading='Edit User Profile'></AdminSectionTitle>
                     <div className="card flex justify-center items-center w-full md:flex-11/12 lg:flex-9/12 shrink-0 shadow-sm border border-gray-300 ">
                            <div className="w-10/12 md:w-10/12 lg:w-11/12 py-7">
                                   <form onSubmit={handleSubmit(onsubmit)} className="card-body flex items-center p-0">
                                          <h2 className="font-bold text-center text-2xl text-Radical pb-3">Edit Your Profile</h2>
                                          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                                 {/* -------------------First Name Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text text-sm font-medium">First Name : </span>
                                                        </label>
                                                        <input type="text" defaultValue={userInfo?.name?.trim().split(/\s+/)[0] || ''} required {...register('firstName', { required: true })} placeholder="Your First Name" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -------------------Last Name Input------------------ */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Last Name : </span>
                                                        </label>
                                                        <input type="text" defaultValue={userInfo?.name?.trim().split(/\s+/).slice(1).join(' ') || ''} required {...register('lastName', { required: true })} placeholder="Your Last Name" name="lastName" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* ---------------------Email Input-------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Email : </span>
                                                        </label>
                                                        <input type="email" value={userInfo?.email} required {...register('email', { required: true })} placeholder="Email" name="email" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -----------------Phone Number Input----------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Phone Number : </span>
                                                        </label>
                                                        <input type="tel" defaultValue={userInfo?.phoneNumber} required {...register('phoneNumber', { required: true })} placeholder="Your Phone Number" name="phoneNumber" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* -----------------Date Of Birth Input---------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label">
                                                               <span className="label-text">Date Of Birth : </span>
                                                        </label>
                                                        <input type="date" defaultValue={userInfo?.dateOfBirth} required {...register('dateOfBirth', { required: true })} placeholder="Your Date Of Birth" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* --------------------Country Input------------------- */}
                                                 <div className="form-control space-y-1.5">
                                                        <label className="label"><span className="label-text">Country : </span></label>
                                                        <select required {...register('country', { required: true })} className="w-full select select-bordered focus:outline-0">
                                                               <option disabled value="">Select Country</option>
                                                               <option value="Bangladesh">Bangladesh</option>
                                                               <option value="India">India</option>
                                                               <option value="Pakistan">Pakistan</option>
                                                        </select>
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
                                                        <input type="tel" defaultValue={userInfo?.referCodes} {...register('referCode')} placeholder="Your Refer Code" name="referCode" className="w-full input input-bordered focus:outline-0" />
                                                 </div>
                                                 {/* ---------------------Product Image--------------------- */}
                                                 <div className="">
                                                        <input type="file" {...register('Image')} className="file-input file-input-ghost" />
                                                 </div>
                                                 {/* ---------------------Submit Button------------------- */}
                                                 <div className="form-control md:col-span-2 lg:col-span-2">
                                                        <input className={`btn w-full ${isValid ? 'bg-Radical text-white' : 'bg-red-400 text-white'}`} type="submit" value="Update Profile" />
                                                 </div>
                                          </div>
                                          {/* -----------------------Agreement Section-------------------- */}
                                          <div className="flex gap-1.5 mt-2">
                                                 <input type="checkbox" className="checkbox checkbox-xs lg:checkbox-xs rounded-sm" {...register('conditionCheck', { required: true })} />
                                                 <p className="font-medium text-xs md:text-xs lg:text-sm">I Agree To The Terms And Conditions And The Privacy Policy</p>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       );
};

export default EditProfile;