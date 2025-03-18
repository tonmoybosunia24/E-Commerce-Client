import axios from "axios";
// Creating An Instance
const axiosPublic = axios.create({
       baseURL: 'http://localhost:5000'
})

const useAxiosPublic = () => {
       return axiosPublic /* Return The Instance */
};

export default useAxiosPublic;