const AdminSectionTitle = ({ SubHeading, Heading, className }) => {
       return (
              <div className={`text-center pb-5 md:pb-7 lg:pb-10 space-y-2 ${className}`}>
                     <h4 className="text-Radical text-sm md:text-base lg:text-base">{SubHeading}</h4>
                     <h2 className="w-10/12 md:w-8/12 lg:w-6/12 font-semibold text-lg md:text-xl lg:text-2xl border-y border-gray-300 mx-auto py-2.5">{Heading}</h2>
              </div>
       );
};

export default AdminSectionTitle;