import { useVideoLib } from "../context";
import { removeVideoFromHistory } from "../utils";

export function RemoveVideoFromHistoryBttn({ videoId }) {
   const { dispatch, setIsLoading } = useVideoLib();

   return (
      <div
         onClick={() => removeVideoFromHistory(videoId, dispatch, setIsLoading)}
         className="video-bttn">
         <i className="fa fa-times" aria-hidden="true"></i>
      </div>
   );
}
