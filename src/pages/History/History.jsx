import "./history.css"

import useVideoLib from "../../context/videos-context";
import VideoCard from "../Home/VideoCard";

export default function History(){

    const { state } = useVideoLib();

    const watchHistory = state.history;

    return(
        <>
        <h2 className="txt-white" >History</h2>
                <div className="video-display-history">
          {watchHistory.map((videoId) => (
            <div key={videoId}>
              <VideoCard  video={state.videos.find(({ id }) => id === videoId)} />
            </div>
          ))}
        </div>
        </>
    )
}