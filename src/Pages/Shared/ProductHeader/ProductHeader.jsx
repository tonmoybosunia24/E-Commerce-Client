import { Link, useLocation } from "react-router";

const ProductHeader = () => {

       const location = useLocation();
       const pathnames = location.pathname.split("/").filter(x => x);

       return (
              <section>
                     <div className="bg-[#F6F6F6] px-5 md:px-10 lg:px-20 py-5 md:py-6 lg:py-7 text-sm text-gray-700">
                            <nav className="flex gap-2 items-center">
                                   <Link to="/">Home</Link>
                                   {pathnames.map((name, index) => {
                                          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                                          const isLast = index === pathnames.length - 1;
                                          return (
                                                 <span key={routeTo} className="flex items-center gap-2">
                                                        <span>/</span>
                                                        {isLast ? (
                                                               <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span> // current page, not a link
                                                        ) : (
                                                               <Link to={routeTo} className="hover:underline">
                                                                      {name.charAt(0).toUpperCase() + name.slice(1)}
                                                               </Link>
                                                        )}
                                                 </span>
                                          );
                                   })}
                            </nav>
                     </div>
              </section>
       );
};

export default ProductHeader;