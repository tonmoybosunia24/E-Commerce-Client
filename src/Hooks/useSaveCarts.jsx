import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSaveCarts = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: saveCart, isPending, isSuccess, isError } = useMutation({
              mutationFn: async (cartInfo) => {
                     const res = await axiosSecure.post('/carts', cartInfo);
                     return res.data;
              }
       })
       return { saveCart, isPending, isSuccess, isError }
};

export default useSaveCarts;