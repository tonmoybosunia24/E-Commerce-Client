const AdminSectionTitle = ({ SubHeading, Heading, className }) => {
       return (
              <div className={`text-center py-5 md:py-7 lg:py-10 space-y-2 ${className}`}>
                     <h4 className="text-Radical text-sm md:text-base lg:text-base">{SubHeading}</h4>
                     <h2 className="w-10/12 md:w-6/12 lg:w-4/12 font-semibold text-lg md:text-xl lg:text-2xl border-y border-gray-300 mx-auto py-2.5">{Heading}</h2>
              </div>
       );
};

export default AdminSectionTitle;