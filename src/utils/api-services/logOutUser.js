export const logOutUser = (authDispatch, dispatch, setIsLoading) => {
   setIsLoading(true);
   authDispatch({ type: "LOGOUT_USER" });
   dispatch({ type: "CLEAR_USER_DATA" });
   localStorage?.removeItem("loginSession");
   setIsLoading(false);
};
