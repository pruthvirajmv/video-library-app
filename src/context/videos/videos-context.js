import {  createContext,  useContext,  useEffect,  useReducer, useState } from "react";
import { getVideosFromDb, getUserPlaylists, getUserLikedVideos, getUserHistory } from "../../utils";
import { useAuth } from "../auth/auth-context";
import videosReducer from "./videosReducer";

const VideosContext = createContext();

export function VideosContextProvider({ children }) {

  const { authState } = useAuth();

  const initialState = {
    videos: [],
    liked: [],
    watchLater: [],
    history: [],
    playlist: []
  }

  const [state, dispatch] = useReducer(videosReducer, initialState );

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => getVideosFromDb(dispatch, setIsLoading), [])

  useEffect( () => getUserPlaylists(authState.userId, dispatch, setIsLoading), [authState.isUserLoggedIn] );

  useEffect( () => getUserHistory(authState.userId, dispatch, setIsLoading), [authState.isUserLoggedIn] );

  useEffect( () => getUserLikedVideos(authState.userId, dispatch, setIsLoading), [authState.isUserLoggedIn] )


  return (
    <VideosContext.Provider value={{ state, dispatch, isLoading, setIsLoading }}>
      {children}
    </VideosContext.Provider>
  );
}

export function useVideoLib() {
  return useContext(VideosContext);
}
