import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./layouts/App";
import SimpleReactLightbox from "simple-react-lightbox";
import { AppProvider } from "./data2";

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <AppProvider>
        <App />
      </AppProvider>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
