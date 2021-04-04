export default function videosReducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "DATA_FROM_SERVER":
      return {
        ...state,
        videos: action.payload.videos,
        playlist: action.payload.playlist
      };

    case "TOGGLE_WATCH_LATER":
      return {
        ...state,
        videos: state.videos.map((video) =>
          video.id === action.payload.id
            ? { ...video, watchLater: !video.watchLater }
            : video
        )
      };

    case "TOGGLE_LIKE":
      return {
        ...state,
        videos: state.videos.map((video) =>
          video.id === action.payload.id
            ? { ...video, liked: !video.liked }
            : video
        )
      };

    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.concat({
          name: action.payload,
          videosAdded: []
        })
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter(({ name }) => name !== action.payload)
      };

    default:
      return state;
  }
}
