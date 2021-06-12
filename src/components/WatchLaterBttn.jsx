import { useState } from "react";
import { useVideoLib } from "../context";
import { toggleWatchLater } from "../utils";

export function WatchLaterBttn({ videoId }) {
   const { videoState, dispatch, setIsLoading } = useVideoLib();

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
            onClick={() => toggleWatchLater(toggleWatchLaterArgs)}
            className="video-bttn">
            {videoState.watchLater.find((video) => video._id === videoId) ? (
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
