# Deploying the portfolio (free — GitHub Pages or Vercel)

The portfolio is a **100% client-side static site** — no server, no build step, no Node. It runs anywhere that serves static files. React, Babel, and Lucide load from CDN at runtime; all styling and components are local.

You have two ways to ship it.

---

## Option A — single self-contained file (easiest)

`portfolio-standalone.html` bundles everything (CSS tokens, the component bundle, all the page scripts) into **one file**. Fonts and the React/Babel/Lucide CDN scripts still load from the internet, so it needs to be online — but there are no local dependencies to break.

**GitHub Pages**
1. Create a repo (e.g. `portfolio`), or reuse `ramprasathk07.github.io`.
2. Rename `portfolio-standalone.html` → `index.html` and push it to the repo root on the `main` branch.
3. Repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.
4. Live at `https://ramprasathk07.github.io/portfolio/` (or `https://ramprasathk07.github.io/` if you used the user repo).

**Vercel**
1. Put `index.html` (the renamed standalone) in a folder, `git init`, push to GitHub.
2. On vercel.com → **Add New → Project → import the repo**.
3. Framework preset: **Other**. No build command. Output dir: `./`. Deploy.
4. Or, with the Vercel CLI: `vercel` in the folder → accept defaults.

---

## Option B — deploy the project folder (keeps files separate)

If you'd rather keep the design system intact, deploy the **whole project**. The site entry is `ui_kits/portfolio/index.html`, which references `../../styles.css` and `../../_ds_bundle.js` at the project root — those resolve correctly when the project root is the deploy root.

**Vercel:** import the repo, preset **Other**, no build command. Visit `/ui_kits/portfolio/`.
**GitHub Pages:** push the project, enable Pages on `main`/root, visit `/ui_kits/portfolio/`.

To serve it at the site root instead of `/ui_kits/portfolio/`, add a root `index.html` that redirects:
```html
<!doctype html><meta http-equiv="refresh" content="0; url=./ui_kits/portfolio/index.html">
```

---

## Compatibility notes

- **In-browser Babel.** The page transpiles JSX in the browser, so it works with zero tooling but adds a brief first-paint delay and requires JavaScript. Fine for a personal site. If you later want instant load / SEO, the path is to pre-compile the JSX (Vite/esbuild) into one JS file and drop the Babel `<script>` — the components and markup stay identical.
- **HTTPS.** Both hosts serve HTTPS and all CDN/font URLs are HTTPS — no mixed-content issues.
- **Custom domain.** Both hosts support a custom domain free (GitHub Pages: `CNAME` file + DNS; Vercel: Project → Domains).
- **No environment variables, no secrets, no API keys** are used — nothing to configure.
