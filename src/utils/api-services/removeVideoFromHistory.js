import axios from "axios";
import { toast } from "react-toastify";
import { backendAPI, checkError } from "../index";

export const removeVideoFromHistory = async (videoId, dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/history/remove`,
         data: { video: videoId },
      });
      if (success) {
         dispatch({ type: "REMOVE_VIDEO_FROM_HISTORY", payload: videoId });
         toast("Removed from history");
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
