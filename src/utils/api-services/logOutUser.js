import { toast } from "react-toastify";

export const logOutUser = (authDispatch, dispatch, setIsLoading) => {
   setIsLoading(true);
   authDispatch({ type: "LOGOUT_USER" });
   dispatch({ type: "CLEAR_USER_DATA" });
   toast("Successfully logged Out");
   localStorage?.removeItem("loginSession");
   setIsLoading(false);
};
