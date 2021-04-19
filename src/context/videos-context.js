import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import videoDB from "../database/videoDataBase";
import videosReducer from "./videosReducer";

const VideosContext = createContext();

export function VideosContextProvider({ children }) {
  const [state, dispatch] = useReducer(videosReducer, {
    videos: [],
    liked: [],
    watchLater: [],
    history: [],
    playlist: [
      {
        name: "myplaylist",
        videosAdded: []
      }
    ]
  });

  useEffect(
    () => dispatch({ type: "DATA_FROM_SERVER", payload: videoDB.videos }),
    []
  );

  return (
    <VideosContext.Provider value={{ state, dispatch }}>
      {children}
    </VideosContext.Provider>
  );
}

export function useVideoLib() {
  return useContext(VideosContext);
}
