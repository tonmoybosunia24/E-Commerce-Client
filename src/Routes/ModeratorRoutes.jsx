import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useModerator from "../Hooks/useModerator";
import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";

const ModeratorRoutes = ({ children }) => {

       const { user, loading, Logout } = useContext(AuthContext);
       const [isAdmin, isAdminLoading] = useAdmin();
       const [isModerator, isModeratorLoading] = useModerator();
       const location = useLocation();

       if (loading || isAdminLoading || isModeratorLoading) {
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>;
       }

       else if (user && !isModerator && !isAdmin && !loading && !isAdminLoading) {
              Logout();
              return <Navigate state={{ from: location }} replace to="/login" />;
       }

       else if ((user && isModerator) || (user && isAdmin)) {
              return children;
       }

       else if (!loading && !isAdminLoading && !isModeratorLoading) {
              return <Navigate state={{ from: location }} replace to='/login' />;
       }
};

export default ModeratorRoutes;