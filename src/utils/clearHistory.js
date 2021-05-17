import axios from "axios"
import { backendAPI, checkError } from "./index"

export const clearHistory = async (userId, dispatch, setIsLoading ) => {
    try{
        setIsLoading(true)
        const { data: {success, history}} = await axios.get(`${backendAPI.baseURI}/history/${userId}/clear`);
        if(success){
            dispatch({type:"CLEAR_HISTORY"})
        }

    }catch(error){
        checkError(error)
    }finally{
        setIsLoading(false)
    }
}