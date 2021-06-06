import axios from "axios";
import { backendAPI, checkError } from "../index";

export const getUserHistory = async (dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, history },
      } = await axios.get(`${backendAPI.baseURI}/history`);
      if (success) {
         dispatch({ type: "LOAD_USER_HISTORY", payload: history });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
