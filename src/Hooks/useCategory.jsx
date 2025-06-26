import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {

       const axiosPublic = useAxiosPublic();
       const [categories, setCategories] = useState([]);

       useEffect(() => {
               axiosPublic.get('/categories')
                   .then(res => {
                       setCategories(res.data);
                   })
                   .catch(error => {
                       console.log('Failed To Fetch Categories', error);
                   })
           }, [])

       return [categories]
};

export default useCategory;