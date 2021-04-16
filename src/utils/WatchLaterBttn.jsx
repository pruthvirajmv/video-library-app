import useVideoLib from "../context/videos-context";

export default function WatchLaterButton({ videoId }) {
  const { state, dispatch } = useVideoLib();

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_WATCH_LATER", payload: videoId })
        }
        className="bttn bttn-primary"
      >
        Watchlater&nbsp;
        {state.watchLater.includes(videoId) && (
          <i class="fa fa-check-circle" aria-hidden="true"></i>
        )}
      </button>
    </>
  );
}
