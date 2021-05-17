import axios from "axios";

import {backendAPI} from "./index";

export const forgotResetPassword = async (email, password, setErrorMsg, setIsLoading, authDispatch, dispatch, navigateTo) => {
    try{
        setIsLoading(true);
        const {data: {success, user}} = await axios({
            method : "POST",
            url: `${backendAPI.baseURI}/users/resetpassword`,
            headers: { email: email, password: password }
        })
        if(success) {
            authDispatch({type: "LOAD_USER", payload: user});      
            localStorage?.setItem("loginSession", JSON.stringify({ _id: user._id, isUserLoggedIn: user.isUserLoggedIn }));
            dispatch({type: "SHOW_TOAST", payload:"Password Reset Successful"})
            setIsLoading(false);
            navigateTo("/profile");
        }
        
    }catch(err){
        if(err.response.status === 404){
            setErrorMsg("user does not exist");
        }else{
            setErrorMsg("Something went wrong, please try again");
        }
    }finally{
        setIsLoading(false);
    }

}
