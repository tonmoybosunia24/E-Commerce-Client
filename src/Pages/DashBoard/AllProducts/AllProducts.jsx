import { Helmet } from "react-helmet-async";
import AdminSectionTitle from "../../../Components/AdminSectionTitle/AdminSectionTitle";

const AllProducts = () => {
  return (
    <div>
      <Helmet><title>E-Commerce | All Products</title></Helmet>
      <AdminSectionTitle SubHeading='-------- Manage Your Store --------' Heading='All Available Products'></AdminSectionTitle>
    </div>
  );
};

export default AllProducts;