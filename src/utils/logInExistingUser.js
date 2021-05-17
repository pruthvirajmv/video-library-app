import axios from "axios";
import {backendAPI} from "./index";
import {checkError} from "./checkError";

export const logInExistingUser = async (name, password, dispatch, authDispatch, setIsLoading, setErrorMsg, navigateTo, state) => {
    try {
        setIsLoading(true);
        const {status, data:{user} } = await axios({
            method: "POST",
            url: `${backendAPI.baseURI}/user/login`,
            data: { username: name , password: password }
        });
        if(status === 200){
            authDispatch({type: "LOAD_USER", payload: user});      
            localStorage?.setItem("loginSession", JSON.stringify({ _id: user._id, isUserLoggedIn: true }));
            navigateTo(state?.form ? state : "/")
        }   
    }
    catch(error){
        checkError(error)
        return setErrorMsg(error.response.data.message);
    }
    finally{
        setIsLoading(false);
    }
}