import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDeleteProducts = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: deleteProduct, isPending: deleteProductPending } = useMutation({
              mutationFn: async (id) => {
                     const res = await axiosSecure.delete(`/products/${id}`);
                     return res.send;
              }
       })

       return { deleteProduct, deleteProductPending }
};

export default useDeleteProducts;