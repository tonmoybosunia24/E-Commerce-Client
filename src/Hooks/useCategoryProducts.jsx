import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategoryProducts = (query = '') => {

  const axiosPublic = useAxiosPublic();
  const { data: products = [], isPending: productsLoading } = useQuery({
    queryKey: ['filteredProducts', query],
    queryFn: async () => {
      const res = await axiosPublic.get(`/categoryProducts${query}`)
      return res.data
    }
  })

  return [products, productsLoading]
};

export default useCategoryProducts;