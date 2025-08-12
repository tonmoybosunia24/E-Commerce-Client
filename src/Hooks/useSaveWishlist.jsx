import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSaveWishlist = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: saveWishlist, isPending: saveWishlistLoading } = useMutation({
              mutationFn: async (wishlistInfo) => {
                     const res = await axiosSecure.post('/wishlist', wishlistInfo);
                     return res.data;
              }
       })

       return { saveWishlist, saveWishlistLoading };
};

export default useSaveWishlist;