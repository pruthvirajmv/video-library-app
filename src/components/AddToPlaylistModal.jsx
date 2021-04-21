import React, { useState } from "react";
import { useVideoLib, dispatchTypeEnum } from "../context";

export function AddToPlaylistModal({ videoId, toggleModal }) {
  const { state, dispatch } = useVideoLib();

  const [playlistName, setPlaylistName] = useState("");

  function addNewPlaylistHandler() {
    const newPlaylist = playlistName;
    if (newPlaylist !== "") {
      dispatch({
        type: dispatchTypeEnum.ADD_NEW_PLAYLIST,
        payload: newPlaylist
      });
    }
    setPlaylistName("");
  }

  return (
    <div className="modal-container">
      <div class="modal">
        <div class="modal-title">
          <h3>Playlists</h3>
        </div>
        <div>
          <input
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="create new"
          />
          <button onClick={addNewPlaylistHandler} className="bttn">
            +
          </button>
        </div>
        <div class="modal-body">
          {state.playlist.map((list) => (
            <label key={videoId}>
              <input
                type="checkbox"
                checked={list.videosAdded.includes(videoId)}
                onChange={() =>
                  dispatch({
                    type: dispatchTypeEnum.TOGGLE_VIDEO_IN_PLAYLIST,
                    payload: { addToPlaylist: list, addVideo: videoId }
                  })
                }
              />
              &nbsp;{list.name}
            </label>
          ))}
        </div>
        <footer>
          <button onClick={toggleModal} class="bttn bttn-secondary">
            OK
          </button>
        </footer>
      </div>
    </div>
  );
}
