import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./layouts/App";
import SimpleReactLightbox from "simple-react-lightbox";
import { AppProvider } from "./data2";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <HelmetProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </HelmetProvider>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
