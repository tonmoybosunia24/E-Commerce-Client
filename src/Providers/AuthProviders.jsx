import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../FireBase/FireBase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

       const [user, setUser] = useState(null);
       const [searchInput, setSearchInput] = useState('');
       const googleProvider = new GoogleAuthProvider();
       const [loading, setLoading] = useState(true);
       const axiosPublic = useAxiosPublic();

       // Create User Register Context
       const CreateUser = (email, password) => {
              setLoading(true);
              return createUserWithEmailAndPassword(auth, email, password)
       }
       // Create Verification Email Context
       const verificationEmail = () => {
              setLoading(false);
              return sendEmailVerification(auth.currentUser)
       }
       // Create User Login Context
       const LoginUser = (email, password) => {
              setLoading(true);
              return signInWithEmailAndPassword(auth, email, password)
       }
       // Create Password Reset Context
       const resetPassword = (email) => {
              setLoading(true);
              return sendPasswordResetEmail(auth, email)
       }
       // Create Google login Context
       const googleLogin = () => {
              setLoading(true);
              return signInWithPopup(auth, googleProvider)
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
                     if (currentUser) {
                            // Get The Users Email
                            const userEmail = { email: currentUser.email }
                            // Get Token And Store It In LocalStorage
                            axiosPublic.post('/jwt', userEmail)
                                   .then(res => {
                                          if (res.data.token) {
                                                 localStorage.setItem('Access-Token', res.data.token);
                                                 setLoading(false);
                                          }
                                   })
                     }
                     else {
                            localStorage.removeItem('Access-Token');
                            setLoading(false);
                     }
              })
              return () => {
                     return unSubscribe();
              }
       }, []);

       const AuthValue = { user, setUser, searchInput, setSearchInput, loading, setLoading, CreateUser, verificationEmail, LoginUser, resetPassword, googleLogin, Logout };

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;