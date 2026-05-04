import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const adobeKit = import.meta.env.VITE_ADOBE_FONTS_KIT?.trim();
if (adobeKit) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://use.typekit.net/${adobeKit}.css`;
  document.head.appendChild(link);
}

const displayOverride = import.meta.env.VITE_ADOBE_DISPLAY_FAMILY?.trim();
if (displayOverride) {
  const names = displayOverride
    .split(",")
    .map((s) => `"${s.trim()}"`)
    .join(", ");
  document.documentElement.style.setProperty(
    "--font-display",
    `${names}, "Fredoka One", "Fredoka", system-ui, sans-serif`,
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
