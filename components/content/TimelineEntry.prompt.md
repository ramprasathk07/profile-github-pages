# TimelineEntry

One role in the experience timeline. Clay node on a hairline rail, serif role · org heading, mono dates, optional summary, `▸` bullets, and an outline tag row.

```jsx
<TimelineEntry
  role="Jr. R&D Engineer"
  org="Ubisoft India Studios"
  summary="Game AI & QC — Vision-Action models"
  dates="Oct 2025 — present"
  bullets={['Architected a diffusion-transformer Vision-Action framework…']}
  tags={['PyTorch', 'Diffusion Transformers', 'C++']}
/>
```

Set `last` on the final entry to drop the connecting rail. Stack entries directly (the rail joins them).
