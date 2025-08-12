import useWishlist from "../../Hooks/useWishlist";

const AddToWishlist = () => {

       const [wishlist, wishlistLoading, refetch] = useWishlist();

       return (
              <div>
                     <h2>This Is The Add Wishlist Page {wishlist.length}</h2>
              </div>
       );
};

export default AddToWishlist;