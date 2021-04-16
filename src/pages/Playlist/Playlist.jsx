import "./playlist.css";

import React from "react";
import { useParams } from "react-router-dom";
import useVideoLib from "../../context/videos-context";

import VideoCard from "../Home/VideoCard";

export default function Playlist() {
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

  console.log(listName, playlist);

  return (
    <>
      <h2 className="txt-white playlist-head">{listName.list}</h2>
      <div className="video-display-playlistpage">
        {playlist.length > 0 ? (
          playlist.map((videoId) => (
            <div>
              <VideoCard
                styles={{ width: "10rem" }}
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
