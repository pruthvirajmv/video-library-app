import axios from "axios";
import { backendAPI, checkError } from "../index";

export const getVideosFromDb = async (dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, videos },
      } = await axios({
         method: "GET",
         url: `${backendAPI.baseURI}/videos`,
      });
      if (success) {
         dispatch({ type: "DATA_FROM_SERVER", payload: videos });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
