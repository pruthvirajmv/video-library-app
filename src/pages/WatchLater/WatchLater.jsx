import "../Playlist/playlist.css";

import React, { useEffect } from "react";
import { useVideoLib } from "../../context";

import VideoCard from "../Home/VideoCard";

export function WatchLater() {
  const { state:{watchLater} } = useVideoLib();

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
