import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdminProducts = (searchInput) => {

       const axiosSecure = useAxiosSecure();

       const { data: adminProducts = [], isPending: adminProductsLoading, refetch } = useQuery({
              queryKey: ['adminProducts', searchInput],
              queryFn: async () => {
                     const res = await axiosSecure.get(`/adminProducts?search=${searchInput || ''}`)
                     return res.data;
              }
       })

       return [adminProducts, adminProductsLoading, refetch]
};

export default useAdminProducts;