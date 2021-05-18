import { useState } from "react";
import { useAuth, useVideoLib } from "../context";
import { toggleWatchLater } from "../utils";

export function WatchLaterBttn({ videoId }) {
  const { state, dispatch, setIsLoading } = useVideoLib();
  const {
    authState: { userId }
  } = useAuth();

  const [showText, setShowText] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        onClick={() =>
          toggleWatchLater(userId, videoId, dispatch, setIsLoading)
        }
        className="video-bttn"
      >
        {state.watchLater.find((video) => video._id === videoId) ? (
          <div>
            {showText && <span>Added </span>}
            <i className="fa fa-check-circle fa-lg" aria-hidden="true"></i>
          </div>
        ) : (
          <div>
            {showText && <span>Watchlater </span>}
            <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
          </div>
        )}
      </div>
    </>
  );
}
