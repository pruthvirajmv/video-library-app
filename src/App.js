import "./styles.css";

import { Home, Playlists, Playlist, History, Video, Login, SignUp, ResetPassword, Profile, WatchLater, LikedVideos } from "./pages";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute"

import { AppNavBar, AppSideNavBar,AppSideNavBarMobile, FloatingActionBttn, Footer, Loader } from "./components";

import { Routes, Route } from "react-router-dom";
import { useVideoLib } from "./context";
import { useState } from "react";

export default function App() {

  const { isLoading } = useVideoLib();

  const [showNav, setShowNav] = useState(true)

  return (
    <div className="App">
      <AppNavBar setShowNav={setShowNav} />

      { isLoading && <Loader/>}
      <main className="app-layout">

          <AppSideNavBar showNav = {showNav} />
          <AppSideNavBarMobile showNav = {showNav} />
        <div className="app-display">
          <Routes>
            <Route path="/" element={<Home />} />
            <PrivateRoute path="/:videoId" element={<Video />} />
            <PrivateRoute path="/playlists" element={<Playlists />} />
            <PrivateRoute path="/playlists/:list" element={<Playlist />} />
            <PrivateRoute path="/history" element={<History />} />
            <PrivateRoute path="/watchLater" element={<WatchLater/>} />
            <PrivateRoute path="/liked" element={<LikedVideos/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset" element={<ResetPassword/>} />
          </Routes>
        </div>
        <Footer/>
      </main>
      <FloatingActionBttn/>
    </div>
  );
}
