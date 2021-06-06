import axios from "axios";
import { backendAPI, dispatchTypeEnum, checkError } from "../index";

export const toggleVideoInPlaylist = async (playlistName, videoId, dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, playlist },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/playlists/togglevideo`,
         data: { playlistName: playlistName, video: videoId },
      });
      if (success) {
         dispatch({ type: dispatchTypeEnum.TOGGLE_VIDEO_IN_PLAYLIST, payload: playlist });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
