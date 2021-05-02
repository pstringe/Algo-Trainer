import React from 'react';
import { useContext, useEffect, useState } from "react";
import { auth } from '../firebase';
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        })
        return unsubscribe;
    }, []);

    const signup = (email, password) => {
        console.log('in signup', signup)
        auth.createUserWithEmailAndPassword(email, password);
    }

    const value = {
        user,
        signup
    }

    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider> 
    );
}