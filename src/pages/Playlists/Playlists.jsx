import "./playlists.css";

import React, { useEffect } from "react";
import useVideoLib from "../../context/videos-context";
import VideoCard from "../Home/VideoCard";
import { Link } from "react-router-dom";

export default function Playlist() {
  const { state } = useVideoLib();

  const likedVideos = state.liked;
  const watchLaterVideos = state.watchLater;
  const playlist = state.playlist;

  useEffect(() => {
    document.title = "Video Lib App | Playlists";
  }, []);

  return (
    <>
      <div className="video-display-playslistspage">
        <div className="playlist-section">
          <h3 className="txt-white txt-align-left">
            Liked
            <Link to={`/playlists/liked`}>
              <span className="txt-primary text-small"> See All </span>
            </Link>{" "}
          </h3>

          <div className="video-display-playslist">
            {likedVideos.length > 0 ? (
              likedVideos.map((videoId) => (
                <VideoCard
                  video={state.videos.find(({ id }) => id === videoId)}
                />
              ))
            ) : (
              <p> Go Like Some Videos to see here </p>
            )}
          </div>
        </div>

        <div className="playlist-section">
          <h3 className="txt-white txt-align-left">
            Watch later
            <Link to={`/playlists/watchLater`}>
              <span className="txt-primary text-small"> See All </span>
            </Link>
          </h3>

          <div className="video-display-playslist">
            {watchLaterVideos.length > 0 ? (
              watchLaterVideos.map((videoId) => (
                <VideoCard
                  video={state.videos.find(({ id }) => id === videoId)}
                />
              ))
            ) : (
              <p> Go mark some videos to see here </p>
            )}
          </div>
        </div>

        <div className="playlist-section">
          <h3 className="txt-white txt-align-left">Playlists</h3>
          {playlist.length > 0 ? (
            playlist.map(({ name, videosAdded }) => (
              <div>
                <h3 className="txt-primary txt-align-left">
                  {name}
                  <Link to={`/playlists/${name}`}>
                    {" "}
                    <span className="txt-white text-small"> See All </span>{" "}
                  </Link>
                </h3>
                <div className="video-display-playslist">
                  {videosAdded.map((videoId) => (
                    <VideoCard
                      styles={{ width: "10rem" }}
                      video={state.videos.find(({ id }) => id === videoId)}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p> Go make your playlists</p>
          )}
        </div>
      </div>
    </>
  );
}
