import React from "react";
import { useVideoLib, dispatchTypeEnum } from "../context";

export function LikeBttn({ videoId }) {
  const { state, dispatch } = useVideoLib();

  return (
    <>
      <button
        onClick={() => dispatch({ type: dispatchTypeEnum.TOGGLE_LIKE , payload: videoId })}
        class="video-like"
        style={{ color: state.liked.includes(videoId) ? "" : "black" }}
      >
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
      </button>
    </>
  );
}
