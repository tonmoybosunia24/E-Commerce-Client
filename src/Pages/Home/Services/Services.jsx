import { CiWallet } from "react-icons/ci";
import { PiArrowCircleUpLeftLight, PiGiftLight, PiHeadsetLight, PiTruckTrailerLight } from "react-icons/pi";


const Services = () => {
       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     {/* -----------------Services Container-------------- */}
                     <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-5">
                            {/* -----------------Services Child--------------- */}
                            <div className="flex flex-col items-center">
                                   <PiTruckTrailerLight className="text-5xl transition-transform duration-500 hover:-translate-y-1.5 hover:text-Radical" />
                                   <h3 className="font-semibold md:font-medium">Free Shipping</h3>
                                   <p className="text-gray-600 text-base md:text-xs lg:text-base">For all Orders Over $100</p>
                            </div>
                            <div className="flex flex-col items-center">
                                   <PiArrowCircleUpLeftLight className="text-5xl transition-transform duration-500 hover:-translate-y-1.5 hover:text-Radical" />
                                   <h3 className="font-semibold md:font-medium">30 Days Returns</h3>
                                   <p className="text-gray-600 text-base md:text-xs lg:text-base">For an Exchange Product</p>
                            </div>
                            <div className="flex flex-col items-center">
                                   <CiWallet className="text-5xl transition-transform duration-500 hover:-translate-y-1.5 hover:text-Radical" />
                                   <h3 className="font-semibold md:font-medium">Secured Payment</h3>
                                   <p className="text-gray-600 text-base md:text-xs lg:text-base">Payment Cards Accepted</p>
                            </div>
                            <div className="flex flex-col items-center">
                                   <PiGiftLight className="text-5xl transition-transform duration-500 hover:-translate-y-1.5 hover:text-Radical" />
                                   <h3 className="font-semibold md:font-medium">Special Gifts</h3>
                                   <p className="text-gray-600 text-base md:text-xs lg:text-base">Our First Product Order</p>
                            </div>
                            <div className="flex flex-col items-center">
                                   <PiHeadsetLight className="text-5xl transition-transform duration-500 hover:-translate-y-1.5 hover:text-Radical mb-1" />
                                   <h3 className="font-semibold md:font-medium">Support 24/7</h3>
                                   <p className="text-gray-600 text-base md:text-xs lg:text-base">Contact us Anytime</p>
                            </div>
                     </div>
              </section>
       );
};

export default Services;