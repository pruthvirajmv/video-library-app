import "../../styles.css";
import "./video.css";
import "../Home/home.css";

import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

import AddToPlaylistBttn from "../../utils/AddToPlaylistBttn";
import LikeBttn from "../../utils/LikeBttn";
import WatchLaterButton from "../../utils/WatchLaterBttn";
import useVideoLib from "../../context/videos-context";

export default function Video() {
  const { state, dispatch } = useVideoLib();
  const { videoId } = useParams();

  const displayVideo = state.videos.find((video) => video.id === videoId);

  useEffect(() => {
    dispatch({ type: "ADD_TO_WATCH_HISTORY", payload: videoId });
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
          <AddToPlaylistBttn displayVideo={displayVideo.id} />
          <WatchLaterButton displayVideo={displayVideo.id} />
          <LikeBttn displayVideo={displayVideo.id} />
        </div>
      </div>
    </div>
  );
}
