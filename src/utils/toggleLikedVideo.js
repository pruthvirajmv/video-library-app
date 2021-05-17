import axios from "axios"
import { backendAPI, checkError } from "./index"

export const toggleLikedVideo = async (userId, videoId, dispatch, setIsLoading ) => {
    try{
        setIsLoading(true)
        const { data: {success, likedVideos}} = await axios({
           method: "POST", 
           url: `${backendAPI.baseURI}/likedvideos/${userId}`,
           data: {video: videoId}
        });
        if(success){
            dispatch({type:"TOGGLE_LIKE", payload: likedVideos })
        }

    }catch(error){
        checkError(error)
    }finally{
        setIsLoading(false)
    }
}