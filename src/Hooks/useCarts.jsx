import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {

       const axiosPublic = useAxiosPublic()
       const axiosSecure = useAxiosSecure();

       const { user, loading } = useContext(AuthContext);
       const { refetch, data: carts = [], isPending: cartsLoading, } = useQuery({
              queryKey: ['carts', user?.email],
              enabled: !loading && !!user?.email,
              queryFn: async () => {
                     const res = await axiosPublic.get(`/carts?email=${user.email}`)
                     console.log(res)
                     return res.data;
              }
       })
       return [carts, cartsLoading, refetch];
};

export default useCarts;