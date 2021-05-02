import { useContext, useEffect, useState } from "react";
import { auth } from '../firebase';
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    cosnt [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        })
        return unsubscribe;
    }, []);

    const signup = (email, password) => {
        /*
        ** returns a promise
        */
        auth.createUserWithEmailAndPassword(email, password);
    }

   

    const value = {
        user
    }

    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider> 
    );
}