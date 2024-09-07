import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainContext from "./context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>
);
