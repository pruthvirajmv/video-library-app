import { dispatchTypeEnum } from "../../utils";
import { initialState } from "./videos-context";

export default function videosReducer(videoState, { type, payload }) {
   switch (type) {
      case dispatchTypeEnum.DATA_FROM_SERVER:
         return {
            ...videoState,
            videos: payload,
         };

      case dispatchTypeEnum.CLEAR_USER_DATA:
         return {
            ...initialState,
            videos: videoState.videos,
         };

      case dispatchTypeEnum.LOAD_USER_PLAYLISTS:
         return {
            ...videoState,
            watchLater: payload.find(({ name }) => name === "Watch Later")?.videos,
            playlist: payload.filter(({ name }) => name !== "Watch Later"),
         };

      case dispatchTypeEnum.TOGGLE_WATCH_LATER:
         return {
            ...videoState,
            watchLater: payload.videos,
         };

      case dispatchTypeEnum.LOAD_USER_LIKED_VIDEOS:
         return {
            ...videoState,
            liked: payload,
         };
      case dispatchTypeEnum.TOGGLE_LIKE:
         return {
            ...videoState,
            liked: payload,
         };

      case dispatchTypeEnum.ADD_NEW_PLAYLIST:
         return {
            ...videoState,
            playlist: videoState.playlist.find(({ name }) => name === payload)
               ? videoState.playlist
               : videoState.playlist.concat(payload),
         };

      case dispatchTypeEnum.RENAME_PLAYLIST:
         return {
            ...videoState,
            playlist: videoState.playlist.map(({ name }) =>
               name === payload.playlistName ? name : payload.updatedPlaylistName
            ),
         };

      case dispatchTypeEnum.DELETE_PLAYLIST:
         return {
            ...videoState,
            playlist: videoState.playlist.filter(({ name }) => name !== payload),
         };

      case dispatchTypeEnum.TOGGLE_VIDEO_IN_PLAYLIST:
         return {
            ...videoState,
            playlist: videoState.playlist.map(({ name, videos }) =>
               name === payload.name ? { name, videos: payload.videos } : { name, videos }
            ),
         };

      case dispatchTypeEnum.LOAD_USER_HISTORY:
         return {
            ...videoState,
            history: payload,
         };

      case dispatchTypeEnum.ADD_TO_WATCH_HISTORY:
         return {
            ...videoState,
            history: payload,
         };

      case dispatchTypeEnum.REMOVE_VIDEO_FROM_HISTORY:
         return {
            ...videoState,
            history: videoState.history.filter(({ _id }) => _id !== payload),
         };

      case dispatchTypeEnum.CLEAR_HISTORY:
         return {
            ...videoState,
            history: [],
         };

      default:
         return videoState;
   }
}
