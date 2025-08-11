import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDeleteCart = () => {

       const axiosSecure = useAxiosSecure();
       const { mutate: deleteCardItem, isLoading, isSuccess, isError } = useMutation({
              mutationFn: async (id) => {
                     const res = await axiosSecure.delete(`/carts/${id}`);
                     return res.send;
              }
       })

       return { deleteCardItem, isLoading, isSuccess, isError }
};

export default useDeleteCart;