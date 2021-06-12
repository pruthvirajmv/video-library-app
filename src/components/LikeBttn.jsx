import React from "react";
import { toast } from "react-toastify";
import { useVideoLib } from "../context";
import { toggleLikedVideo } from "../utils";

export function LikeBttn({ videoId }) {
   const { videoState, dispatch, setIsLoading } = useVideoLib();

   const toggleLikedVideoArgs = {
      videoId: videoId,
      dispatch: dispatch,
      setIsLoading: setIsLoading,
      toast: toast,
      currentLikedVideos: videoState.liked,
   };

   return (
      <>
         <button
            onClick={() => toggleLikedVideo(toggleLikedVideoArgs)}
            className="video-like"
            style={{
               color: videoState.liked.find((video) => video._id === videoId) ? "" : "black",
            }}>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
         </button>
      </>
   );
}
