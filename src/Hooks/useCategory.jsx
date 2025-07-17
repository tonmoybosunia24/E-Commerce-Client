import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {

    const axiosPublic = useAxiosPublic();
    const { data: categories = [], isPending: categoriesLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories')
            return res.data
        }
    })

    return [categories, categoriesLoading]
};

export default useCategory;