import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoGoogle } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { toast } from "react-toastify";
import useSaveUsers from "../../Hooks/useSaveUsers";
import { useLocation, useNavigate } from "react-router";


const SocialAuthentication = () => {

       const { googleLogin } = useContext(AuthContext);
       const { saveUser } = useSaveUsers();
       const location = useLocation();
       const navigate = useNavigate();
       const form = location?.state?.form?.pathname || '/';

       const handleGoogleLogin = () => {
              googleLogin()
                     .then((result) => {
                            const userInfo = {
                                   email: result.user?.email,
                                   name: result.user?.displayName,
                            }
                            saveUser(userInfo)
                            toast.success('Google Login Successful')
                            navigate(location?.state ? form : '/')
                     })
                     .catch((error) => {
                            toast.error(error.message)
                     })
       }

       return (
              <div className="flex text-4xl justify-center gap-2">
                     <div className="text-xl border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white cursor-pointer"><TiSocialFacebook /></div>
                     <div onClick={handleGoogleLogin} className="text-xl border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white cursor-pointer"><BiLogoGoogle /></div>
                     <div className="text-xl border border-gray-300 rounded-full p-2 hover:bg-Radical hover:text-white cursor-pointer"><IoLogoGithub /></div>
              </div>
       );
};

export default SocialAuthentication;