import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { VideosContextProvider } from "./context/videos-context";
import setupMockVideoServer from "./video-lib-server/mock-server";

setupMockVideoServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <VideosContextProvider>
      <Router>
        <App />
      </Router>
    </VideosContextProvider>
  </StrictMode>,
  rootElement
);
