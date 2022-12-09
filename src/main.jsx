import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./router";

import "./styles.min.css";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p>BARBARA M. M. R.</p>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
