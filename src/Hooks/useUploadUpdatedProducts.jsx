import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUploadUpdatedProducts = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: updatedProducts, isPending: updatedProductsLoading } = useMutation({
              mutationFn: async ({ id, updateProductInfo }) => {
                     const res = await axiosSecure.patch(`/updateProducts/${id}`, updateProductInfo)
                     return res.data;
              }
       })

       return { updatedProducts, updatedProductsLoading }
};

export default useUploadUpdatedProducts;