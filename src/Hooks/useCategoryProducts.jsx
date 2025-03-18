import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategoryProducts = (category) => {

       const axiosPublic = useAxiosPublic();
       const {data: Products = [], isPending: loading} = useQuery({
              queryKey: ['products', category],
              queryFn: async () => {
                     const res = await axiosPublic.get(`/products/${category}`);
                     return res.data;
              }
       })

       return [Products, loading]
};

export default useCategoryProducts;