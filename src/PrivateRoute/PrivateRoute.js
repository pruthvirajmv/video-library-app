import React from "react";
import {Navigate, Route} from "react-router-dom";
import { useAuth } from "../context";
import {checkUserLogin} from "../utils";


export function PrivateRoute( {path, ...props} ){
    const { authState : {isUserLoggedIn}, authDispatch } = useAuth();
    
    return (isUserLoggedIn)
    ? <Route path={path} {...props}></Route>
    : <Navigate state={{from: path}} replace to="/login" />
    
}