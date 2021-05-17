import axios from "axios"
import { backendAPI, checkError } from "./index"

export const removeVideoFromHistory = async (userId, videoId, dispatch, setIsLoading ) => {
    try{
        setIsLoading(true)
        const { data: {success, history}} = await axios({
            method: "POST", 
            url: `${backendAPI.baseURI}/history/${userId}/remove`,
            data: {video: videoId}
         });
        if(success){
            dispatch({type:"REMOVE_VIDEO_FROM_HISTORY", payload: videoId})
        }

    }catch(error){
        checkError(error)
    }finally{
        setIsLoading(false)
    }
}