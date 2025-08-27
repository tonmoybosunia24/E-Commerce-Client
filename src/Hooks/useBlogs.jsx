import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogs = (limit) => {

       const axiosPublic = useAxiosPublic();

       const { data: blogs = [], isPending: blogsLoading } = useQuery({
              queryKey: ['blogs', limit],
              queryFn: async () => {
                     const res = await axiosPublic.get(`/blogs?limit=${limit}`);
                     return res.data;
              }
       })

       return [blogs.blogs || [], blogsLoading, blogs.totalBlogs || []]
};

export default useBlogs;