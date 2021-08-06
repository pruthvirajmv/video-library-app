import React from "react";

import "./login.css";

import useInput from "./Input";
import { logOutUser } from "../../utils";
import { useVideoLib } from "../../context";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export function Profile() {
   const { dispatch, setIsLoading } = useVideoLib();
   const { authState, authDispatch } = useAuth();
   const navigate = useNavigate();

   const user = useInput("");
   const userPassword = useInput("");

   const logOutSubmitHandler = (e) => {
      e.preventDefault();
      logOutUser(authDispatch, dispatch, setIsLoading);
      navigate("/");
   };

   return (
      <>
         <div className="login-layout">
            <form className="form-container" onSubmit={logOutSubmitHandler}>
               <h2>Welcome {authState.userName} !</h2>
               <section>
                  <label>User Name: </label>
                  <div>{authState.userName}</div>
               </section>

               <section>
                  <label>Email: </label>
                  <div>{authState.userEmail}</div>
               </section>
               <button type="submit" className="bttn bttn-primary login">
                  Logout
               </button>
            </form>
            {/* <div>
               Reset password?{" "}
               <button onClick={() => navigate("/reset")} className="bttn bttn-secondary">
                  Reset
               </button>{" "}
            </div> */}
         </div>
      </>
   );
}
