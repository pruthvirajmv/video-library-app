import React, { useState } from "react";
import { useVideoLib } from "../context";
import { createNewPlaylist, toggleVideoInPlaylist } from "../utils";

export function AddToPlaylistModal({ videoId, toggleModal }) {
   const { videoState, dispatch, setIsLoading } = useVideoLib();

   const [playlistName, setPlaylistName] = useState("");

   function addNewPlaylistHandler() {
      const newPlaylist = playlistName;
      if (newPlaylist !== "") {
         createNewPlaylist(playlistName, videoId, dispatch, setIsLoading);
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
               {videoState.playlist.length === 0 && <p>No playlist</p>}
               {videoState.playlist.map((list) => {
                  const toggleVideoInPlaylistArgs = {
                     playlistName: list.name,
                     videoId: videoId,
                     dispatch: dispatch,
                     setIsLoading: setIsLoading,
                     videosList: list.videos,
                  };
                  return (
                     <label key={list._id} className="label-playlist">
                        <input
                           className="input-checkbox"
                           type="checkbox"
                           checked={list.videos.some((video) => video._id === videoId)}
                           onChange={() => toggleVideoInPlaylist(toggleVideoInPlaylistArgs)}
                        />
                        &nbsp;{list.name}
                     </label>
                  );
               })}
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
