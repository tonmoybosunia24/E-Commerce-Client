import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useWishlist = () => {

       const axiosSecure = useAxiosSecure();
       const { user, loading } = useContext(AuthContext);

       const { data: wishlist = [], isPending: wishlistLoading, refetch } = useQuery({
              queryKey: ['wishlist', user?.email],
              enabled: !loading && !!user?.email,
              queryFn: async () => {
                     const res = await axiosSecure.get(`/wishlist?email=${user?.email}`)
                     return res.data;
              }
       })

       return [wishlist, wishlistLoading, refetch];
};

export default useWishlist;