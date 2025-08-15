import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = (searchInput) => {

       const axiosSecure = useAxiosSecure();

       const { data: users = [], isPending: userLoading, refetch } = useQuery({
              queryKey: ['users', searchInput],
              queryFn: async () => {
                     const res = await axiosSecure.get(`/users?search=${searchInput || ''}`);
                     return res.data;
              }
       })

       return [users, userLoading, refetch];
};

export default useUsers;