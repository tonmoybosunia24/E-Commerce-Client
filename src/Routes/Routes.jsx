import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoutes from "./PrivateRoutes";

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