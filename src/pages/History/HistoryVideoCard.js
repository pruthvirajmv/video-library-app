import "../../styles.css";
import "./history.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import { AddToPlaylistBttn, RemoveVideoFromHistoryBttn, WatchLaterBttn } from "../../components";

export default function HistoryVideoCard({ video }) {

    const [showBttns, setShowBttns] = useState(false)

  return (
    <>
      <div key={video.videoId} className="card history-video-card ">
      <div className="video-image" >
                  <Link to={`/${video.videoId}`}>
        <img className="video-image"
         src={video.image} alt="video" />
        </Link>  
      </div>
        
        <div 
            className="video-details"
            onMouseEnter = {() => setShowBttns(true)}
            onMouseLeave = {() => setShowBttns(false)}
        >
            <div className="video-title">
                    <Link to={`/${video.videoId}`}>
                            <span className="video-name" >{video.name}</span>
                    </Link>
                    <div className="video-sub-title">
                        <img className="avatar avatar-small" src={video.avatar}/>
                        <span>{video.channelName}</span>
                    </div>
            </div>
            { showBttns && <div className="action-bttns">
            <RemoveVideoFromHistoryBttn videoId={video._id}/>
            <AddToPlaylistBttn videoId={video._id} />
            <WatchLaterBttn videoId={video._id} />
        </div>}
        </div>
      </div>
    </>
  );
}
