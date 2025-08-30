import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoutes = ({ children }) => {

       const { user, loading } = useContext(AuthContext);
       const location = useLocation();
       const hasShownToast = useRef(false);

       useEffect(() => {
              if (user && !user.emailVerified && !hasShownToast.current) {
                     toast.error("Please Verify Your Email");
                     hasShownToast.current = true;
              }
       }, [user]);
       if (loading) {
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>;
       }
       else if (user && user.emailVerified) {
              return children;
       }
       return <Navigate state={{ from: location }} replace to='/login'></Navigate>;
};

export default PrivateRoutes;