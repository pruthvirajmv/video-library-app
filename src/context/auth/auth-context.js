import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { backendAPI } from "../../utils";
import { authReducer } from "./authReducer";

const AuthContext = createContext();

export default function AuthContextProvider({children}){

    const initialState = {
        userId : "",
        userName : "",
        userEmail : "",
        isUserLoggedIn : false
    }

    const [authState, authDispatch ] = useReducer(authReducer, initialState)

    useEffect( () => {
        const loginHistory = JSON.parse(localStorage?.getItem('loginSession'));
      
        if(loginHistory)  {
            loginHistory.isUserLoggedIn && (async () => {
                try{
                    const {data: {success, user}} = await axios(
                        {
                            method: "GET",
                            url: `${backendAPI.baseURI}/user/${loginHistory._id}`
                        }
                    )
                    if(success){
                        authDispatch({type: "LOAD_USER", payload: user})
                    }
                }
                catch(error){
                    if(axios.isAxiosError(error)){
                        const serverError = error;
                        if(serverError && serverError.response){
                            return serverError.response.data;
                        }
                    }
                    console.error(error.message);
                }
        })()
    }
    }, [] )

    return(
        <AuthContext.Provider value = {{ authState, authDispatch}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return( useContext(AuthContext))
}