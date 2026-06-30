# ProjectCard

A repository / project entry — the unit of the Projects grid. Optional badge, serif title (with optional emoji glyph), sans blurb, mono tag row, and monospace links. Border turns clay and lifts on hover.

```jsx
<ProjectCard
  badge="🏆 WINNER · #1"
  icon="⚔️"
  title="Mistral Raid"
  blurb="Dungeon crawler where the boss runs on Mistral AI. Four models, four agents, Voxtral STT."
  tags={['Mistral LLM', 'Voxtral STT', 'Phaser 3']}
  links={[{ label: 'live demo', href: '#' }]}
  repo="https://github.com/ramprasathk07/mistral-raid"
/>
```

Pass `repo` to render a primary "View code" GitHub button (with the GitHub mark) in the card footer; `links` render as small mono text links beside it.

Lay out in a CSS grid (`repeat(auto-fill, minmax(320px, 1fr))`, `gap: 16px`). Keep blurbs to 2–3 lines.
