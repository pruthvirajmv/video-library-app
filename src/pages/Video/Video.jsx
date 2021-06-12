import "../../styles.css";
import "./video.css";
import "../Home/home.css";

import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

import { AddToPlaylistBttn, LikeBttn, WatchLaterBttn } from "../../components";
import { useVideoLib } from "../../context";
import { addVideoToHistory } from "../../utils";

export function Video() {
   const { videoState, dispatch, setIsLoading } = useVideoLib();
   const { videoId } = useParams();

   const displayVideo = videoState.videos.find((video) => video.videoId === videoId);

   useEffect(() => {
      addVideoToHistory(displayVideo._id, dispatch, setIsLoading);
      document.title = "Video Lib | Video";
   }, []);

   return (
      <div className="card-videopage">
         <YouTube videoId={displayVideo.videoId} className={"youtube-video"} />
         <div className="card ">
            <div className="video-title">
               <span>{displayVideo.name}</span>
            </div>
            <div className="sub-details">
               <img className="avatar avatar-small" src={displayVideo.avatar} />
               <span> | {displayVideo.channelName} | </span>
               <span>{displayVideo.views} views</span>
            </div>
            <div className="action-bttns">
               <AddToPlaylistBttn videoId={displayVideo._id} />
               <WatchLaterBttn videoId={displayVideo._id} />
               <LikeBttn videoId={displayVideo._id} />
            </div>
         </div>
      </div>
   );
}
