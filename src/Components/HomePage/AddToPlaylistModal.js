import React, { useState } from "react";
import useVideoLib from "../../context/videos-context";

export default function Modal({ video, toggleModal }) {
  const { state, dispatch } = useVideoLib();

  const [playlistName, setPlaylistName] = useState("");

  function addNewPlaylistHandler() {
    const newPlaylist = playlistName;
    if (newPlaylist !== "")
      dispatch({ type: "ADD_NEW_PLAYLIST", payload: newPlaylist });
  }

  return (
    <div className="modal-container">
      <div class="modal">
        <div class="modal-title">
          <h3>Playlists</h3>
        </div>
        <div>
          <input
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="add new "
          />
          <button onClick={addNewPlaylistHandler} className="bttn">
            +
          </button>
        </div>
        <div class="modal-body">
          <ul>
            {state.playlist.map((list) => (
              <li>{list.name}</li>
            ))}
          </ul>
        </div>
        <footer>
          <button class="bttn bttn-primary">Ok</button>
          <button onClick={toggleModal} class="bttn bttn-secondary">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
