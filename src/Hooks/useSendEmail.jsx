import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSendEmail = () => {

       const axiosPublic = useAxiosPublic();

       const { mutate: sendEmail, isPending: emailDataLoading } = useMutation({
              mutationFn: async (emailData) => {
                     const res = await axiosPublic.post('/sendEmail', emailData);
                     return res.data
              }
       })

       return { sendEmail, emailDataLoading };
};

export default useSendEmail;