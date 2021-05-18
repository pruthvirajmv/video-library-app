import React, { useState } from "react";
import { useAuth, useVideoLib } from "../context";
import { createNewPlaylist, toggleVideoInPlaylist } from "../utils";

export function AddToPlaylistModal({ videoId, toggleModal }) {
  const { state, dispatch, setIsLoading } = useVideoLib();
  const {
    authState: { userId }
  } = useAuth();

  const [playlistName, setPlaylistName] = useState("");

  function addNewPlaylistHandler() {
    const newPlaylist = playlistName;
    if (newPlaylist !== "") {
      createNewPlaylist(userId, playlistName, dispatch, setIsLoading);
    }
    setPlaylistName("");
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-title">
          <h3>Playlists</h3>
        </div>
        <div className="flex-row">
          <input
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="create new"
          />
          <button onClick={addNewPlaylistHandler} className="bttn">
            +
          </button>
        </div>
        <div className="modal-body">
          {state.playlist.map((list) => (
            <label key={videoId}>
              <input
                className="input-checkbox"
                type="checkbox"
                checked={list.videos.some((video) => video._id === videoId)}
                onChange={() =>
                  toggleVideoInPlaylist(
                    userId,
                    list.name,
                    videoId,
                    dispatch,
                    setIsLoading
                  )
                }
              />
              &nbsp;{list.name}
            </label>
          ))}
        </div>
        <footer>
          <button onClick={toggleModal} className="bttn bttn-secondary">
            OK
          </button>
        </footer>
      </div>
    </div>
  );
}
