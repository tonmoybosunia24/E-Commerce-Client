import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (page, sortBy, filter, searchInput) => {

       const limit = 12;
       const axiosPublic = useAxiosPublic()
       const { data = {}, isPending: allProductsLoading } = useQuery({
              queryKey: ['allProducts', page, sortBy, limit, filter, searchInput],
              queryFn: async () => {
                     const availability = filter.availability.join(',');
                     const size = filter.size.join(',');
                     const color = encodeURIComponent(filter.color.join(','));
                     const brands = filter.brands.join(',');
                     const minPrice = filter?.price?.[0] ?? 0;
                     const maxPrice = filter?.price?.[1] ?? 99999;
                     const res = await axiosPublic.get(`/allProducts?page=${page}&sort=${sortBy}&limit=${limit}&availability=${availability}&size=${size}&color=${color}&brands=${brands}&search=${searchInput}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
                     return res.data;
              }
       })
       return { allProducts: data.allProducts || [], totalPages: data.totalPages || 1, currentPage: data.currentPage || page, allProductsLoading, limit, counts: data.counts || {} };
};

export default useProducts;