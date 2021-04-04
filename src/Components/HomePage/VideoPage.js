import YouTube from "react-youtube";
import React from "react";

import "../../styles.css";
import "./homePage.css";

export default function VideoCard({ videoId }) {
  const opts = {
    height: "200",
    width: "400"
  };

  return (
    <>
      <div class="card">
        <YouTube className="video-homepage" videoId={videoId} opts={opts} />
        <div>
          <h3> Video Name </h3>
        </div>
      </div>
    </>
  );
}
