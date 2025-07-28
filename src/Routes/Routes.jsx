import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Register/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../Pages/Products/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails/ProductDetails";

const Routes = createBrowserRouter([
       {
              path: '/',
              element: <Root></Root>,
              children: [
                     {
                            path: '/',
                            element: <Home></Home>,
                     },
                     {
                            path: '/products',
                            element: <PrivateRoutes><Products></Products></PrivateRoutes>
                     },
                     {
                            path: '/productDetails/:id',
                            element: <ProductDetails></ProductDetails>
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
]);

export default Routes;