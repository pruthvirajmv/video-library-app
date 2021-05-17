import axios from "axios"
import { backendAPI, checkError } from "./index"

export const addVideoToHistory = async (userId, videoId, dispatch, setIsLoading ) => {
    try{
        setIsLoading(true)
        const { data: {success, history}} = await axios({
            method: "POST", 
            url: `${backendAPI.baseURI}/history/${userId}`,
            data: {video: videoId}
         });
        if(success){
            dispatch({type:"ADD_TO_WATCH_HISTORY", payload: history})
        }

    }catch(error){
        checkError(error)
    }finally{
        setIsLoading(false)
    }
}