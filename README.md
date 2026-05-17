# ramprasathk07 — portfolio

Personal portfolio site for **Ram Prasath K**, ML Engineer.

Live (after Pages enabled): `https://ramprasathk07.github.io/profile-github-pages/`

## Stack
- Vanilla HTML + Tailwind CDN + Vanilla JS
- Zero build step. Pure static files.
- Hosted free on GitHub Pages.

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on GitHub Pages
1. Push to `main`.
2. Repo Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / root → Save.
3. Wait ~30 seconds. Site lives at `https://<user>.github.io/<repo>/`.

To get a clean root-domain personal site, rename this repo to `ramprasathk07.github.io`.

## Structure
```
index.html                         # single-page portfolio
assets/css/style.css               # custom styles
assets/js/main.js                  # filter + scroll reveal + spotlight
.nojekyll                          # skip Jekyll processing
RamPrasath_K_MLEngineer_2026.pdf   # resume served from /
```

## Customize
- Add new project → copy a `<article class="project-card">` block in `index.html`, set `data-tags` for filtering.
- Add new skill group → copy a `.skill-block` in the stack section.
- Change accent colors → edit `tailwind.config` block in `<head>` (`neon`, `lime`, `magenta`).
