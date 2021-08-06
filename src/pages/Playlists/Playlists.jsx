import "./playlists.css";

import React, { useEffect } from "react";
import { useAuth, useVideoLib } from "../../context";
import { deletePlaylist } from "../../utils";
import VideoCard from "../Home/VideoCard";
import PlaylistVideoCard from "./PlaylistVideoCard";
import { Link } from "react-router-dom";

export function Playlists() {
   const { videoState, dispatch, setIsLoading } = useVideoLib();
   const {
      authState: { userId },
   } = useAuth();

   const likedVideos = videoState.liked;
   const watchLaterVideos = videoState.watchLater;
   const playlist = videoState.playlist;

   useEffect(() => {
      document.title = "Video Lib | Playlists";
   }, []);

   return (
      <>
         <div className="video-display-playslistspage">
            <div className="playlist-section">
               <h3 className="txt-white txt-align-left">
                  Liked
                  <Link to={`/liked`}>
                     <span className="txt-primary text-small"> See All </span>
                  </Link>
               </h3>

               <div className="video-display-playslist">
                  {likedVideos.length > 0 ? (
                     likedVideos.slice(0, 3).map((video) => <VideoCard video={video} />)
                  ) : (
                     <p> Like some videos to see here </p>
                  )}
               </div>
            </div>

            <div className="playlist-section">
               <h3 className="txt-white txt-align-left">
                  Watch later
                  <Link to={`/watchLater`}>
                     <span className="txt-primary text-small"> See All </span>
                  </Link>
               </h3>

               <div className="video-display-playslist">
                  {watchLaterVideos.length > 0 ? (
                     watchLaterVideos.slice(0, 3).map((video) => <VideoCard video={video} />)
                  ) : (
                     <p> Go mark some videos to see here </p>
                  )}
               </div>
            </div>

            <div className="playlist-section">
               <h3 className="txt-white txt-align-left">Playlists</h3>
               {playlist.length > 0 ? (
                  playlist.map(({ _id, name, videos }) => (
                     <div key={name}>
                        <h3 className="txt-primary txt-align-left">
                           {name}
                           <Link to={`/playlists/playlist/${_id}`}>
                              <span className="txt-white text-small"> See All </span>
                           </Link>
                           <button
                              onClick={() => deletePlaylist(name, dispatch, setIsLoading)}
                              className="bttn bttn-secondary bttn-icon">
                              <i className="fa fa-trash" aria-hidden="true"></i>
                           </button>
                        </h3>
                        <div className="video-display-playslist">
                           {videos.slice(0, 3).map((video) => (
                              <PlaylistVideoCard video={video} playlistName={name} />
                           ))}
                        </div>
                     </div>
                  ))
               ) : (
                  <p> Go make your playlists</p>
               )}
            </div>
         </div>
      </>
   );
}
