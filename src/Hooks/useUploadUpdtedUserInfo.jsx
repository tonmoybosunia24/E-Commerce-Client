import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUploadUpdtedUserInfo = () => {

       const axiosPublic = useAxiosPublic();

       const { mutate: updatedUserInfo, isPending: updatedUserInfoLoading } = useMutation({
              mutationFn: async ({ id, updatedUserInfo }) => {
                     const res = await axiosPublic.patch(`/updateUserInfo/${id}`, updatedUserInfo);
                     return res.data;
              }
       })

       return { updatedUserInfo, updatedUserInfoLoading }
};

export default useUploadUpdtedUserInfo;