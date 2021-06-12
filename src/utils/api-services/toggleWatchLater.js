import axios from "axios";
import { toast } from "react-toastify";
import { ToastWithUndoBttn } from "../../components";
import { backendAPI, checkError } from "../index";

export const toggleWatchLater = async (params) => {
   const { videoId, dispatch, setIsLoading, watchLaterVideos } = params;
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
         toast(
            <ToastWithUndoBttn
               undoFunction={toggleWatchLater}
               undoParams={params}
               currentList={watchLaterVideos}
               updatedList={playlist.videos}
               listName="Watch Later"
            />
         );
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
