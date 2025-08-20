import useAxiosSecure from "./useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const useDeleteCarts = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: deleteUserCarts, isPending: deleteUserCartsPending } = useMutation({
              mutationFn: async (userEmail) => {
                     const res = await axiosSecure.delete(`/userCarts/${userEmail}`)
                     return res.data;
              }
       })

       return { deleteUserCarts, deleteUserCartsPending }
};

export default useDeleteCarts;