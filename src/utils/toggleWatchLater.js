import axios from "axios"
import { backendAPI, checkError } from "./index"

export const toggleWatchLater = async (userId, videoId, dispatch, setIsLoading ) => {
    try{
        setIsLoading(true)
        const { data: {success, playlist}} = await axios({
            method: "POST",
            url: `${backendAPI.baseURI}/playlists/${userId}/togglevideo`,
            data: {playlistName: "Watch Later", video: videoId}
        })
        if(success){
            dispatch({type:"TOGGLE_WATCH_LATER", payload: playlist })
        }

    }catch(error){
        checkError(error)
    }finally{
        setIsLoading(false)
    }
}