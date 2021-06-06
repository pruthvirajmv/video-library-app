import axios from "axios";
import { backendAPI, checkError } from "../index";

export const clearHistory = async (dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, history },
      } = await axios.get(`${backendAPI.baseURI}/history/clear`);
      if (success) {
         dispatch({ type: "CLEAR_HISTORY" });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
