import OfferCardBanner1 from '../../../assets/OfferCardBanner/OfferCardBanner-1.jpg'
import OfferCardBanner2 from '../../../assets/OfferCardBanner/OfferCardBanner-2.jpg'
import OfferCardBanner3 from '../../../assets/OfferCardBanner/OfferCardBanner-3.jpg'

const OfferCardBanner = () => {
       return (
              <section className="px-5 md:px-10 lg:px-20">
                     {/* ------------------SubBanner Parent Container---------------- */}
                     <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
                            {/* ----------------SubBanner Clild Container-------------- */}
                            <div className='relative overflow-hidden group'>
                                   <img className='rounded-md transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={OfferCardBanner1} alt="" />
                                   <div className='absolute top-1/2 -translate-y-1/2 right-5'>
                                          <h2 className='text-xl md:text-sm lg:text-2xl'>S22 Samsung <br />Smartphone</h2>
                                          <p className='text-md md:text-sm lg:text-xl text-Radical font-semibold'>$250.00</p>
                                          <button className='text-md md:text-xs lg:text-lg underline cursor-pointer'>SHOP NOW</button>
                                   </div>
                            </div>
                            <div className='relative overflow-hidden group'>
                                   <img className='rounded-md transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={OfferCardBanner2} alt="" />
                                   <div className='absolute top-1/2 -translate-y-1/2 right-5'>
                                          <h2 className='text-xl md:text-sm lg:text-2xl'>Armchair Mad <br />By shopstic</h2>
                                          <p className='text-md md:text-sm lg:text-xl text-Radical font-semibold'>$190.00</p>
                                          <button className='text-md md:text-xs lg:text-lg underline cursor-pointer'>SHOP NOW</button>
                                   </div>
                            </div>
                            <div className='relative overflow-hidden group'>
                                   <img className='rounded-md transition-transform duration-1000 ease-in-out transform group-hover:scale-120' src={OfferCardBanner3} alt="" />
                                   <div className='absolute top-1/2 -translate-y-1/2 right-5'>
                                          <h2 className='text-xl md:text-sm lg:text-2xl'>Noise Wireless<br />Headphones</h2>
                                          <p className='text-md md:text-sm lg:text-xl text-Radical font-semibold'>$129.00</p>
                                          <button className='text-md md:text-xs lg:text-lg underline cursor-pointer'>SHOP NOW</button>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default OfferCardBanner;