import axios from "axios";
import { backendAPI, checkError } from "../index";

export const toggleLikedVideo = async (videoId, dispatch, setIsLoading, toast) => {
   try {
      setIsLoading(true);
      const {
         data: { success, likedVideos },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/likedvideos`,
         data: { video: videoId },
      });
      if (success) {
         dispatch({ type: "TOGGLE_LIKE", payload: likedVideos });
         toast("Wow so easy !");
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
