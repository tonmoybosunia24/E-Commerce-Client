import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(false)

       const AuthValue = { user, setUser, loading, setLoading }

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;