import {  dispatchTypeEnum } from "../../utils";

export default function videosReducer(state, { type, payload }) {
  switch (type) {
    case dispatchTypeEnum.DATA_FROM_SERVER:
      return {
        ...state,
        videos: payload
      };
    
    case dispatchTypeEnum.LOAD_USER_PLAYLISTS:
      return {
        ...state,
        watchLater: payload.find(({name})=> name === "Watch Later")?.videos,
        playlist: payload.filter(({name})=> name !== "Watch Later")
      }

    case dispatchTypeEnum.TOGGLE_WATCH_LATER:
      return {
        ...state,
        watchLater: payload.videos
      };

    case dispatchTypeEnum.LOAD_USER_LIKED_VIDEOS:
      return{
        ...state,
        liked: payload
      } 
    case dispatchTypeEnum.TOGGLE_LIKE:
      return {
        ...state,
        liked: payload
      };

    case dispatchTypeEnum.ADD_NEW_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.find(({
            name
          }) => name === payload) ?
          state.playlist : state.playlist.concat(payload)
      };

    case dispatchTypeEnum.DELETE_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.filter(({ name }) => name !== payload)
      };

    case dispatchTypeEnum.TOGGLE_VIDEO_IN_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map(({ name, videos}) =>
          name === payload.name 
          ?{ name, videos: payload.videos } 
          :{ name, videos }
        )
      };

    case dispatchTypeEnum.LOAD_USER_HISTORY: 
      return {
        ...state,
        history: payload
      }

    case dispatchTypeEnum.ADD_TO_WATCH_HISTORY:
      return {
        ...state,
        history: payload
      }
    
    case dispatchTypeEnum.REMOVE_VIDEO_FROM_HISTORY:
      return {
        ...state,
        history: state.history.filter(({_id}) => _id !== payload )
      }
    
    case dispatchTypeEnum.CLEAR_HISTORY:
      return {
        ...state,
        history: []
      }

      default:
        return state;
  }
}