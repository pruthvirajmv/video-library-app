import { useVideoLib, dispatchTypeEnum } from "../context";

export function WatchLaterBttn({ videoId }) {
  const { state, dispatch } = useVideoLib();

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: dispatchTypeEnum.TOGGLE_WATCH_LATER, payload: videoId })
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
