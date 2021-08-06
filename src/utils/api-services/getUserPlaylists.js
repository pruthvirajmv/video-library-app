import axios from "axios";
import { backendAPI, checkError } from "../index";

export const getUserPlaylists = async (dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, playlists },
      } = await axios.get(`${backendAPI.baseURI}/playlists`);
      if (success) {
         dispatch({ type: "LOAD_USER_PLAYLISTS", payload: playlists });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
