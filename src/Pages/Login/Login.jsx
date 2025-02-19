import { useLocation } from "react-router";

const Login = () => {

       const location = useLocation()
       const form = location?.state?.from?.pathName || '/';

       return (
              <div>
                     <h2>This Is The Login Page</h2>
              </div>
       );
};

export default Login;