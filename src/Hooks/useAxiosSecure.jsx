import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
       baseURL: 'https://e-commerce-server-zeta-eight.vercel.app'
});
let isInterceptorSet = false;

const useAxiosSecure = () => {

       const navigate = useNavigate();
       const { Logout } = useContext(AuthContext)

       useEffect(() => {
              if (!isInterceptorSet) {
                     // Request Interceptors To Add Authorized Header For Every Secure Call To The Api
                     axiosSecure.interceptors.request.use(function (config) {
                            const token = localStorage.getItem('Access-Token')
                            if (token) {
                                   config.headers.authorization = `Bearer ${token}`
                            }
                            return config;
                     }, function (error) {
                            return Promise.reject(error);
                     })
                     isInterceptorSet = true;
                     // Add a response interceptor
                     axiosSecure.interceptors.response.use(function (response) {
                            return response;
                     }, async function (error) {
                            const status = error.response.status;
                            if (status === 401 || status === 403) {
                                   await Logout();
                                   navigate('/login');
                            }
                            return Promise.reject(error);
                     });
              }
       }, [])

       return axiosSecure;
};

export default useAxiosSecure;