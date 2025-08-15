import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdminSaveProducts = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: adminSaveProducts, isPending } = useMutation({
              mutationFn: async (productInfo) => {
                     const res = await axiosSecure.post('/products', productInfo);
                     return res.data;
              }
       })

       return { adminSaveProducts, isPending }
};

export default useAdminSaveProducts;