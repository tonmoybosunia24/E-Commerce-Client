import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../FireBase/FireBase.config";
import { NavLink } from "react-router";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

       const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(false);

       const Links = <>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold' : 'text-black'}`} to='/'>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold' : 'text-black'}`} to='/register'>Register</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold' : 'text-black'}`} to='/blog'>Blog</NavLink></li>
       </>

       const AuthValue = { user, setUser, loading, setLoading, Links };

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;