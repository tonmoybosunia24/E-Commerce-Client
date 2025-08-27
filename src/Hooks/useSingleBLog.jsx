import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleBLog = (id) => {

       const axiosPublic = useAxiosPublic();

       const { data: singleBLogs = [], isLoading: singleBlogsLoading } = useQuery({
              queryKey: ['singleBlog', id],
              enabled: !!id,
              queryFn: async () => {
                     const res = await axiosPublic.get(`/singleBLog/${id}`);
                     return res.data;
              }
       })

       return { singleBLogs, singleBlogsLoading };
};

export default useSingleBLog;