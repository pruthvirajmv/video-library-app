export default function videosReducer(state, { type, payload }) {
  console.log({ payload });
  switch (type) {
    case "DATA_FROM_SERVER":
      return {
        ...state,
        videos: payload
      };

    case "TOGGLE_WATCH_LATER":
      return {
        ...state,
        watchLater: state.watchLater.includes(payload)
          ? state.watchLater.filter((id) => id !== payload)
          : state.watchLater.concat(payload)
      };

    case "TOGGLE_LIKE":
      return {
        ...state,
        liked: state.liked.includes(payload)
          ? state.liked.filter((id) => id !== payload)
          : state.liked.concat(payload)
      };

    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.find(({ name }) => name === payload)
          ? state.playlist
          : state.playlist.concat({
              name: payload,
              videosAdded: []
            })
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter(({ name }) => name !== payload)
      };

    case "TOGGLE_VIDEO_IN_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map(({ name, videosAdded }) =>
          name === payload.addToPlaylist.name
            ? {
                name,
                videosAdded: videosAdded.includes(payload.addVideo)
                  ? videosAdded.filter((video) => video !== payload.addVideo)
                  : videosAdded.concat(payload.addVideo)
              }
            : { name, videosAdded }
        )
      };

      case "ADD_TO_WATCH_HISTORY" :
        return{
          ...state,
          history: state.history.concat(payload)
        }

    default:
      return state;
  }
}
