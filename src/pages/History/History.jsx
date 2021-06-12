import "./history.css";

import { useEffect } from "react";

import { useVideoLib } from "../../context";
import { HorizontalVideoCard } from "../../components";
import { clearHistory } from "../../utils";

export function History() {
   const { videoState, dispatch, setIsLoading } = useVideoLib();

   useEffect(() => {
      document.title = "Video lib | History";
   }, []);

   return (
      <>
         <div className="history-head">
            <h2 className="txt-white">Watch History</h2>
            <button onClick={() => clearHistory(dispatch, setIsLoading)} className="text-small">
               Clear All
            </button>
         </div>
         <div className="video-display-history">
            {videoState.history.length > 0 ? (
               videoState.history.map((video) => (
                  <HorizontalVideoCard video={video} page="History" />
               ))
            ) : (
               <p>Watched videos will appear here</p>
            )}
         </div>
      </>
   );
}
