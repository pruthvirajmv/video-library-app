import HomePage from "./Components/HomePage/HomePage";
import Playlist from "./Components/PlaylistPage/Playlist";
import "./styles.css";

import { Routes, Route, Link, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      {/* <HomePage />
      <Playlist /> */}
      <nav class="nav nav-dark">
        <NavLink
          exact
          to="/home"
          activeClassName="active-page"
          className="nav-links"
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/playlist"
          activeClassName="active-page"
          className="nav-links"
        >
          {" "}
          Playlists
        </NavLink>
      </nav>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="playlist/:list" element={<Playlist />} />
      </Routes>
    </div>
  );
}
