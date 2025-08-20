import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSaveOrderInfo = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: saveOderInfo, isPending: saveOderInfoLoading } = useMutation({
              mutationFn: async (orderInfo) => {
                     const res = await axiosSecure.post('/orders', orderInfo);
                     return res.data;
              }
       })

       return { saveOderInfo, saveOderInfoLoading }
};

export default useSaveOrderInfo;