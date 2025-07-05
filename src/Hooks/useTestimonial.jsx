import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTestimonial = () => {

       const axiosPublic = useAxiosPublic();
       const { data: reviews = [], isPending: reviewsLoading } = useQuery({
              queryKey: ['reviews'],
              queryFn: async () => {
                     const res = await axiosPublic.get('/reviews');
                     return res.data;
              }
       })

       return [reviews, reviewsLoading]
};

export default useTestimonial;