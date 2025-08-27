import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdminStats = () => {

       const axiosSecure = useAxiosSecure();

       const { data: adminStats = [], isPending: adminStatsPending } = useQuery({
              queryKey: ['adminStats'],
              queryFn: async () => {
                     const res = await axiosSecure.get('/adminStats');
                     return res.data;
              }
       })

       return { adminStats, adminStatsPending };
};

export default useAdminStats;