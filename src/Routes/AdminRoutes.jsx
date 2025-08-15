import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router";
import useModerator from "../Hooks/useModerator";

const AdminRoutes = ({ children }) => {

       const { user, loading, Logout } = useContext(AuthContext);
       const [isAdmin, isAdminLoading] = useAdmin();
       const [isModerator, isModeratorLoading] = useModerator();
       const location = useLocation();

       if (loading || isAdminLoading || isModeratorLoading) {
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>;
       }
       else if (user && !isAdmin && !loading && !isAdminLoading) {
              Logout();
              return <Navigate state={{ from: location }} replace to="/login" />;
       }
       else if (user && isAdmin) {
              return children;
       }

       else if (!loading && !isAdminLoading) {
              return <Navigate state={{ from: location }} replace to='/login' />;
       }
};

export default AdminRoutes;