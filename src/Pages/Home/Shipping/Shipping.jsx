import { FaShippingFast } from "react-icons/fa";

const Shipping = () => {
       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     {/* ----------------Shipping Info Container-------------- */}
                     <div className="flex flex-col lg:flex-row justify-around items-center border-2 border-Radical py-5 rounded-md space-y-0.5 md:space-y-2 lg:space-y-0">
                            <div className="flex items-center gap-2 text-3xl font-semibold"><FaShippingFast /><h2>Free Shipping </h2></div>
                            <div className="lg:border-x border-gray-300 px-10 text-center">Free Delivery Now On Your First Order and over $200</div>
                            <div className=" text-3xl font-semibold"><p>- Only $200*</p></div>
                     </div>
              </section>
       );
};

export default Shipping;