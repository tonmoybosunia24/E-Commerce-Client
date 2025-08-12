import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUpdateProducts = (id) => {

       const axiosSecure = useAxiosSecure();

       const { data: updateProducts = [], isPending: updateProductsLoading, refetch } = useQuery({
              queryKey: ['updateProducts', id],
              enabled: !!id,
              queryFn: async () => {
                     const res = await axiosSecure.get(`/updateProducts/${id}`)
                     return res.data;
              }
       })

       return [updateProducts, updateProductsLoading, refetch]
};

export default useUpdateProducts;