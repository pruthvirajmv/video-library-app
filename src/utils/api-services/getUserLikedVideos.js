import axios from "axios";
import { backendAPI, checkError } from "../index";

export const getUserLikedVideos = async (dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, likedVideos },
      } = await axios.get(`${backendAPI.baseURI}/likedvideos`);
      if (success) {
         dispatch({ type: "LOAD_USER_LIKED_VIDEOS", payload: likedVideos });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
