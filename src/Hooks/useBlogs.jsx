import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogs = () => {

       const axiosPublic = useAxiosPublic()
       const { data: blogs = [], isPending: blogsLoading } = useQuery({
              queryKey: ['blogs'],
              queryFn: async () => {
                     const res = await axiosPublic.get('/blogs');
                     return res.data;
              }
       })

       return [blogs, blogsLoading]
};

export default useBlogs;