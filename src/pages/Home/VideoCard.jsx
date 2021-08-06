import "../../styles.css";
import "./home.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AddToPlaylistBttn, LikeBttn, WatchLaterBttn } from "../../components";

export default function VideoCard({ video }) {
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
      <>
         <div key={video.videoId} className="card video-card">
            <div onMouseEnter={() => setShowBttns(true)} onMouseLeave={() => setShowBttns(false)}>
               <Link to={`/${video.videoId}`}>
                  <img className="video-image" src={video.image} alt="video" />
               </Link>
               {showBttns && (
                  <div className="action-bttns">
                     <AddToPlaylistBttn videoId={video._id} />
                     <WatchLaterBttn videoId={video._id} />
                  </div>
               )}
            </div>
            <div className="video-details">
               <div className="video-title">
                  <img className="avatar avatar-small" src={video.avatar} />
                  <div>
                     <Link to={`/${video.videoId}`}>
                        <span className="video-name">{video.name}</span>
                     </Link>
                  </div>
                  <LikeBttn videoId={video._id} />
               </div>
            </div>
         </div>
      </>
   );
}
