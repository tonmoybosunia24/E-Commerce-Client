import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useSaveCarts = () => {
       const axiosPublic = useAxiosPublic();
       const axiosSecure = useAxiosSecure();
       const { mutate: saveCart, isPending, isSuccess, isError } = useMutation({
              mutationFn: async (cartInfo) => {
                     const res = await axiosPublic.post('/carts', cartInfo);
                     return res.data;
              }
       })
       return { saveCart, isPending, isSuccess, isError }
};

export default useSaveCarts;