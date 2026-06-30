# Eyebrow

Mono uppercase kicker that sits above a heading. Optionally numbered to echo the portfolio's "// 01 — about" section markers.

```jsx
<Eyebrow index={1}>about</Eyebrow>
<Eyebrow tone="accent" slash={false}>now shipping</Eyebrow>
```

`index` is zero-padded automatically. `slash` toggles the leading "//". Tones: `muted` (default), `accent` (clay), `strong` (ink).
