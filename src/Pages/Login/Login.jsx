import { useLocation, useNavigate } from "react-router";

const Login = () => {

       const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.form?.pathname || "/";

       return (
              <div>
                     <h2>This Is The Login Page</h2>
              </div>
       );
};

export default Login;