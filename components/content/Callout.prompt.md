# Callout

An inset note for prose and blog bodies — left clay rule, raised paper background, serif text. For asides, key results, or hard rules.

```jsx
<Callout label="why this matters">
  This benchmark table does not exist anywhere for Qwen2.5-VL. Publishing it is the report that gets noticed.
</Callout>
<Callout tone="info" label="holdout rule">Never allow the same repository in both train and test.</Callout>
```

Tones: `neutral` (clay), `info` (cobalt), `positive` (green). `label` is an optional mono kicker.
