import PropTypes from 'prop-types'
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,  } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    //create user method
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const Info={
        user,
        isLoading,
        createUser
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