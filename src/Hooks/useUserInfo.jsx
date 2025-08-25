import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useUserInfo = () => {

       const axiosPublic = useAxiosPublic();
       const { user } = useContext(AuthContext);

       const { data: userInfo, isLoading: userInfoPending, refetch } = useQuery({
              queryKey: ['userInfo', user?.email],
              enabled: !!user?.email,
              queryFn: async () => {
                     const res = await axiosPublic.get(`/users/${user?.email}`)
                     return res.data;
              }
       })

       return [userInfo, userInfoPending, refetch];
};

export default useUserInfo;