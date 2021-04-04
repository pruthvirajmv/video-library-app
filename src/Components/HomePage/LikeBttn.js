import React from "react";
import useVideoLib from "../../context/videos-context";

export function LikeBttn({ video }) {
  const { dispatch } = useVideoLib();

  return (
    <>
      <button
        onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: video })}
        class="video-like"
        style={{ color: video.liked ? "" : "black" }}
      >
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
      </button>
    </>
  );
}
