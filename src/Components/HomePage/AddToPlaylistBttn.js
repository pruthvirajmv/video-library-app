import React, { useState } from "react";
import useVideoLib from "../../context/videos-context";
import Modal from "./AddToPlaylistModal";

export default function AddToPlaylist({ video }) {
  const [playlistModal, setPlaylistModal] = useState();

  function toggleModal() {
    playlistModal === "Show"
      ? setPlaylistModal("Hide")
      : setPlaylistModal("Show");
  }

  return (
    <>
      {playlistModal === "Show" && (
        <Modal video={video} toggleModal={toggleModal} />
      )}
      <button onClick={toggleModal} className="bttn bttn-secondary">
        AddToPlaylist
      </button>
    </>
  );
}
