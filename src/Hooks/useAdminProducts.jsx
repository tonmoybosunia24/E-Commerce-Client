import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdminProducts = () => {

       const axiosSecure = useAxiosSecure();
       
       const { data: adminProducts = [], isPending: adminProductsLoading, refetch } = useQuery({
              queryKey: ['adminProducts'],
              queryFn: async () => {
                     const res = await axiosSecure.get('/adminProducts')
                     return res.data;
              }
       })

       return [adminProducts, adminProductsLoading, refetch]
};

export default useAdminProducts;