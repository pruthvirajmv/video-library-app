import "../../styles.css";
import "./home.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VideoCard from "./VideoCard";
import {useVideoLib} from "../../context";
import VideoSearch from "./VideoSearch";
import { FloatingActionBttn } from "../../utils";

export function Home() {
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

  useEffect(() => {
    document.title = "Video Lib | Home";
  }, []);

  return (
    <>
      <VideoSearch setSearchInput={setSearchInput} />
      <div className="homepage-layout">
        <div className="side-nav">
          <div className="list">
            <p>
              <i class="fa fa-home" aria-hidden="true"></i> &nbsp;
              <Link to={`/playlists/liked`}>Liked Videos</Link>
            </p>
            <p>
              <i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp;
              <Link to={`/playlists/watchLater`}>Watch Later</Link>
            </p>
            <p>
              <i class="fa fa-list" aria-hidden="true"></i> &nbsp;
              <Link to={`/playlists`}>All playlists</Link>
            </p>
            <p>
              <i class="fa fa-history" aria-hidden="true"></i> &nbsp;
              <Link to={`/history`}>History</Link>
            </p>
          </div>
        </div>
        <div className="video-display-homepage">
          {displayVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
      <FloatingActionBttn />
    </>
  );
}
