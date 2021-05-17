import "../Playlist/playlist.css";

import React, { useEffect } from "react";
import { useVideoLib } from "../../context";

import VideoCard from "../Home/VideoCard";

export function LikedVideos() {
  const { state:{liked} } = useVideoLib();

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
              <VideoCard
                video={video}
              />
            </div>
          ))
        ) : (
          <p> No videos added here</p>
        )}
      </div>
    </>
  );
}
