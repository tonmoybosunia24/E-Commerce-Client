import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProductDetails = (id) => {

       const axiosPublic = useAxiosPublic();
       const { data = {}, isPending: productDetailsLoading } = useQuery({
              queryKey: ['product', id],
              queryFn: async () => {
                     const res = await axiosPublic.get(`/productDetails/${id}`);
                     return res.data
              }
       });
       return { product: data.product || {}, productTitle: data.product?.Title || '', relatedProducts: data.relatedProducts || [], productDetailsLoading }
};

export default useProductDetails;