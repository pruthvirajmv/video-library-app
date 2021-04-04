import React from "react";
import useVideoLib from "../../context/videos-context";
import VideoCard from "../HomePage/VideoCard";

export default function Playlist() {
  const { state } = useVideoLib();

  const likedVideos = state.videos.filter((video) => video.liked);

  const watchLaterVideos = state.videos.filter((video) => video.watchLater);

  return (
    <>
      <h1>Welcom to your Playlist</h1>

      <h2>Liked Videos</h2>

      {likedVideos.length > 0 ? (
        likedVideos.map((video) => <VideoCard video={video} />)
      ) : (
        <p> Go Like Some Videos to see here </p>
      )}

      <h2>Watch later Videos</h2>

      {watchLaterVideos.length > 0 ? (
        watchLaterVideos.map((video) => <VideoCard video={video} />)
      ) : (
        <p> Go mark some videos to see here </p>
      )}
    </>
  );
}
