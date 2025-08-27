import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdminChartData = () => {

       const axiosSecure = useAxiosSecure();

       const { data: adminChartData = [], isPending: adminChartDataPending } = useQuery({
              queryKey: ['adminChartData'],
              queryFn: async () => {
                     const res = await axiosSecure.get('/adminChartData');
                     return res.data;
              }
       })

       return { adminChartData, adminChartDataPending };
};

export default useAdminChartData;