import axios from "axios";
// Creating An Instance
const axiosPublic = axios.create({
       baseURL: 'https://e-commerce-server-zeta-eight.vercel.app'
})

const useAxiosPublic = () => {
       return axiosPublic /* Return The Instance */
};

export default useAxiosPublic;