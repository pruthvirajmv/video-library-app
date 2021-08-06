import React, { useState } from "react";
import { AddToPlaylistModal } from "./AddToPlaylistModal";

export function AddToPlaylistBttn({ videoId }) {
   const [playlistModal, setPlaylistModal] = useState(false);
   const [showText, setShowText] = useState(false);

   function toggleModal() {
      setPlaylistModal((prev) => !prev);
   }

   return (
      <>
         {playlistModal && <AddToPlaylistModal videoId={videoId} toggleModal={toggleModal} />}

         <div
            onClick={toggleModal}
            className="video-bttn"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}>
            {showText && <span>AddToPlaylist </span>}
            <i className="fa fa-list fa-lg" aria-hidden="true"></i>
         </div>
      </>
   );
}
