import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
//import { useRadioGroup } from '@material-ui/core';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

// this might be a potential issue later on down the line (host suggested not using 'default').
export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    const value = {
        
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
