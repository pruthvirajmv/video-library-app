import React, { useState } from "react";
import Modal from "./AddToPlaylistModal";

export default function AddToPlaylist({ videoId }) {
  const [playlistModal, setPlaylistModal] = useState();

  function toggleModal() {
    playlistModal === "Show"
      ? setPlaylistModal("Hide")
      : setPlaylistModal("Show");
  }

  return (
    <>
      {playlistModal === "Show" && (
        <Modal videoId={videoId} toggleModal={toggleModal} />
      )}
      <button onClick={toggleModal} className="bttn bttn-secondary">
        AddToPlaylist
      </button>
    </>
  );
}
