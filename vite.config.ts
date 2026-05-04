import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { ADOBE_TYPEKIT_KIT_ID } from "./src/config/adobeFonts";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), "");
  // CI (e.g. GitHub Actions) sets VITE_* in the shell; loadEnv only reads .env files.
  const typekitKit = (
    fileEnv.VITE_ADOBE_FONTS_KIT ||
    process.env.VITE_ADOBE_FONTS_KIT ||
    ADOBE_TYPEKIT_KIT_ID
  )
    .trim();

  return {
    plugins: [
      react(),
      {
        name: "inject-typekit",
        transformIndexHtml(html: string) {
          if (!typekitKit) return html;
          const link = `<link rel="stylesheet" href="https://use.typekit.net/${typekitKit}.css" />`;
          return html.replace("<head>", `<head>\n    ${link}`);
        },
      },
    ],
    // GitHub Pages project site base path.
    base: "/OneHeartOrchestra/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
