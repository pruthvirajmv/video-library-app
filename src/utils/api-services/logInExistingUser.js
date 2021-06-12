import axios from "axios";
import { toast } from "react-toastify";
import { backendAPI, checkError, setupAuthHeaderForServiceCalls } from "../index";

export const logInExistingUser = async (
   name,
   password,
   authDispatch,
   setIsLoading,
   setErrorMsg,
   navigateTo,
   state
) => {
   try {
      setIsLoading(true);
      const {
         status,
         data: { user, token },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/user/login`,
         data: { username: name, password: password },
      });
      if (status === 200) {
         setupAuthHeaderForServiceCalls(token);
         authDispatch({ type: "LOAD_TOKEN", payload: token });
         authDispatch({ type: "LOAD_USER", payload: user });
         navigateTo(state?.from ? state.from : "/");
         toast("Successfully logged in");
         localStorage?.setItem("loginSession", JSON.stringify({ isUserLoggedIn: true, token }));
      }
   } catch (error) {
      checkError(error);
      return setErrorMsg(error.response.data.message);
   } finally {
      setIsLoading(false);
   }
};
