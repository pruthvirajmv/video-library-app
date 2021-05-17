import "../../styles.css";
// import "./home.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LikeBttn, WatchLaterBttn } from "../../components";
import { toggleVideoInPlaylist } from "../../utils";
import { useAuth, useVideoLib } from "../../context";
import { RemoveVideoFromPlaylistBttn } from "../../components/RemoveVideoFromPlaylistBttn";

export default function PlaylistVideoCard({ video, playlistName }) {

  const {dispatch, setIsLoading} = useVideoLib();
  const {authState: {userId}} = useAuth();  

  const [showBttns, setShowBttns] = useState(false)

  return (
    <>
      <div key={video.videoId} className="card video-card">
        <div
            onMouseEnter = {() => setShowBttns(true)}
            onMouseLeave = {() => setShowBttns(false)}
        >
          <Link to={`/${video.videoId}`}>
            <img 
            className="video-image" src={video.image} alt="video" />
          </Link>
            { showBttns && <div className="action-bttns">
            <RemoveVideoFromPlaylistBttn videoId={video._id} playlistName={playlistName} />
            <WatchLaterBttn videoId={video._id} />
          </div>}
          
        </div>
        <div className="video-details">
          <div className="video-title">
          <img className="avatar avatar-small" src={video.avatar}/>
          <div>
            <Link to={`/${video.videoId}`}>
              <span className="video-name" >{video.name}</span>
            </Link>
            </div>
            <LikeBttn videoId={video._id} />
          </div>
        </div>
      </div>
    </>
  );
}
