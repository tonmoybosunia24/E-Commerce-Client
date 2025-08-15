import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDeleteUser = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: deleteUser, isPending: deleteUserLoading } = useMutation({
              mutationFn: async (id) => {
                     const res = await axiosSecure.delete(`/users/${id}`);
                     return res.data;
              }
       })

       return { deleteUser, deleteUserLoading }
};

export default useDeleteUser;