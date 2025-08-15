import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUpdateRole = () => {

       const axiosSecure = useAxiosSecure();

       const { mutate: updateRole, isPending: updateRoleLoading } = useMutation({
              mutationFn: async ({ id, role }) => {
                     const res = await axiosSecure.patch(`/users/${id}`, { role });
                     return res.data;
              }
       })

       return { updateRole, updateRoleLoading }
};

export default useUpdateRole;