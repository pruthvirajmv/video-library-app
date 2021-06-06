import React from "react";
import { toast } from "react-toastify";
import { useVideoLib } from "../context";
import { toggleLikedVideo } from "../utils";

export function LikeBttn({ videoId }) {
   const { state, dispatch, setIsLoading } = useVideoLib();

   return (
      <>
         <button
            onClick={() => toggleLikedVideo(videoId, dispatch, setIsLoading, toast)}
            className="video-like"
            style={{
               color: state.liked.find((video) => video._id === videoId) ? "" : "black",
            }}>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
         </button>
      </>
   );
}
