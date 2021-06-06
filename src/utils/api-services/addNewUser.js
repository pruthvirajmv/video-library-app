import axios from "axios";

import { backendAPI } from "../index";

export const addNewUser = async (
   { name, email, password },
   authDispatch,
   setIsLoading,
   setErrorMsg,
   navigate
) => {
   try {
      setIsLoading(true);
      const {
         status,
         data: { addedUser, token },
      } = await axios({
         method: "POST",
         url: `${backendAPI.baseURI}/user/register`,
         data: { username: name, email: email, password: password },
      });
      if (status === 200) {
         navigate("/");
         authDispatch({ type: "LOAD_USER", payload: addedUser });
         localStorage?.setItem("loginSession", JSON.stringify({ isUserLoggedIn: true, token }));
      }
   } catch (err) {
      console.error(err.response);
      setErrorMsg(err.response.data.message);
   } finally {
      setIsLoading(false);
   }
};
