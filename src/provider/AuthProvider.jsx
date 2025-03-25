import React, { createContext, useEffect, useState } from 'react';
//import { createContext } from 'vm';
import{createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signOut}from "firebase/auth";
import auth from '../firebase/Firebase.config';




export const AuthContext= createContext(null);





const AuthProvider = ({children}) => {
    const[user,setuser]=useState(null);
    const[loading,setLoading]=useState(true);


const createuser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}


const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}


const logout=()=>{
    setLoading(true);
    return signOut(auth);

}




useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    setuser(currentUser);
    console.log('current user',currentUser);
    setLoading(false);
});
return()=>{
    return unsubscribe();
}
},[])




    const authInfo={
        user,
        loading,
        createuser,
        signIn,
        logout
    }
    return (
        <div>
           <AuthContext.Provider value={authInfo} >
            {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;