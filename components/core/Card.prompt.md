# Card

Paper surface with a hairline border — the base container for content blocks. Prefer hairlines over shadow; only `interactive` cards lift on hover.

```jsx
<Card>Static content</Card>
<Card interactive surface="raised" padding="20px">Hover me</Card>
```

Surfaces: `page` (default), `raised` (warm), `pure` (white). Set `interactive` for clickable cards (lift + clay border on hover).
