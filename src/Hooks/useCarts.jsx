import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useCarts = () => {
       const axiosPublic = useAxiosPublic();
       const { user } = useContext(AuthContext);
       const { refetch, data: carts = [], isPending: cartsLoading, } = useQuery({
              queryKey: ['carts', user?.email],
              enabled: !!user?.email,
              queryFn: async () => {
                     const res = await axiosPublic.get(`/carts?email=${user.email}`)
                     return res.data;
              }
       })
       return [carts, cartsLoading, refetch];
};

export default useCarts;