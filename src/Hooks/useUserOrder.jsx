import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUserOrder = (email) => {

       const axiosPublic = useAxiosPublic();

       const { data: userOrder, isLoading: userOrderLoading, refetch } = useQuery({
              queryKey: ['userOrder', email],
              enabled: !!email,
              queryFn: async () => {
                     const res = await axiosPublic.get(`/userOrder?email=${email}`)
                     return res.data;
              }
       })

       return [userOrder, userOrderLoading, refetch]
};

export default useUserOrder;