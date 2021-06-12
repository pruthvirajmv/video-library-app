import { useVideoLib } from "../context";
import { toggleVideoInPlaylist } from "../utils";

export function RemoveVideoFromPlaylistBttn({ playlistName, videoId }) {
   const { videoState, dispatch, setIsLoading } = useVideoLib();

   const playlistVideos = videoState.playlist.find((list) => list.name === playlistName).videos;

   const toggleVideoInPlaylistArgs = {
      playlistName: playlistName,
      videoId: videoId,
      dispatch: dispatch,
      setIsLoading: setIsLoading,
      videosList: playlistVideos,
   };
   return (
      <div onClick={() => toggleVideoInPlaylist(toggleVideoInPlaylistArgs)} className="video-bttn">
         <i className="fa fa-times" aria-hidden="true"></i>
      </div>
   );
}
