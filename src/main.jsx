import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { Hero, Human } from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Hero />
    <Human />
  </StrictMode>
);
