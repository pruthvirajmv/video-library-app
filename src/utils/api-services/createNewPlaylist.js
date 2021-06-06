import axios from "axios";
import { backendAPI, dispatchTypeEnum, checkError } from "../index";

export const createNewPlaylist = async (playlistName, dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, playlist },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/playlists`,
         data: { playlistName: playlistName },
      });
      if (success) {
         dispatch({ type: dispatchTypeEnum.ADD_NEW_PLAYLIST, payload: playlist });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
