import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router";

const AdminRoutes = ({ children }) => {

       const { user, loading } = useContext(AuthContext);
       const [isAdmin, isAdminLoading] = useAdmin();
       const location = useLocation();

       if (loading || isAdminLoading) {
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>;
       }
       else if (user && isAdmin) {
              return children;
       }

       return <Navigate state={{ from: location }} replace to='/login'></Navigate>;
};

export default AdminRoutes;