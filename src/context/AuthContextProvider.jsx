import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();



const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (newUser) => {
            setLoading(false)
            setUser(newUser)
        })

        return () => {
            unsubscribe();
        }
    })

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logged out", { style: { borderRadius: '10px', background: '#333', color: '#fff', }, })
            })
            .catch((error) => {
                // An error happened.
               toast.error("Error Logging out : "+error.message, { style: { borderRadius: '10px', background: '#333', color: '#fff', }, })
            });
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, googleSignin, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;