import axios from "axios";
import { toast } from "react-toastify";
import { ToastWithUndoBttn } from "../../components";
import { backendAPI, dispatchTypeEnum, checkError } from "../index";

export const toggleVideoInPlaylist = async (params) => {
   const { playlistName, videoId, dispatch, setIsLoading, videosList } = params;
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
         toast(
            <ToastWithUndoBttn
               undoFunction={toggleVideoInPlaylist}
               undoParams={params}
               currentList={videosList}
               updatedList={playlist.videos}
               listName={playlistName}
            />
         );
         dispatch({ type: dispatchTypeEnum.TOGGLE_VIDEO_IN_PLAYLIST, payload: playlist });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
