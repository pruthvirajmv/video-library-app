import "../../styles.css";
import "./home.css";

import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

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

  useEffect(() => {
    document.title = "Video Lib App | Home";
  }, []);

  return (
    <div>
      <VideoSearch setSearchInput={setSearchInput} />
      <div className="homepage-layout">
        <div className="side-nav">
          <div className="list">
          <p><Link to={`/playlists/liked`}>Liked Videos</Link></p>
          <p><Link to={`/playlists/watchLater`}>Watch Later</Link></p>
          <p>All playlists</p>
          <p><Link to={`/history`}>History</Link></p>
          </div>
          
        </div>
        <div className="video-display-homepage">
          {displayVideos.map((video) => (
            <div key={video.id}>
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
      <FloatingActionBttn />
    </div>
  );
}
