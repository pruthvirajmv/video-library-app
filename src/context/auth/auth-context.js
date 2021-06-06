import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { loadUserProfile, setupAuthHeaderForServiceCalls } from "../../utils";
import { authReducer } from "./authReducer";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
   const loginHistory = JSON.parse(localStorage?.getItem("loginSession"));

   const initialState = {
      userName: "",
      userEmail: "",
      token: "",
      isUserLoggedIn: false,
   };

   if (loginHistory?.token) {
      setupAuthHeaderForServiceCalls(loginHistory.token);
      initialState.token = loginHistory.token;
   }

   const [authState, authDispatch] = useReducer(authReducer, initialState);

   useEffect(() => authState.token && loadUserProfile(authDispatch), [authState.token]);

   return (
      <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
   );
}

export const useAuth = () => {
   return useContext(AuthContext);
};
