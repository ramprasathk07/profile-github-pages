# PlanRepo

A roadmap entry for the Work-in-Progress tab, mirroring the master plan's priority stack. Big serif rank number, mono repo name, a status pill, timeline, the hiring signal, and target-company tags.

```jsx
<PlanRepo
  rank={1}
  name="TripleQuant-VLM"
  status="flagship"
  timeline="Month 1–2"
  progress={45}
  signal="3-backend quant benchmark on Qwen2.5-VL — the inference-depth flagship."
  domains={['quantization', 'inference', 'vllm']}
/>
<PlanRepo rank={3} name="Inferno-Core" status="planned" timeline="Month 2–3"
  blurred signal="Mini-vLLM from scratch…" domains={['inference', 'systems']} />
```

Statuses: `flagship` (clay), `active` (green), `research` (cobalt), `next` (amber), `planned` (grey). `domains` are short topic tags (mlops, llm, lora…) — not company names. Set `progress` (0–100) on started repos for a bar; set `blurred` on not-yet-started repos to redact the description into a name-only "coming soon" treatment. Stack directly; each draws its own bottom hairline.
