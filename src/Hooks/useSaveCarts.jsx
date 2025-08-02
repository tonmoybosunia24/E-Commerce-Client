import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSaveCarts = () => {
       const axiosPublic = useAxiosPublic();
       const { mutate: saveCart, isPending, isSuccess, isError } = useMutation({
              mutationFn: async (cartInfo) => {
                     const res = await axiosPublic.post('/carts', cartInfo);
                     return res.data;
              }
       })
       return { saveCart, isPending, isSuccess, isError }
};

export default useSaveCarts;