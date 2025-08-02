import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDeleteCart = () => {

       const axiosPublic = useAxiosPublic();
       const { mutate: deleteCardItem, isLoading, isSuccess, isError } = useMutation({
              mutationFn: async (id) => {
                     const res = await axiosPublic.delete(`/carts/${id}`);
                     return res.send;
              }
       })

       return { deleteCardItem, isLoading, isSuccess, isError }
};

export default useDeleteCart;