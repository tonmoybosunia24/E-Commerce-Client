import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (page, sortBy, filter, searchInput) => {

       const limit = 12;
       const axiosPublic = useAxiosPublic();

       const { data = {}, isPending: allProductsLoading } = useQuery({
              queryKey: ['allProducts', page, sortBy, limit, filter, searchInput],
              queryFn: async () => {
                     const stockFilterMap = { 'In Stock': 'in-stock', 'Limited Stock': 'limited-stock', 'Not Available': 'out-of-stock' };
                     const stockFilter = filter.availability.length > 0 ? filter.availability.map(av => stockFilterMap[av]).join(',') : '';
                     const size = filter.size.join(',');
                     const color = encodeURIComponent(filter.color.join(','));
                     const brands = filter.brands.join(',');
                     const minPrice = filter?.price?.[0] ?? 0;
                     const maxPrice = filter?.price?.[1] ?? 99999;
                     const category = encodeURIComponent(filter?.category.join(','))
                     const res = await axiosPublic.get(`/products?page=${page}&sort=${sortBy}&limit=${limit}&stockFilter=${stockFilter}&size=${size}&color=${color}&brands=${brands}&search=${searchInput}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}`);
                     return res.data;
              }
       })
       return { allProducts: data.allProducts || [], totalPages: data.totalPages || 1, currentPage: data.currentPage || page, allProductsLoading, limit, counts: data.counts || {} };
};

export default useProducts;