import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useCarts = () => {

       const axiosSecure = useAxiosSecure();

       const { user, loading } = useContext(AuthContext);
       const { refetch, data: carts = [], isPending: cartsLoading, } = useQuery({
              queryKey: ['carts', user?.email],
              enabled: !loading && !!user?.email,
              queryFn: async () => {
                     const res = await axiosSecure.get(`/carts?email=${user.email}`)
                     return res.data;
              }
       })
       return [carts, cartsLoading, refetch];
};

export default useCarts;