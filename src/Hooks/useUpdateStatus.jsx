import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUpdateStatus = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: updateStatus, isPending: updateStatusLoading } = useMutation({
              mutationFn: async ({ id, field, value }) => {
                     const res = await axiosSecure.patch(`/orders/${id}`, { [field]: value })
                     return res.data;
              }
       })

       return { updateStatus, updateStatusLoading }
};

export default useUpdateStatus;