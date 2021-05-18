import { useAuth, useVideoLib } from "../context";
import { toggleVideoInPlaylist } from "../utils";

export function RemoveVideoFromPlaylistBttn({ playlistName, videoId }) {
  const { dispatch, setIsLoading } = useVideoLib();
  const {
    authState: { userId }
  } = useAuth();

  return (
    <div
      onClick={() =>
        toggleVideoInPlaylist(
          userId,
          playlistName,
          videoId,
          dispatch,
          setIsLoading
        )
      }
      className="video-bttn"
    >
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>
  );
}
