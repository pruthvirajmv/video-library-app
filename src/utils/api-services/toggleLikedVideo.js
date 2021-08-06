import axios from "axios";
import { ToastWithUndoBttn } from "../../components";
import { backendAPI, checkError } from "../index";

export const toggleLikedVideo = async (params) => {
   const { videoId, dispatch, setIsLoading, toast, currentLikedVideos } = params;

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
         toast(
            <ToastWithUndoBttn
               undoFunction={toggleLikedVideo}
               undoParams={params}
               updatedList={likedVideos}
               currentList={currentLikedVideos}
               listName="Liked Videos"
            />
         );
         dispatch({ type: "TOGGLE_LIKE", payload: likedVideos });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
