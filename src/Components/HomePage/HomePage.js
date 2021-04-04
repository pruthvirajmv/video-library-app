import "../../styles.css";
import "./homePage.css";
import React, { useEffect, useReducer } from "react";
import VideoCard from "./VideoCard";
import useVideoLib from "../../context/videos-context";
import VideoSearch from "./VideoSearch";

export default function HomePage() {
  const { state } = useVideoLib();

  const videosFromContext = state.videos;

  const [homePageState, homePageDispatch] = useReducer(homePageReducer, {
    videos: []
  });

  function homePageReducer(state, action) {
    switch (action.type) {
      case "SEARCH_FOR_VIDEOS":
        return {
          ...state,
          videos: state.videos.filter(({ name }) =>
            name.toUpperCase().includes(action.payload.toUpperCase())
          )
        };

      case "CLEAR_SEARCH":
        return {
          ...state,
          videos: videosFromContext
        };

      default:
        return {
          ...state,
          videos: videosFromContext
        };
    }
  }

  useEffect(() => homePageDispatch({ type: "" }), [state]);

  return (
    <>
      <VideoSearch dispatch={homePageDispatch} />
      {homePageState.videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </>
  );
}
