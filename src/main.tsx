import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Style
import "@barito-bahalap/styles";
import "@barito-bahalap/styles/brands/tech";
import "@barito-bahalap/styles/brands/scopes";
import "./styles/app.css";
import "./styles/theme.css";
// App
import { App } from "./app/App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element #root not found");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
