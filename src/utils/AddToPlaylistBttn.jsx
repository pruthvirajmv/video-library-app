import React, { useState } from "react";
import {AddToPlaylistModal} from "./AddToPlaylistModal";

export function AddToPlaylistBttn({ videoId }) {
  const [playlistModal, setPlaylistModal] = useState("Hide");

  function toggleModal() {
    playlistModal === "Show"
      ? setPlaylistModal("Hide")
      : setPlaylistModal("Show");
  }

  return (
    <>
      {playlistModal === "Show" && (
        <AddToPlaylistModal videoId={videoId} toggleModal={toggleModal} />
      )}
      <button onClick={toggleModal} className="bttn bttn-secondary">
        AddToPlaylist
      </button>
    </>
  );
}
