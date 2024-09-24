import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastWrapper } from "keep-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <App />
    <ToastWrapper />
  </React.StrictMode>
);
