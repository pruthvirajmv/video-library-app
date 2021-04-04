import useVideoLib from "../../context/videos-context";

export default function WatchLaterButton({ video }) {
  const { dispatch } = useVideoLib();

  return (
    <>
      <button
        onClick={() => dispatch({ type: "TOGGLE_WATCH_LATER", payload: video })}
        className="bttn bttn-primary"
      >
        Watchlater&nbsp;
        {video.watchLater && (
          <i class="fa fa-check-circle" aria-hidden="true"></i>
        )}
      </button>
    </>
  );
}
