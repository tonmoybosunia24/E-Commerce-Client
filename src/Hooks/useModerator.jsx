import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useModerator = () => {

       const { user, loading } = useContext(AuthContext);
       const axiosSecure = useAxiosSecure();

       const { data: isModerator, isPending: isModeratorLoading } = useQuery({
              queryKey: [user?.email, 'isModerator'],
              enabled: !!user?.email && !loading,
              queryFn: async () => {
                     const res = await axiosSecure.get(`/moderator/${user?.email}`)
                     return res.data.Moderator;
              }
       })

       return [isModerator, isModeratorLoading];
};

export default useModerator;