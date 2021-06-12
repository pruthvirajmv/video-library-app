import "../Playlist/playlist.css";

import React, { useEffect } from "react";
import { useVideoLib } from "../../context";

import { HorizontalVideoCard } from "../../components";

export function LikedVideos() {
   const {
      videoState: { liked },
   } = useVideoLib();

   useEffect(() => {
      document.title = "Video Lib | Liked";
   }, []);

   return (
      <>
         <h2 className="txt-white playlist-head">Liked Videos</h2>
         <div className="video-display-playlistpage">
            {liked.length > 0 ? (
               liked.map((video) => (
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
