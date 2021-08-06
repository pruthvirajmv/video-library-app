import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context";

export function PrivateRoute({ path, ...props }) {
   const {
      authState: { token },
   } = useAuth();

   return token ? (
      <Route path={path} {...props}></Route>
   ) : (
      <Navigate state={{ from: path }} replace to="/login" />
   );
}
