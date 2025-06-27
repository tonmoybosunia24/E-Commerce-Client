import offerBanner from '../../../assets/Offer-Banner/Offer-Banner.jpg'

const OfferBanner = () => {
       return (
              <section className='px-5 md:px-10 lg:px-20 mb-5 md:mb-7 lg:mb-10'>
                     <div className='relative rounded-md group overflow-hidden'>
                            <img src={offerBanner} className='transition-transform duration-1200 ease-in-out transform group-hover:scale-110' alt="" />
                            <div className='flex items-center gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                                   <h2 className='lg:text-5xl'>Watch</h2>
                                   <div className='hidden lg:block'>
                                          <p>M6 Smart Band 2.3 – Fitness Band</p>
                                          <p>Men’s and Women’s Health Tracking, Red Strap</p>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default OfferBanner;