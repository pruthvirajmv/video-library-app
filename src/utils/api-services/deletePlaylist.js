import axios from "axios";
import { toast } from "react-toastify";
import { backendAPI, dispatchTypeEnum, checkError } from "../index";

export const deletePlaylist = async (playlistName, dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/playlists/remove`,
         data: { playlistName: playlistName },
      });
      if (success) {
         dispatch({ type: dispatchTypeEnum.DELETE_PLAYLIST, payload: playlistName });
         toast("Playslist deleted");
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
