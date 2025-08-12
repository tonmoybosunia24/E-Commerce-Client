import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUpdateQuantity = () => {

       const axiosPublic = useAxiosPublic();

       const { mutate: updateQuantity, isLoading, isSuccess, isError } = useMutation({
              mutationFn: async ({ id, quantity }) => {
                     const res = await axiosPublic.patch(`/carts/${id}`, { quantity });
                     return res.data;
              },
       })

       return { updateQuantity, isLoading, isSuccess, isError }
};

export default useUpdateQuantity;