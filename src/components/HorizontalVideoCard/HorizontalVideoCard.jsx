import "../../styles.css";
import "./horizontalVideoCard.styles.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AddToPlaylistBttn, RemoveVideoFromHistoryBttn, WatchLaterBttn } from "../../components";
import { RemoveVideoFromPlaylistBttn } from "../RemoveVideoFromPlaylistBttn";

export function HorizontalVideoCard({ video, page }) {
   const [showBttns, setShowBttns] = useState(false);

   const width = window.innerWidth;

   useEffect(() => {
      if (width <= 769) {
         setShowBttns(true);
      } else {
         setShowBttns(false);
      }
   }, [width]);

   return (
      <div key={video.videoId} className="card horizontal-video-card ">
         <div className="video-image">
            <Link to={`/${video.videoId}`}>
               <img className="video-image" src={video.image} alt="video" />
            </Link>
         </div>

         <div
            className="video-details"
            onMouseEnter={() => setShowBttns(true)}
            onMouseLeave={() => setShowBttns(false)}>
            <div className="video-title">
               <Link to={`/${video.videoId}`}>
                  <span className="video-name">{video.name}</span>
               </Link>
               <div className="video-sub-title">
                  <img className="avatar avatar-small" src={video.avatar} />
                  <span>{video.channelName}</span>
               </div>
            </div>
            {showBttns && (
               <div className="action-bttns">
                  {page === "History" && <RemoveVideoFromHistoryBttn videoId={video._id} />}
                  {page !== "History" && (
                     <RemoveVideoFromPlaylistBttn videoId={video._id} playlistName={page} />
                  )}
                  <AddToPlaylistBttn videoId={video._id} />
                  <WatchLaterBttn videoId={video._id} />
               </div>
            )}
         </div>
      </div>
   );
}
