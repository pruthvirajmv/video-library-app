import { useAuth, useVideoLib } from "../context";
import { removeVideoFromHistory } from "../utils/removeVideoFromHistory";

export function RemoveVideoFromHistoryBttn({ videoId }) {
  const { dispatch, setIsLoading } = useVideoLib();
  const {
    authState: { userId }
  } = useAuth();

  return (
    <div
      onClick={() =>
        removeVideoFromHistory(userId, videoId, dispatch, setIsLoading)
      }
      className="video-bttn"
    >
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>
  );
}
