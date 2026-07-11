# Blog image assets

Drop blog figure images here, then point each `<Figure>` at them. Paths are
**relative to `ui_kits/portfolio/index.html`**, so a file at
`blog-assets/loss-curve-lied/02-lr-schedule.png` is wired as
`src="blog-assets/loss-curve-lied/02-lr-schedule.png"`.

## How to wire an image

1. Save the image into the matching folder below, using the suggested filename.
2. Open `ui_kits/portfolio/Blog.jsx`, find the `<Figure ... src="" ... />` with the
   matching caption, and set `src` to the path:

   ```jsx
   <Figure label="figure 2" ratio="16 / 9"
     src="blog-assets/loss-curve-lied/02-lr-schedule.png"
     caption="The learning-rate schedule ..." />
   ```

   - `src` empty  → striped placeholder box (current state).
   - `src` set    → the real image renders (full width, auto height; `ratio` is
     ignored once an image is present, so the image keeps its natural proportions).
3. Leave `caption` as-is (or edit), commit both the image and `Blog.jsx`.

`Figure` lives in `ui_kits/portfolio/util.jsx` — it already supports `src`/`alt`.

## Currently wired (in Blog.jsx)

### loss-curve-lied/  ("My loss curve said 0.027…")
- `loss-graph.webp`   — figure 1 · 4-panel training dashboard (loss / entropy / LR / grad-norm)
- `loss-results.webp` — figure 2 · base vs. fine-tuned behavioral eval table

### mamba-moe-postmortem/  ("Fine-Tuning a 30B Hybrid-Mamba MoE…")
- `Nvidia-nemotron-moe.webp` — figure 1 · Nemotron-3-Nano-30B-A3B layer/expert layout

To add another figure, drop the image here and add a `<Figure src="blog-assets/<post>/<file>" caption="…" />` in the matching essay in `Blog.jsx`.

## Notes
- Prefer PNG/WebP; keep each under ~300 KB so GitHub Pages stays fast.
- Filenames are only a convention — any name works as long as `src` matches.
- To add a figure to the Nemotron essay too, drop a `nemotron-reasoning/` folder here
  and add a `<Figure src="blog-assets/nemotron-reasoning/…">` in `NemotronPost`.
