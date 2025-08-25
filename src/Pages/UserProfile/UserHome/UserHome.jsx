import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";
import useUserInfo from "../../../Hooks/useUserInfo";

const UserHome = () => {

       const [userInfo, userInfoPending] = useUserInfo();

       return (
              <div>
                     <AdminSectionTitle SubHeading='--------Welcome Back--------' Heading='Your Dashboard Home'></AdminSectionTitle>
                     {userInfoPending || !userInfo ? (<span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>) : (
                            <div className="card w-full md:flex-11/12 lg:flex-9/12 shrink-0 shadow-sm border border-gray-300 p-5 md:p-7 lg:p-10">
                                   <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
                                          <div className="flex flex-col gap-2">
                                                 <img className="w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover m-auto border-2 border-gray-300" src={userInfo?.image} alt="" />
                                                 <h2 className="text-center text-3xl font-bold">{userInfo?.name}</h2>
                                          </div>
                                          <div className="border-r border-gray-300 hidden md:block lg:block"></div>
                                          <div className="text-base md:text-sm lg:text-lg">
                                                 <div className="flex gap-1">
                                                        <p className="font-bold">Name : </p>
                                                        <p>{userInfo?.name}</p>
                                                 </div>
                                                 <div className="flex gap-1">
                                                        <p className="font-bold">Phone : </p>
                                                        <p>{userInfo?.phoneNumber}</p>
                                                 </div>
                                                 <div className="flex gap-1 overflow-hidden">
                                                        <p className="font-bold">Email:</p>
                                                        <p className="truncate whitespace-nowrap">{userInfo?.email}</p>
                                                 </div>
                                                 <div className="flex gap-1">
                                                        <p className="font-bold">Country : </p>
                                                        <p>{userInfo?.country}</p>
                                                 </div>
                                                 <div className="flex gap-1">
                                                        <p className="font-bold">Date Of Birth : </p>
                                                        <p>{userInfo?.dateOfBirth}</p>
                                                 </div>
                                                 <div className="flex gap-1">
                                                        <p className="font-bold">Gender : </p>
                                                        <p className="capitalize">{userInfo?.gender}</p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     )}
              </div>
       );
};

export default UserHome;