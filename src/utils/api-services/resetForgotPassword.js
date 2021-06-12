import axios from "axios";
import { toast } from "react-toastify";

import { backendAPI } from "../index";

export const resetForgotPassword = async (
   email,
   password,
   setErrorMsg,
   setIsLoading,
   authDispatch,
   dispatch,
   navigateTo
) => {
   try {
      setIsLoading(true);
      const {
         data: { success, user, token },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/user/resetpassword`,
         data: { email: email, password: password },
      });
      if (success) {
         authDispatch({ type: "LOAD_USER", payload: user });
         localStorage?.setItem("loginSession", JSON.stringify({ isUserLoggedIn: true, token }));
         dispatch({ type: "SHOW_TOAST", payload: "Password Reset Successful" });
         setIsLoading(false);
         navigateTo("/profile");
         toast("Password rest successfull");
      }
   } catch (err) {
      if (err.response.status === 404) {
         setErrorMsg("user does not exist");
      } else {
         setErrorMsg("Something went wrong, please try again");
      }
   } finally {
      setIsLoading(false);
   }
};
