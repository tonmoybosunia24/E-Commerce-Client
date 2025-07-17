import OfferCardBanner1 from '../../../assets/OfferCardBanner/OfferCardBanner-1.jpg'
import OfferCardBanner2 from '../../../assets/OfferCardBanner/OfferCardBanner-2.jpg'
import OfferCardBanner3 from '../../../assets/OfferCardBanner/OfferCardBanner-3.jpg'

const OfferCardBanner = () => {
       return (
              <section className="px-5 md:px-10 lg:px-20">
                     {/* ------------------SubBanner Parent Container---------------- */}
                     <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
                            {/* ----------------SubBanner Clild Container-------------- */}
                            <div className='relative overflow-hidden rounded-md group'>
                                   <img className='transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={OfferCardBanner1} alt="" />
                                   <div className='absolute top-1/2 -translate-y-1/2 right-5'>
                                          <h2 className='font-semibold text-lg md:text-xs lg:text-xl'>S22 Samsung <br />Smartphone</h2>
                                          <p className='text-md md:text-sm lg:text-xl text-Radical font-bold'>$250.00</p>
                                          <button className='font-semibold text-sm md:text-xs lg:text-base underline cursor-pointer'>SHOP NOW</button>
                                   </div>
                            </div>
                            <div className='relative overflow-hidden rounded-md group'>
                                   <img className='transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={OfferCardBanner2} alt="" />
                                   <div className='absolute top-1/2 -translate-y-1/2 right-5'>
                                          <h2 className='font-semibold text-lg md:text-xs lg:text-xl'>Armchair Mad <br />By shopstic</h2>
                                          <p className='text-md md:text-sm lg:text-xl text-Radical font-bold'>$190.00</p>
                                          <button className='font-semibold text-sm md:text-xs lg:text-base underline cursor-pointer'>SHOP NOW</button>
                                   </div>
                            </div>
                            <div className='relative overflow-hidden rounded-md group'>
                                   <img className='transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={OfferCardBanner3} alt="" />
                                   <div className='absolute top-1/2 -translate-y-1/2 right-5'>
                                          <h2 className='font-semibold text-lg md:text-xs lg:text-xl'>Noise Wireless<br />Headphones</h2>
                                          <p className='text-md md:text-sm lg:text-xl text-Radical font-bold'>$129.00</p>
                                          <button className='font-semibold text-sm md:text-xs lg:text-base underline cursor-pointer'>SHOP NOW</button>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default OfferCardBanner;