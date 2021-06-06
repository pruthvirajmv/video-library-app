import "./history.css";

import { useEffect } from "react";

import { useVideoLib } from "../../context";
import HistoryVideoCard from "./HistoryVideoCard";
import { clearHistory } from "../../utils";

export function History() {
   const { state, dispatch, setIsLoading } = useVideoLib();

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
            {state.history.length > 0 ? (
               state.history.map((video) => <HistoryVideoCard video={video} />)
            ) : (
               <p>Watched videos will appear here</p>
            )}
         </div>
      </>
   );
}
