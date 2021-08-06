import "../../styles.css";
import "./home.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VideoCard from "./VideoCard";
import { useVideoLib } from "../../context";
import VideoSearch from "./VideoSearch";

export function Home() {
   const { videoState } = useVideoLib();
   const [searchInput, setSearchInput] = useState("");

   const videosFromContext = videoState.videos;

   function searchedVideos(videos, key) {
      return key !== ""
         ? videos.filter(({ name }) => name.toUpperCase().includes(key.toUpperCase()))
         : videos;
   }

   const displayVideos = searchedVideos(videosFromContext, searchInput);

   useEffect(() => {
      document.title = "Video Lib | Home";
   }, []);

   return (
      <>
         <VideoSearch searchInput={searchInput} setSearchInput={setSearchInput} />
         {displayVideos.length === 0 && <p>No video found</p>}
         <div className="video-display-homepage">
            {displayVideos.map((video) => (
               <VideoCard key={video.videoId} video={video} />
            ))}
         </div>
      </>
   );
}
