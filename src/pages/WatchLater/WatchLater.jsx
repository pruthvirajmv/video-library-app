import "../Playlist/playlist.css";

import React, { useEffect } from "react";
import { useVideoLib } from "../../context";

import { HorizontalVideoCard } from "../../components";

export function WatchLater() {
   const {
      videoState: { watchLater },
   } = useVideoLib();

   useEffect(() => {
      document.title = "Video Lib | Watchlater";
   }, []);

   return (
      <>
         <h2 className="txt-white playlist-head">Watch Later</h2>
         <div className="video-display-playlistpage">
            {watchLater.length > 0 ? (
               watchLater.map((video) => (
                  <div key={video.videoId}>
                     <HorizontalVideoCard video={video} />
                  </div>
               ))
            ) : (
               <p> No videos added here</p>
            )}
         </div>
      </>
   );
}
