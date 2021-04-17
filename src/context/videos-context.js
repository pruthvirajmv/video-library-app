import axios from "axios";
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
    liked: [],
    watchLater: [],
    playlist: [
      {
        name: "myplaylist",
        videosAdded: []
      }
    ]
  });

  const [isLoading, setIsLoading] = useState("fetchStarted");

  console.log({ state });

  useEffect(
    () => dispatch({ type: "DATA_FROM_SERVER", payload: videoDB.videos }),
    []
  );

  // useEffect(
  //   () =>
  //     (async () => {
  //       const response = await axios.get("api/videos");
  //       console.log(response.data.videos);
  //       try {
  //         setIsLoading("fetchStarted");
  //         if (response.status === 200) {
  //           dispatch({
  //             type: "DATA_FROM_SERVER",
  //             payload: response.data.videos
  //           });
  //         }
  //       } catch (error) {
  //         console.error();
  //       } finally {
  //         setIsLoading("fetchEnded");
  //       }
  //     })(),
  //   []
  // );

  return (
    <VideosContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </VideosContext.Provider>
  );
}

export default function useVideoLib() {
  return useContext(VideosContext);
}
