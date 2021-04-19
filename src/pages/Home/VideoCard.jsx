import "../../styles.css";
import "./home.css";

import React from "react";
import { Link } from "react-router-dom";

import { AddToPlaylistBttn, LikeBttn, WatchLaterBttn } from "../../utils";

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
            <AddToPlaylistBttn videoId={video.id} />
            <WatchLaterBttn videoId={video.id} />
          </div>
        </div>
      </div>
    </>
  );
}
