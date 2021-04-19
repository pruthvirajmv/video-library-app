import "../../styles.css";
import "./home.css";

import React from "react";
import { Link } from "react-router-dom";

import AddToPlaylist from "../../utils/AddToPlaylistBttn";
import LikeBttn from "../../utils/LikeBttn";
import WatchLaterButton from "../../utils/WatchLaterBttn";

export default function VideoCard({ video }) {
  return (
    <>
      <div key={video.id} className="card video-card">
        <Link to={`/${video.id}`}>
          <img className="video-image" src={video.imageSrc} alt="video" />
        </Link>
        <div className="video-details">
          <div className="video-title">
            <Link to={`/${video.id}`}>
              <span>{video.name}</span>
            </Link>
            <LikeBttn videoId={video.id} />
          </div>

          <div className="action-bttns">
            <AddToPlaylist videoId={video.id} />
            <WatchLaterButton videoId={video.id} />
          </div>
        </div>
      </div>
    </>
  );
}
