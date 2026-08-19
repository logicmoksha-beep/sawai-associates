import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ScrollToHash from "./components/ScrollToHash";

createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter>
    <ScrollToHash />
    <App />
  </BrowserRouter>
</React.StrictMode>
);