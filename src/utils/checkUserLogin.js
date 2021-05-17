import axios from "axios";
import {backendAPI} from "./backendAPI";
import {checkError} from "./checkError"

export const checkUserLogin = (authDispatch) => {
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
                checkError(error);
            }
    })()
}
}