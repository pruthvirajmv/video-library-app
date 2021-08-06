import axios from "axios";
import { backendAPI, checkError } from "../index";

export const loadUserProfile = async (authDispatch, setIsLoading) => {
   try {
      setIsLoading(true);
      const {
         data: { success, user },
      } = await axios({
         method: "GET",
         url: `${backendAPI.baseURI}/user`,
      });
      if (success) {
         authDispatch({ type: "LOAD_USER", payload: user });
      }
   } catch (error) {
      checkError(error);
   } finally {
      setIsLoading(false);
   }
};
