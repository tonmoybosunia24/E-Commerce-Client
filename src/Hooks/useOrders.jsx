import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = (page, search) => {

       const axiosSecure = useAxiosSecure();
       const limit = 10;

       const { data = {}, isLoading: ordersLoading, refetch } = useQuery({
              queryKey: ['orders', page, search],
              queryFn: async () => {
                     const res = await axiosSecure.get(`/orders?page=${page}&limit=${limit}&search=${search || ''}`);
                     return res.data;
              }
       })

       return { orders: data.orders || [], ordersLoading, refetch, currentPage: data.currentPage || page, totalPages: data.totalPages || 1, limit, totalOrders: data.totalOrders }
};

export default useOrders;