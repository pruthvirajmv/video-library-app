import "./playlist.css";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideoLib } from "../../context";

import VideoCard from "../Home/VideoCard";

export function Playlist() {
  const { state } = useVideoLib();
  const listName = useParams();
  let playlist = state.playlist.find((list) => list.name === listName.list).videos


  useEffect(() => {
    document.title = "Video Lib | Playlist";
  }, []);

  return (
    <>
      <h2 className="txt-white playlist-head">{listName.list}</h2>
      <div className="video-display-playlistpage">
        {playlist.length > 0 ? (
          playlist.map((video) => (
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
