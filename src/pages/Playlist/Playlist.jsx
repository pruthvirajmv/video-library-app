import "./playlist.css";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideoLib } from "../../context";

import VideoCard from "../Home/VideoCard";

export function Playlist() {
  const { state } = useVideoLib();
  const listName = useParams();
  let playlist = [];

  if (listName.list !== "watchLater" && listName.list !== "liked") {
    const selectedList = state.playlist.find((list) => {
      return list.name === listName.list;
    });
    playlist = selectedList.videosAdded;
  } else {
    playlist = state[listName.list];
  }

  useEffect(() => {
    document.title = "Video Lib | Playlist";
  }, []);

  return (
    <>
      <h2 className="txt-white playlist-head">{listName.list}</h2>
      <div className="video-display-playlistpage">
        {playlist.length > 0 ? (
          playlist.map((videoId) => (
            <div key={videoId}>
              <VideoCard
                video={state.videos.find(({ id }) => id === videoId)}
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
