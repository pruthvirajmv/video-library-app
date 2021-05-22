import axios from 'axios';
import { backendAPI, dispatchTypeEnum, checkError } from './index';

export const createNewPlaylist = async (userId, playlistName, dispatch, setIsLoading) => {
  try {
    setIsLoading(true);
    const {
      data: { success, playlist },
    } = await axios({
      method: 'POST',
      url: `${backendAPI.baseURI}/playlists/${userId}`,
      data: { playlistName: playlistName },
    });
    if (success) {
      dispatch({ type: dispatchTypeEnum.ADD_NEW_PLAYLIST, payload: playlist });
    }
  } catch (error) {
    checkError(error);
  } finally {
    setIsLoading(false);
  }
};
