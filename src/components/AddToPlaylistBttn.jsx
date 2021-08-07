import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { AddToPlaylistModal } from "./AddToPlaylistModal";

export function AddToPlaylistBttn({ videoId }) {
   const navigate = useNavigate();

   const [playlistModal, setPlaylistModal] = useState(false);
   const [showText, setShowText] = useState(false);
   const {
      authState: { isUserLoggedIn },
   } = useAuth();

   function toggleModal() {
      setPlaylistModal((prev) => !prev);
   }

   return (
      <>
         {playlistModal && <AddToPlaylistModal videoId={videoId} toggleModal={toggleModal} />}

         <div
            onClick={isUserLoggedIn ? toggleModal : () => navigate("/login")}
            className="video-bttn"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}>
            {showText && <span>AddToPlaylist </span>}
            <i className="fa fa-list fa-lg" aria-hidden="true"></i>
         </div>
      </>
   );
}
