import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router";
import useSaveCarts from "./useSaveCarts";
import useCarts from "./useCarts";
import { toast } from "react-toastify";
import useUpdateQuantity from "./useUpdateQuantity";

const useAddToCarts = () => {

       const { user } = useContext(AuthContext);
       const location = useLocation();
       const navigate = useNavigate();
       const { saveCart } = useSaveCarts();
       const [carts, cartsLoading, refetch] = useCarts();
       const { updateQuantity } = useUpdateQuantity();

       const handleAddToCart = (product, value) => {
              if (user && user?.email) {
                     const alreadyInCarts = carts?.find(cart => cart.productId === product?._id);
                     if (alreadyInCarts) {
                            const newQuantity = alreadyInCarts.Quantity + value;
                            updateQuantity({
                                   id: alreadyInCarts._id,
                                   quantity: newQuantity,
                            }, {
                                   onSuccess: () => {
                                          refetch();
                                   }
                            });
                            toast.success(`${product.Title} Added To Cart`);
                            return;
                     }
                     const cartInfo = {
                            productId: product?._id,
                            email: user?.email,
                            Images: [product.Images?.[0]],
                            Title: product.Title,
                            Quantity: value,
                            Price: product.Price,
                     }
                     saveCart(cartInfo, {
                            onSuccess: () => {
                                   toast.success(`${product.Title} Added To Cart`);
                                   refetch();
                            },
                            onError: (error) => {
                                   toast.error(error.message);
                            }
                     })
              }
              else {
                     navigate("/login", { state: { from: location } });
              }
       }

       return handleAddToCart;
};

export default useAddToCarts;