import "../../styles.css";
import "./video.css";
import "../Home/home.css";

import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

import { AddToPlaylistBttn, LikeBttn, WatchLaterBttn } from "../../utils";
import { useVideoLib, dispatchTypeEnum } from "../../context";

export function Video() {
  const { state, dispatch } = useVideoLib();
  const { videoId } = useParams();

  const displayVideo = state.videos.find((video) => video.id === videoId);

  useEffect(() => {
    dispatch({ type: dispatchTypeEnum.ADD_TO_WATCH_HISTORY, payload: videoId });
    document.title = "Video Lib | Video";
  }, []);

  return (
    <div className="card-videopage">
      <YouTube videoId={displayVideo.id} />
      <div className="card ">
        <div className="video-title">
          <span>{displayVideo.name}</span>
        </div>
        <div className="action-bttns">
          <AddToPlaylistBttn videoId={displayVideo.id} />
          <WatchLaterBttn videoId={displayVideo.id} />
          <LikeBttn videoId={displayVideo.id} />
        </div>
      </div>
    </div>
  );
}
