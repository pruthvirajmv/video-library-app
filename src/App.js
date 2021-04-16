import "./styles.css";

import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import Playlist from "./pages/Playlist/Playlist";
import Video from "./pages/Video/Video";
import videoDB from "./database/videoDataBase";

import { Routes, Route, NavLink } from "react-router-dom";
import useVideoLib from "./context/videos-context";
import { useEffect } from "react";

export default function App() {
  const { dispatch } = useVideoLib();

  useEffect(
    () => dispatch({ type: "DATA_FROM_SERVER", payload: videoDB.videos }),
    []
  );

  return (
    <div className="App">
      <nav className="nav nav-dark">
        <NavLink end to="/" activeClassName="active-page" className="nav-links">
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/playlists"
          activeClassName="active-page"
          className="nav-links"
        >
          {" "}
          Playlists
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:videoId" element={<Video />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:list" element={<Playlist />} />
      </Routes>
    </div>
  );
}
