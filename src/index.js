import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import AuthContextProvider from "./context/auth/auth-context";
import { VideosContextProvider } from "./context/videos/videos-context";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <VideosContextProvider>
        <Router>
          <App />
        </Router>
      </VideosContextProvider>
    </AuthContextProvider>
  </StrictMode>,
  rootElement
);
