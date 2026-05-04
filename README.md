# Magi & The One Heart Orchestra — website

Interactive band site (Vite, React, TypeScript, Tailwind CSS v4, Framer Motion). Structure and flow are inspired by [The Alley Kats](https://www.thealleykatsvibe.com/index.html) home and [EPK](https://www.thealleykatsvibe.com/epk.html) style: clear sections, press-ready EPK, shows, and music — with motion, hover interactions, and a cursor-reactive glow for a more playful feel while staying tour-poster professional.

## Content

Edit **`src/content/site.ts`** for bios, quotes, lineup, album track list, show dates, social URLs, and booking email.

## Run locally

```bash
npm install
npm run dev
```

## Publish to GitHub Pages

This project uses **hash routing** (`/#/music`, etc.) so it works on GitHub Pages without extra server rules.

1. Create the repo (or use [Dbaileyfam/OneHeartOrchestra](https://github.com/Dbaileyfam/OneHeartOrchestra)) and push this folder as the repo root (or make this directory its own git repo).
2. In the GitHub repo: **Settings → Pages → Branch `gh-pages` / root**.
3. From this directory:

```bash
npm run deploy
```

The site will be available at **https://dbaileyfam.github.io/OneHeartOrchestra/** (adjust `homepage` in `package.json` if the repo name or owner changes).

## Custom domain (optional)

Point **oneheartorchestra.com** at GitHub Pages and add a `CNAME` file in `public/`. You can then switch from `HashRouter` to `BrowserRouter` and set `vite.config.ts` `base` to `/` if you prefer URLs without `#`.
