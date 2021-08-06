import axios from "axios";
import { toast } from "react-toastify";
import { backendAPI, checkError } from "../index";

export const clearHistory = async (dispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, history },
      } = await axios.get(`${backendAPI.baseURI}/history/clear`);
      if (success) {
         dispatch({ type: "CLEAR_HISTORY" });
         toast("History Cleared");
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
