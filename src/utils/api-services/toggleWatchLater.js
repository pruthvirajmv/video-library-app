import axios from "axios";
import { backendAPI, checkError } from "../index";

export const toggleWatchLater = async (videoId, dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, playlist },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/playlists/togglevideo`,
         data: { playlistName: "Watch Later", video: videoId },
      });
      if (success) {
         dispatch({ type: "TOGGLE_WATCH_LATER", payload: playlist });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
