import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {

       const { user, loading } = useContext(AuthContext);
       const axiosSecure = useAxiosSecure();

       const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
              queryKey: [user?.email, 'isAdmin'],
              enabled: !!user?.email && !loading,
              queryFn: async () => {
                     const res = await axiosSecure.get(`/admin/${user.email}`);
                     return res.data.Admin;
              }
       })

       return [isAdmin, isAdminLoading]
};

export default useAdmin;