import { Link } from "react-router";

const NavBar = () => {
       return (
              <div>
                     <h2 className="text-3xl">This Is The Navbar Page</h2>
                     <Link to='/'>Home</Link>
                     <Link to='/contact'>Contact</Link>
                     <Link to='/login'>Login</Link>
                     <Link to='/register'>Register</Link>
              </div>
       );
};

export default NavBar;