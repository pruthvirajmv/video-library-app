import React from "react";
import { useAuth, useVideoLib } from "../context";
import { toggleLikedVideo } from "../utils";

export function LikeBttn({ videoId }) {
  const { state, dispatch, setIsLoading } = useVideoLib();
  const {
    authState: { userId }
  } = useAuth();
  return (
    <>
      <button
        onClick={() =>
          toggleLikedVideo(userId, videoId, dispatch, setIsLoading)
        }
        className="video-like"
        style={{
          color: state.liked.find((video) => video._id === videoId)
            ? ""
            : "black"
        }}
      >
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
      </button>
    </>
  );
}
