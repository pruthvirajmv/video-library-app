import "../../styles.css";
import "./home.css";

import React, { useState } from "react";

import VideoCard from "./VideoCard";
import useVideoLib from "../../context/videos-context";
import VideoSearch from "./VideoSearch";
import FloatingActionBttn from "../../utils/FloatingActionBttn";

export default function HomePage() {
  const { state } = useVideoLib();
  const [searchInput, setSearchInput] = useState("");

  const videosFromContext = state.videos;

  function searchedVideos(videos, key) {
    return key !== ""
      ? videos.filter(({ name }) =>
          name.toUpperCase().includes(key.toUpperCase())
        )
      : videos;
  }

  const displayVideos = searchedVideos(videosFromContext, searchInput);
  console.log(searchInput);

  return (
    <div>
      <VideoSearch setSearchInput={setSearchInput} />
      <div className="video-display-homepage">
        {displayVideos.map((video) => (
          <div key={video.id}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
      <FloatingActionBttn />
    </div>
  );
}
