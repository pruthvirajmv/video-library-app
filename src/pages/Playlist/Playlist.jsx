import "./playlist.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useVideoLib } from "../../context";
import { HorizontalVideoCard } from "../../components";
import { renamePlaylist } from "../../utils";

export function Playlist() {
   const listName = useParams();
   const { state } = useLocation();

   const playlistName = state.playlistName;

   const { videoState, dispatch, setIsLoading } = useVideoLib();

   const playlist = videoState.playlist.find((list) => list.name === playlistName);

   const [renameModal, setRenameModal] = useState(false);
   const [newPlaylistName, setNewPlaylistName] = useState(playlistName);

   const renameModalClickHandler = () => {
      if (newPlaylistName !== "" && newPlaylistName !== playlist.name) {
         setRenameModal(false);
         renamePlaylist(playlist.name, newPlaylistName, dispatch, setIsLoading);
      }
   };

   useEffect(() => {
      document.title = "Video Lib | Playlist";
   }, []);

   function PlaylistRenameModal() {
      return (
         <div className="modal-container">
            <div className="modal">
               <div className="modal-title">
                  <h2 className="txt-white">Rename playlist</h2>
               </div>
               <div className="flex-row">
                  <input
                     type="text"
                     value={newPlaylistName}
                     onChange={(e) => setNewPlaylistName(e.target.value)}
                     placeholder="rename new"
                  />

                  <i
                     onClick={renameModalClickHandler}
                     class="fa fa-check bttn"
                     aria-hidden="true"></i>

                  <i
                     onClick={() => setRenameModal(false)}
                     class="fa fa-times bttn"
                     aria-hidden="true"></i>
               </div>
            </div>
         </div>
      );
   }

   return (
      <div>
         {renameModal && <PlaylistRenameModal />}
         <div className="txt-white playlist-head">
            <h2 className="txt-white">{newPlaylistName}</h2>
            <i onClick={() => setRenameModal(true)} class="fa fa-pencil" aria-hidden="true"></i>
         </div>

         <div className="video-display-playlistpage">
            {playlist?.videos.length > 0 ? (
               playlist.videos.map((video) => (
                  <div key={video.videoId}>
                     <HorizontalVideoCard video={video} page={listName.list} />
                  </div>
               ))
            ) : (
               <p> No videos added here</p>
            )}
         </div>
      </div>
   );
}
