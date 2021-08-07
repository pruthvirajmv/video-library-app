import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useVideoLib } from "../context";
import { toggleWatchLater } from "../utils";

export function WatchLaterBttn({ videoId }) {
   const navigate = useNavigate();

   const { videoState, dispatch, setIsLoading } = useVideoLib();
   const {
      authState: { isUserLoggedIn },
   } = useAuth();

   const [showText, setShowText] = useState(false);

   const toggleWatchLaterArgs = {
      videoId: videoId,
      dispatch: dispatch,
      setIsLoading: setIsLoading,
      watchLaterVideos: videoState.watchLater,
   };

   return (
      <>
         <div
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            onClick={
               isUserLoggedIn
                  ? () => toggleWatchLater(toggleWatchLaterArgs)
                  : () => navigate("/login")
            }
            className="video-bttn">
            {videoState.watchLater.find((video) => video._id === videoId) ? (
               <>
                  {showText && <span>Added</span>}
                  <i className="fa fa-check-circle fa-lg" aria-hidden="true"></i>
               </>
            ) : (
               <>
                  {showText && <span>Watchlater </span>}
                  <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
               </>
            )}
         </div>
      </>
   );
}
