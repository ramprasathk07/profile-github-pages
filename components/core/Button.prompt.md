# Button

The primary action control — ink-filled by default, restrained and editorial. Use for the few real actions on a page (resume, contact, view repo).

```jsx
<Button variant="primary" iconRight="→">See projects</Button>
<Button variant="secondary" size="sm">resume.pdf ↗</Button>
<Button variant="accent">Get in touch</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (ink fill), `secondary` (hairline outline), `accent` (clay fill — reserve for one CTA), `ghost` (text-only). Sizes `sm | md | lg`. Pass `href` to render an anchor. Lifts 1px on hover.
