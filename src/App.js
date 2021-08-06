import "./styles.css";

import {
   Home,
   Playlists,
   Playlist,
   History,
   Video,
   Login,
   SignUp,
   ResetPassword,
   Profile,
   WatchLater,
   LikedVideos,
} from "./pages";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

import {
   AppNavBar,
   AppSideNavBar,
   AppSideNavBarMobile,
   FloatingActionBttn,
   Footer,
   Loader,
} from "./components";

import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth, useVideoLib } from "./context";
import { useState, useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadUserProfile } from "./utils";

// toast.configure();

export default function App() {
   const { authState, authDispatch } = useAuth();
   const { isLoading, setIsLoading } = useVideoLib();
   const { pathname } = useLocation();

   useEffect(
      () => authState.token && loadUserProfile(authDispatch, setIsLoading),
      [authState.token]
   );

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   const [showNav, setShowNav] = useState(false);

   return (
      <div className="App">
         <AppNavBar setShowNav={setShowNav} />

         {isLoading && <Loader />}
         <main className="app-layout">
            <AppSideNavBar showNav={showNav} />
            <AppSideNavBarMobile showNav={showNav} />
            <div className="app-display">
               <ToastContainer
                  position="bottom-left"
                  autoClose={3000}
                  hideProgressBar={true}
                  transition={Slide}
               />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <PrivateRoute path="/:videoId" element={<Video />} />
                  <PrivateRoute path="/playlists" element={<Playlists />} />
                  <PrivateRoute path="/playlists/playlist/:playlistId" element={<Playlist />} />
                  <PrivateRoute path="/history" element={<History />} />
                  <PrivateRoute path="/watchLater" element={<WatchLater />} />
                  <PrivateRoute path="/liked" element={<LikedVideos />} />
                  <PrivateRoute path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/reset" element={<ResetPassword />} />
               </Routes>
            </div>
            <Footer />
         </main>
         <FloatingActionBttn />
      </div>
   );
}
