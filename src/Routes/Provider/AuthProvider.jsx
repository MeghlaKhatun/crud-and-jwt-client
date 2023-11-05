import PropTypes from 'prop-types'
import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const provider=new GoogleAuthProvider();
    //create user method
    const createUser=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //Login user
    const signInUser=(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //

    //logOut user
    const signOutUser=()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    //gogole login
    const googleLogIn=()=>{
        setIsLoading(true);
        return signInWithPopup(auth,provider)
    }

    const Info={
        user,
        isLoading,
        createUser,
        signInUser,
        signOutUser,
        googleLogIn,
    }

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
}

export default AuthProvider;