import "./playlist.css";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useVideoLib } from "../../context";
import { HorizontalVideoCard } from "../../components";
import { renamePlaylist } from "../../utils";

export function Playlist() {
   let { playlistId } = useParams();
   const { videoState, dispatch, setIsLoading } = useVideoLib();

   const [renameModal, setRenameModal] = useState(false);
   const [playlist, setPlaylist] = useState([]);
   console.log(playlist);

   useEffect(() => {
      console.log(playlistId, videoState);
      setPlaylist(() => videoState.playlist.find((list) => list._id === playlistId));
   }, [videoState]);

   const renameModalClickHandler = (newPlaylistName) => {
      if (newPlaylistName !== "" && newPlaylistName !== playlist.name) {
         setRenameModal(false);
         renamePlaylist(playlist.name, newPlaylistName, dispatch, setIsLoading);
      }
   };

   useEffect(() => {
      document.title = "Video Lib | Playlist";
   }, []);

   function PlaylistRenameModal() {
      const [newPlaylistName, setNewPlaylistName] = useState(playlist.name);
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
                     onClick={() => renameModalClickHandler(newPlaylistName)}
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
      <>
         {playlist?.videos !== undefined && (
            <>
               <div className="txt-white playlist-head">
                  <h2 className="txt-white">{playlist?.name}</h2>
                  <i
                     onClick={() => setRenameModal(true)}
                     class="fa fa-pencil bttn-icon"
                     aria-hidden="true"></i>
               </div>
               <div className="video-display-playlistpage">
                  {playlist?.videos.length > 0 ? (
                     playlist.videos.map((video) => (
                        <div key={video.videoId}>
                           <HorizontalVideoCard video={video} page={playlist?.name} />
                        </div>
                     ))
                  ) : (
                     <p> No videos added here</p>
                  )}
               </div>
            </>
         )}

         {renameModal && <PlaylistRenameModal />}
      </>
   );
}
