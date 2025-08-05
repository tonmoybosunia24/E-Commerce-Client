import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Register/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../Pages/Products/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails/ProductDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToCarts from "../Pages/AddToCarts/AddToCarts/AddToCarts";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import AdminRoutes from "./AdminRoutes";

const Routes = createBrowserRouter([
       {
              path: '/',
              element: <Root></Root>,
              errorElement: <ErrorPage></ErrorPage>,
              children: [
                     {
                            path: '/',
                            element: <Home></Home>,
                     },
                     {
                            path: '/products',
                            element: <Products></Products>
                     },
                     {
                            path: '/productDetails/:id',
                            element: <ProductDetails></ProductDetails>
                     },
                     {
                            path: '/addToCarts',
                            element: <PrivateRoutes><AddToCarts></AddToCarts></PrivateRoutes>
                     },
                     {
                            path: '/login',
                            element: <Login></Login>,
                     },
                     {
                            path: '/register',
                            element: <Register></Register>,
                     },
                     {
                            path: '/contactUs',
                            element: <PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>,
                     }
              ],
       },
       {
              path: 'dashboard',
              element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
              children: [
                     {
                            path: 'adminHome',
                            element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
                     },
              ]
       },
]);

export default Routes;