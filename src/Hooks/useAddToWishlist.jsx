import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useSaveWishlist from "./useSaveWishlist";
import toast from "react-hot-toast";
import useWishlist from "./useWishlist";

const useAddToWishlist = () => {

       const { user } = useContext(AuthContext);
       const { saveWishlist, saveWishlistLoading } = useSaveWishlist();
       const [wishlist, wishlistLoading, refetch] = useWishlist();

       const handleAddToWishlist = (product) => {
              if (user && user?.email) {
                     const alreadyInWishlist = wishlist?.find(wish => wish.productId === product?._id);
                     if (alreadyInWishlist) {
                            toast.error('Product Already In Wishlist')
                            return;
                     }
                     const wishlistInfo = {
                            productId: product?._id,
                            email: user?.email,
                            Images: [product.Images?.[0]],
                            Title: product?.Title,
                            Stock: product?.Stock,
                            Price: product?.OfferPrice > 0 ? product.OfferPrice : product?.Price,
                     }
                     saveWishlist(wishlistInfo, {
                            onSuccess: () => {
                                   toast.success(`${product.Title} Added To Wishlist`);
                                   refetch();
                            },
                            onError: (error) => {
                                   toast.error(error.message);
                            }
                     })
              }
       }

       return handleAddToWishlist;
};

export default useAddToWishlist;