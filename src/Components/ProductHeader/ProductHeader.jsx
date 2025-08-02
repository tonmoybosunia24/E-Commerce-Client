import { Link, useLocation, useParams } from "react-router-dom";

const ProductHeader = ({ productTitle }) => {

  const location = useLocation();
  const { id } = useParams();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <section>
      <div className="bg-gray-100 px-5 md:px-10 lg:px-20 py-5 md:py-6 lg:py-7 text-sm text-gray-700">
        {/* -------------------Navlinks------------------ */}
        <nav className="flex gap-2 items-center flex-wrap">
          <Link to="/" className="hover:underline">Home</Link>
          {/* ---------------Create BreadCrumb For Each Links------------- */}
          {pathnames.map((name, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;
            if (name.toLowerCase() === 'productdetails') {
              return (<span key={routeTo} className="flex items-center gap-2"><span>/</span><span>Product Details</span></span>);
            }
            return (
              <span key={routeTo} className="flex items-center gap-2">
                <span>/</span>
                {isLast ? (name === id && productTitle ? (<span>{productTitle}</span>) : (<span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>)) : (<Link to={routeTo} className="hover:underline">{name.charAt(0).toUpperCase() + name.slice(1)}</Link>)}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default ProductHeader;