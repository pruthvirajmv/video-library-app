import "./styles.css";

import { Home, Playlists, Playlist, History, Video } from "./pages";

import videoDB from "./database/videoDataBase";
import { AppNavBar } from "./components";

import { Routes, Route } from "react-router-dom";
import { useVideoLib, dispatchTypeEnum } from "./context";
import { useEffect } from "react";

export default function App() {
  const { dispatch } = useVideoLib();

  useEffect(
    () =>
      dispatch({
        type: dispatchTypeEnum.DATA_FROM_SERVER,
        payload: videoDB.videos
      }),
    []
  );

  return (
    <div className="App">
      <AppNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:videoId" element={<Video />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:list" element={<Playlist />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}
