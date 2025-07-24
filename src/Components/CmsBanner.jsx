const CmsBanner = ({ cmsBannerImg1, cmsBannerImg2, offerTitle1, offerTitle2, mainTitle1, mainTitle2 }) => {
       return (
              <section className="px-5 md:px-10 lg:px-20">
                     {/* ---------------Cms-Banner Container------------- */}
                     <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                            {/* -------------Cms-Banner Parent----------- */}
                            <div className="relative overflow-hidden rounded-md group">
                                   <img className="transition-transform duration-1000 ease-in-out transform group-hover:scale-120" src={cmsBannerImg1} alt="" />
                                   <div className="absolute top-1/2 transform -translate-y-1/2 left-5 lg:left-10 lg:space-y-1.5">
                                          <p className="font-medium text-sm lg:text-xl">{offerTitle1}</p>
                                          <h2 className="font-semibold text-base lg:text-3xl">{mainTitle1}</h2>
                                          <button className="px-3 py-1 lg:px-6 lg:py-2 bg-Radical hover:bg-black font-semibold text-white text-xs lg:text-base rounded-sm">Shop Now</button>
                                   </div>
                            </div>
                            {/* -------------Cms-Banner Parent----------- */}
                            <div className="relative overflow-hidden rounded-md group">
                                   <img className="transition-transform duration-1000 ease-in-out transform group-hover:scale-120" src={cmsBannerImg2} alt="" />
                                   <div className="absolute top-1/2 transform -translate-y-1/2 left-5 lg:left-10 lg:space-y-1.5">
                                          <p className="font-medium text-sm lg:text-xl">{offerTitle2}</p>
                                          <h2 className="font-semibold text-base lg:text-3xl">{mainTitle2}</h2>
                                          <button className="px-3 py-1 lg:px-6 lg:py-2 bg-Radical hover:bg-black font-semibold text-white text-xs lg:text-base rounded-sm">Shop Now</button>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default CmsBanner;