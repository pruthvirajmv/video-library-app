import axios from "axios";
import { toast } from "react-toastify";

import { backendAPI, checkError } from "../index";

export const renamePlaylist = async (playlistName, updatedPlaylistName, dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/playlists/rename`,
         data: { playlistName: playlistName, updatedPlaylistName: updatedPlaylistName },
      });
      if (success) {
         dispatch({
            type: "RENAME_Playlist_HISTORY",
            payload: { playlistName: playlistName, updatedPlaylistName: updatedPlaylistName },
         });
         toast("Playlist Renamed");
      }
   } catch (error) {
      checkError(error);
      toast("Could not Rename playlist");
   } finally {
      setIsLoading(false);
   }
};
