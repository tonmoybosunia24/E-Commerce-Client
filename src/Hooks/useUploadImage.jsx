import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUploadImage = () => {
       const imageHostingKey = import.meta.env.VITE_IMAGE_HOSING_KEY;
       const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
       const axiosPublic = useAxiosPublic();

       const { mutate: uploadImages, isLoading } = useMutation({

              mutationFn: async (imageFiles) => {
                     const uploadPromises = imageFiles.map(async (file) => {
                            const formData = new FormData();
                            formData.append("image", file);
                            const res = await axiosPublic.post(imageHostingApi, formData, {
                                   headers: {
                                          "Content-Type": "multipart/form-data",
                                   },
                            });
                            return res.data.data.url;
                     });
                     const urls = await Promise.all(uploadPromises);
                     return urls;
              },
       });

       return { uploadImages, isLoading };
};

export default useUploadImage;
