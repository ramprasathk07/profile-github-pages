# Ram Prasath — Portfolio Design System

A personal design system for **Ram Prasath K**, an ML Engineer (LLM/VLM inference, multi-agent systems, edge AI). It powers a complete redesign of his portfolio — a minimal, editorial, research-paper aesthetic in the spirit of the [Thinking Machines blog](https://thinkingmachines.ai/blog/lora/) — with tabbed sections for **About**, **Blog**, **Work in Progress**, and **Projects**.

> **Brief:** redesign the existing terminal/hacker-themed portfolio (green-on-black, monospace) into something minimal and editorial, with a Thinking-Machines-style blog and a "work in progress" tab surfacing the 5-month master plan.

## Sources

- **Live site (redesigned away from):** https://ramprasathk07.github.io/profile-github-pages/ — vanilla HTML + Tailwind, terminal aesthetic. All bio/experience/project/skills copy was lifted from here.
- **Reference aesthetic:** https://thinkingmachines.ai/blog/lora/ — minimal warm-paper editorial research blog.
- **Uploaded résumés** (`uploads/`): `RamPrasathK_MLEngineer2026.pdf` (primary, full bio), plus SAP / Qualcomm / HPE / Q variants. Used for experience, skills, achievements, education.
- **Uploaded plans** (`uploads/`): `RamPrasath_5Month_Plan_v5.docx` (and v4) — the priority stack, TripleQuant benchmark table, IssueFix-RL design, and month-by-month roadmap that fill the **Work in Progress** tab.
- **GitHub:** https://github.com/ramprasathk07 · **LinkedIn:** https://www.linkedin.com/in/ramprasathk07/

No Figma or live codebase was attached; the live HTML site (read in full) is the content source of truth.

---

## CONTENT FUNDAMENTALS

**Voice.** First-person, direct, plain-spoken, concrete. "I work on the serving and fine-tuning layer of modern LLMs." Numbers do the bragging, not adjectives: "−20% manual review", "95% accuracy, 4% EER", "85% reasoning". Verbs are shipping verbs — *built, architected, optimized, shipped, profiled, owned*.

**Casing.** Lowercase for UI chrome and section markers (`// 01 — about`, `~/whoami`, `resume.pdf`), a deliberate nod to the terminal heritage. Sentence case for prose and headings. UPPERCASE only for mono eyebrow labels (tracked out) and short status badges (`WINNER · #1`, `FLAGSHIP`).

**I vs you.** Mostly **I** (the author speaking). Occasional **you** to address the reader/recruiter directly in CTAs ("Hit me up if you're shipping LLMs into production").

**Emoji.** Used *sparingly and only as project/award glyphs* carried over from the source — 🛡️ Sentinel-AI, ⚔️ Mistral Raid, 🦅 PatchHawk, 🏆 winner. Never in body prose, never decoratively. The editorial redesign leans on mono labels and the clay accent instead of emoji.

**Technical density.** Tags are dense and unapologetic (`vLLM`, `W4A16`, `GRPO`, `MLA`, `YaRN`, `RT-DETR`). The audience is technical recruiters and engineers; jargon is a feature. Spell out the payoff once, then let the acronyms run.

**Vibe.** A working engineer's notebook made presentable. Confident but not boastful; the roadmap is "a live, public plan — not a wishlist." Examples:
- Headline: *"Building LLMs at the metal."*
- Blog dek: *"Written while building them."*
- Plan north star: *"This benchmark table does not exist anywhere for Qwen2.5-VL. Publishing it is the report that gets noticed."*

---

## VISUAL FOUNDATIONS

**Overall.** Warm-paper editorial minimalism. Think research blog / printed monograph, not SaaS landing page or terminal. Generous whitespace, hairline rules over boxes, a narrow serif reading column for long-form.

**Color.** Monochrome ink-on-paper with a single warm signal.
- Background is warm off-white paper (`--paper #FBF9F4`), raised surfaces a shade deeper (`--paper-raised #F4F0E8`).
- Text is a warm near-black ink ramp: `--ink #1B1A16` → `--ink-muted #56524A` → `--ink-faint #908B7E` → `--ink-ghost #B8B2A4`.
- One accent: **terracotta clay** (`--clay #BB4A2C`) for links, active tab underlines, section-marker slashes, the cursor block, small marks. A secondary **cobalt** (`#2A4B8D`) appears only in code/technical highlights. Muted green/amber for status. **No gradients, no bluish-purple, no neon.**

**Type.** Three families, clear roles.
- **Newsreader** (serif) — display headlines (light, weight 300, tracking −0.025em) and long-form blog/prose body (18–21px, line-height 1.72–1.78). This carries the research-paper feel.
- **Hanken Grotesk** (sans) — all UI chrome: nav, buttons, captions, bullet text, tags.
- **JetBrains Mono** — eyebrow/kicker labels, code, dates, technical tags, the `~/` wordmark prompt. A subtle thread back to the terminal origin.

**Spacing.** 4px base scale. Sections breathe (`56–64px` vertical padding). Cards use `20–24px` padding. Reading columns are capped (`68ch` prose, `680–720px` blog).

**Backgrounds & texture.** Flat paper, no imagery behind content. The only texture is a faint diagonal hatch inside figure placeholders (`repeating-linear-gradient`, ~2.5% ink). Imagery (when added by the user) sits in bordered figure frames with mono captions — never full-bleed.

**Borders & cards.** Hairline first. `1px solid --hairline (#E5E0D5)` is the default separator and card edge. Cards are lightly rounded (`--radius-md 8px`), flat by default. Shadows exist (`--shadow-md`) but are reserved for hover lift only — most surfaces never cast one.

**Corner radii.** Small and restrained: tags `3px`, buttons/inputs `5px`, cards `8px`, panels `12px`, pills/status `999px`.

**Animation.** Quiet and quick. Tab underlines slide (`scaleX`, 200ms `ease-out`). Cards lift `2px` and borders shift to clay on hover. Arrow links nudge their `→` 3px right. The hero cursor block blinks. No bounces, no parallax, no infinite decorative loops. `--ease-out: cubic-bezier(0.22,0.61,0.36,1)`, durations 120/200/360ms.

**Hover states.** Buttons lift 1px + darken fill. Cards lift 2px + clay border + soft shadow. Links gain a clay underline. Tabs shift from `--ink-faint` to `--ink`.

**Press / active.** Active tab/filter is ink-filled or clay-underlined. No shrink — selection is shown by weight and color, not motion.

**Transparency & blur.** One place: the sticky nav uses `rgba(251,249,244,0.86)` + `backdrop-filter: blur(10px) saturate(140%)` so content scrolls under it. Everywhere else surfaces are opaque.

**Imagery vibe.** Warm, neutral, document-like. Placeholder figures are paper-toned with a faint hatch. When real images are added they should be calm and editorial (diagrams, screenshots, charts) — not glossy hero photography.

**Signature motifs.** The `~/` mono prompt before the serif wordmark · numbered `// 01 — about` section markers with a clay slash · `ram.json` whoami card · the blinking clay cursor · dense mono tag rows · the clay node-on-a-rail experience timeline.

---

## ICONOGRAPHY

The source site used **emoji** (🛡️ ⚔️ 🏆 🦅) as project/award glyphs and **Unicode arrows** (`→ ↗ ▸ █`) as inline marks. The redesign **keeps** those emoji glyphs (they're brand-authentic to the projects) and the Unicode marks (`→` in links, `▸` in bullets, `█` cursor, `↗` external).

For UI chrome — social links, nav affordances, the back arrow — the system uses **[Lucide](https://lucide.dev)** line icons (loaded from CDN, `lucide@0.460.0`). Lucide's 2px-stroke, currentColor, rounded-cap style matches the minimal editorial weight. Icons used: `github`, `linkedin`, `mail`, `arrow-up-right`, `arrow-left`. They inherit text color via `currentColor` and size via a `1em` wrapper.

> **Substitution flag:** Lucide is a substitution — the original site had no icon set (emoji + Unicode only). If you prefer no icon library, the social links degrade gracefully to mono text labels. Swap or remove via the `<Icon>` helper in `ui_kits/portfolio/util.jsx`.

No icon font, no SVG sprite, no custom-drawn iconography. Emoji are intentional and limited to project/award badges.

---

## FONTS

All three families load from the **Google Fonts CDN** via `@import` in `tokens/fonts.css`.

> **Substitution flag:** These are Google Fonts matches, not licensed/local binaries (the project sandbox cannot download font files). Newsreader, Hanken Grotesk, and JetBrains Mono are all open-source and render everywhere, but if you want self-hosted woff2 (for offline use or a different display serif), drop the files in `assets/fonts/` and replace the `@import` with `@font-face` rules. Flagging so you can confirm the type direction before it's locked.

---

## INDEX

**Root**
- `styles.css` — global entry point (import list only). Consumers link this.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible wrapper for Claude Code.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `base.css` (light reset + `.ds-eyebrow` / `.ds-prose` utilities).

**`guidelines/`** — foundation specimen cards (Design System tab): paper & ink, signal & status, display serif, prose & body, sans & mono, type scale, spacing scale, radii & borders, wordmark, voice & tone.

**`components/core/`** — `Button`, `Tag`, `Eyebrow`, `Tabs`, `Card`, `Stat`, `SectionDivider`, `ArrowLink`.
**`components/content/`** — `ProjectCard`, `TimelineEntry`, `BlogCard`, `PlanRepo`, `Callout`.
Each component ships `.jsx` + `.d.ts` + `.prompt.md`; each directory has one `@dsCard` demo card.

**`ui_kits/portfolio/`** — the full interactive site. `index.html` (tabbed shell) composing `Nav` / `Footer` (`app.jsx`), `About.jsx`, `Blog.jsx` (index + Thinking-Machines-style post reader), `Projects.jsx` (filterable repo grid), `WorkInProgress.jsx` (5-month plan), with `util.jsx` (helpers + data) and `blogdata.jsx` (posts + plan data).

**Namespace:** components are exposed at `window.RamPrasathPortfolioDesignSystem_321ff2.<Component>` after the bundle (`_ds_bundle.js`) compiles.
