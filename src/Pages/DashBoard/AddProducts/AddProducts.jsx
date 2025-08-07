import { Helmet } from "react-helmet-async";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";

const AddProducts = () => {
       return (
              <div className="px-5 md:px-10 lg:px-20">
                     <Helmet><title>E-Commerce | Add Products</title></Helmet>
                     <AdminSectionTitle SubHeading='--------Whats New--------' Heading='Add A New Product'></AdminSectionTitle>
                     <h2>This Is The Add Products Page.</h2>
              </div>
       );
};

export default AddProducts;