import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import videoDB from "../database/videoDataBase";
import videosReducer from "./videosReducer";

const VideosContext = createContext();

export function VideosContextProvider({ children }) {
  const [state, dispatch] = useReducer(videosReducer, {
    videos: [],
    playlist: []
  });

  // const [playlistModal, setPlaylistModal] = useState("Hide");

  useEffect(() => dispatch({ type: "DATA_FROM_SERVER", payload: videoDB }), []);

  return (
    <VideosContext.Provider value={{ state, dispatch }}>
      {children}
    </VideosContext.Provider>
  );
}

export default function useVideoLib() {
  return useContext(VideosContext);
}
