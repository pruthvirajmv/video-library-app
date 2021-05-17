import axios from "axios";

import {backendAPI} from "./index";


export const addNewUser = async (name, email, password, authDispatch, setIsLoading) => {
    try {
        setIsLoading(true);
        const {status, data:{addedUser} } = await axios({
            method: "POST",
            url: `${backendAPI.baseURI}/user`,
            data: { username: name ,email: email, password: password }
        });
        if(status === 200){
            authDispatch({type: "LOAD_USER", payload: addedUser})
            localStorage?.setItem("loginSession", JSON.stringify({ _id: addedUser._id, isUserLoggedIn: true }))
        }
    }
    catch(err){
        console.error(err.response);
    }
    finally{
        setIsLoading(false);
    }
}