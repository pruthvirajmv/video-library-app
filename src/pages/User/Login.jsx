import React, { useState } from "react";

import "./login.css";

import useInput from "./Input";
import { logInExistingUser } from "../../utils";
import { useVideoLib } from "../../context/videos/videos-context";
import { useAuth } from "../../context/auth/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

export function Login() {
   const { state } = useLocation();
   const navigate = useNavigate();

   const { dispatch, setIsLoading } = useVideoLib();
   const { authDispatch } = useAuth();

   const email = useInput("");
   const password = useInput("");

   const [showPassword, setShowPassword] = useState(false);

   const [errorMsg, setErrorMsg] = useState("");

   const loginSubmitHandler = (e) => {
      e?.preventDefault();
      logInExistingUser(
         email.value,
         password.value,
         authDispatch,
         setIsLoading,
         setErrorMsg,
         navigate,
         state
      );
   };

   const guestUserLogin = () => {
      const guestEmail = "guestuser@gmail.com";
      const guestPassword = "neoG@2021";

      email.ref.current.value = guestEmail;
      password.ref.current.value = guestPassword;
      setTimeout(
         () =>
            logInExistingUser(
               guestEmail,
               guestPassword,
               authDispatch,
               setIsLoading,
               setErrorMsg,
               navigate,
               state
            ),
         1000
      );
   };

   return (
      <>
         <div className="login-layout">
            <form className="form-container" onSubmit={loginSubmitHandler}>
               <h2>User Login</h2>
               <section>
                  <label>User Email</label>
                  <input
                     className="input input-primary"
                     type="text"
                     {...email}
                     placeholder="enter registered email"
                     required></input>
               </section>

               <section>
                  <label>Password</label>
                  <div className="input input-primary">
                     <input
                        className="input"
                        type={showPassword ? "text" : "password"}
                        {...password}
                        placeholder="enter your password"
                        minLength="8"
                        required></input>
                     <span>
                        <i
                           onClick={() => setShowPassword((prev) => !prev)}
                           className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                           aria-hidden="true"></i>
                     </span>
                  </div>
               </section>
               <button type="submit" className="bttn bttn-primary login">
                  Login
               </button>
            </form>

            <p className="error-msg">{errorMsg}</p>

            <div>
               <span>Visit as guest user? </span>
               <button onClick={guestUserLogin} className="bttn bttn-secondary">
                  Guest
               </button>
            </div>
            <div>
               <span>Not a user yet? </span>
               <button onClick={() => navigate("/signup")} className="bttn bttn-secondary">
                  Sign Up
               </button>
            </div>
         </div>
      </>
   );
}
