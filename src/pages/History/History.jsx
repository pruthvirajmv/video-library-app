import "./history.css";

import { useEffect } from "react";

import { useVideoLib } from "../../context";
import VideoCard from "../Home/VideoCard";

export function History(){
  
  const { state: {history} } = useVideoLib();

  useEffect(() => {
    document.title = "Video lib | History";
  }, []);

  return (
    <>
      <h2 className="txt-white">History</h2>
      <div className="video-display-history">
        {history.map((videoId) => (
          <div key={videoId}>
            <VideoCard video={state.videos.find(({ id }) => id === videoId)} />
          </div>
        ))}
      </div>
    </>
  );
}
