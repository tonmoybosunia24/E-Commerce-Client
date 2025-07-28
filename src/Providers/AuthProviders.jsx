import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../FireBase/FireBase.config";
import { NavLink } from "react-router";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

       const [user, setUser] = useState(null);
       console.log('User Coming From Context APi', user);
       const [searchInput, setSearchInput] = useState('');
       const [loading, setLoading] = useState(true);

       // Create User Register Context
       const CreateUser = (email, password) => {
              setLoading(true);
              return createUserWithEmailAndPassword(auth, email, password)
       }
       // Create User Login Context
       const LoginUser = (email, password) => {
              setLoading(true);
              return signInWithEmailAndPassword(auth, email, password)
       }
       // Create User Logout Context
       const Logout = () => {
              setLoading(true);
              return signOut(auth)
       }
       // Create User Authentication state
       useEffect(() => {
              const unSubscribe = onAuthStateChanged(auth, currentUser => {
                     setUser(currentUser);
                     setLoading(false);
              })
              return () => {
                     return unSubscribe();
              }
       }, []);

       const Links = <>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold' : 'text-black'}`} to='/'>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold' : 'text-black'}`} to='/products'>Products</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold' : 'text-black'}`} to='/register'>Register</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent hover:text-Radical ${isActive ? 'font-bold' : 'text-black'}`} to='/blog'>Blog</NavLink></li>
       </>

       const AuthValue = { user, setUser, searchInput, setSearchInput, loading, setLoading, Links, CreateUser, LoginUser, Logout };

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;