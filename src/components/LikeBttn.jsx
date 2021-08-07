import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useVideoLib } from "../context";
import { toggleLikedVideo } from "../utils";

export function LikeBttn({ videoId }) {
   const navigate = useNavigate();

   const { videoState, dispatch, setIsLoading } = useVideoLib();
   const {
      authState: { isUserLoggedIn },
   } = useAuth();

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
            onClick={
               isUserLoggedIn
                  ? () => toggleLikedVideo(toggleLikedVideoArgs)
                  : () => navigate("/login")
            }
            className="video-like"
            style={{
               color: videoState.liked.find((video) => video._id === videoId) ? "" : "black",
            }}>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
         </button>
      </>
   );
}
