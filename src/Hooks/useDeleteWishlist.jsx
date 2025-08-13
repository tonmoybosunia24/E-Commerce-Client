import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDeleteWishlist = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: deleteWishlistItem, isPending: deleteWishlistItemPending } = useMutation({
              mutationFn: async (id) => {
                     const res = await axiosSecure.delete(`/wishlist/${id}`);
                     return res.data;
              }
       })

       return { deleteWishlistItem, deleteWishlistItemPending }
};

export default useDeleteWishlist;