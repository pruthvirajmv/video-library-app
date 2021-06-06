import { useVideoLib } from "../context";
import { toggleVideoInPlaylist } from "../utils";

export function RemoveVideoFromPlaylistBttn({ playlistName, videoId }) {
   const { dispatch, setIsLoading } = useVideoLib();

   return (
      <div
         onClick={() => toggleVideoInPlaylist(playlistName, videoId, dispatch, setIsLoading)}
         className="video-bttn">
         <i className="fa fa-times" aria-hidden="true"></i>
      </div>
   );
}
