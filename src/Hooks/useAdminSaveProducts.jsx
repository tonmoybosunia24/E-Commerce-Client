import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAdminSaveProducts = () => {

       const axiosPublic = useAxiosPublic();
       const { mutate: adminSaveProducts, isPending } = useMutation({
              mutationFn: async (productInfo) => {
                     const res = await axiosPublic.post('/products', productInfo);
                     return res.data;
              }
       })

       return { adminSaveProducts, isPending }
};

export default useAdminSaveProducts;