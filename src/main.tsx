import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

/* Typekit CSS is injected into index.html at build time (see vite.config.ts). */

const displayOverride = import.meta.env.VITE_ADOBE_DISPLAY_FAMILY?.trim();
if (displayOverride) {
  const names = displayOverride
    .split(",")
    .map((s) => `"${s.trim()}"`)
    .join(", ");
  document.documentElement.style.setProperty(
    "--font-display",
    `${names}, "Fredoka One", "Fredoka", sans-serif`,
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
