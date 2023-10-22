/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../FireBase/Firebase.config";


export const AuthContext = createContext(null);


const auth = getAuth( app );


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)

    const updatedProfile = (name, photo)=>{
        updatedProfile(auth.currentUser,{photoURL:photo, displayName:name})


    }

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);

    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }



    useEffect (()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('usser in the state', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
    
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        updatedProfile,
        logOut

    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;