import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getVideosFromDb, getUserPlaylists, getUserLikedVideos, getUserHistory } from "../../utils";
import { useAuth } from "../auth/auth-context";
import videosReducer from "./videosReducer";

const VideosContext = createContext();

export const initialState = {
   videos: [],
   liked: [],
   watchLater: [],
   history: [],
   playlist: [],
};

export function VideosContextProvider({ children }) {
   const { authState } = useAuth();

   const [videoState, dispatch] = useReducer(videosReducer, initialState);

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => getVideosFromDb(dispatch, setIsLoading), []);

   useEffect(() => {
      if (authState.token) {
         getUserPlaylists(dispatch, setIsLoading);
      }
   }, [authState.token]);

   useEffect(() => {
      if (authState.token) {
         getUserHistory(dispatch, setIsLoading);
      }
   }, [authState.token]);

   useEffect(() => {
      if (authState.token) {
         getUserLikedVideos(dispatch, setIsLoading);
      }
   }, [authState.token]);

   return (
      <VideosContext.Provider value={{ videoState, dispatch, isLoading, setIsLoading }}>
         {children}
      </VideosContext.Provider>
   );
}

export function useVideoLib() {
   return useContext(VideosContext);
}
