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
  const { state } = useVideoLib();
  const { videoId } = useParams();

  const displayVideo = state.videos.find((video) => video.id === videoId);

  useEffect(() => {
    document.title = "Video Lib App | Video";
  }, []);

  return (
    <>
      <YouTube className="video-videopage" videoId={displayVideo.id} />
      <div className={`card card-videopage `}>
        <div className="video-title">
          <span>{displayVideo.name}</span>
        </div>
        <div className="action-bttns">
          <AddToPlaylistBttn displayVideo={displayVideo.id} />
          <WatchLaterButton displayVideo={displayVideo.id} />
          <LikeBttn displayVideo={displayVideo.id} />
        </div>
      </div>
    </>
  );
}
