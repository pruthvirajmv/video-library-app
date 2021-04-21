import React, { useState } from "react";
import { AddToPlaylistModal } from "./AddToPlaylistModal";

export function AddToPlaylistBttn({ videoId }) {
  const [playlistModal, setPlaylistModal] = useState(false);

  function toggleModal() {
    setPlaylistModal((prev) => !prev);
  }

  return (
    <>
      {playlistModal && (
        <AddToPlaylistModal videoId={videoId} toggleModal={toggleModal} />
      )}
      <button onClick={toggleModal} className="bttn bttn-secondary">
        AddToPlaylist
      </button>
    </>
  );
}
