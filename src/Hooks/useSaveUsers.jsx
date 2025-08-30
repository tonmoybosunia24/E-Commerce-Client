import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import toast from "react-hot-toast";

const useSaveUsers = () => {

       const axiosPublic = useAxiosPublic();

       const { mutate: saveUser, isPending, isSuccess, isError } = useMutation({
              mutationFn: async (userInfo) => {
                     const res = await axiosPublic.post('/users', userInfo);
                     return res.data;
              },
              onSuccess: () => {
                     toast.success('Profile Updated Successful');
              },
              onError: (error) => {
                     toast.error(error.message);
              }
       });
       return { saveUser, isPending, isSuccess, isError };
};

export default useSaveUsers;