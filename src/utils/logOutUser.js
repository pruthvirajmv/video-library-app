import axios from "axios";
import {backendAPI} from "./index";

export const logOutUser =  (authDispatch, setIsLoading) => {
        setIsLoading(true);
        authDispatch({type: "LOGOUT_USER", payload: []});      
        localStorage?.removeItem("loginSession");
        setIsLoading(false);
    
}