import React from "react";

import "../../styles.css";
import AddToPlaylist from "./AddToPlaylistBttn";
import "./homePage.css";
import { LikeBttn } from "./LikeBttn";
import WatchLaterButton from "./WatchLaterBttn";

export default function VideoCard({ video }) {
  return (
    <>
      <div key={video.id} className="card video-card">
        <img clasName="video-image" src={video.imageSrc} alt="video" />
        <div className="video-title">
          <span className="text-gray">{video.name}</span>
          <LikeBttn video={video} />
        </div>

        <div className="action-bttns">
          <AddToPlaylist video={video} />
          <WatchLaterButton video={video} />
        </div>
      </div>
    </>
  );
}
