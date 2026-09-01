/* Blog index + featured post content + 5-month plan data. text/babel. */

const POSTS = [
  {
    slug: 'moe-diffmoe-part1',
    topic: 'Architecture',
    title: 'Part 1 — The plan, and the first head-to-head: MoE vs Diff-MoE',
    dek: 'Build log, post 1 of 3 — what this project is trying to find out, how it\'s set up so the answer means something, and the first real result.',
    date: 'Aug 2026',
    readingTime: '16 min read',
    mediumUrl: 'https://medium.com/@ramk612000/part-1-the-plan-and-the-first-head-to-head-moe-vs-diff-moe-c89a62ab4e66',
    featured: true,
  },
  {
    slug: 'loss-curve-fix-part2',
    topic: 'Fine-tuning',
    title: 'Part 2 — I wrote the fix. The run never used it.',
    dek: 'Continuation of "My loss curve said 0.027." Same model, same bug family, one new twist: this time the fix existed in the codebase — it just wasn\'t in the config the job actually ran with.',
    date: 'Jul 2026',
    readingTime: '12 min read',
    mediumUrl: 'https://medium.com/@ramk612000/part-2-i-wrote-the-fix-the-run-never-used-it-95c9c2432ddb',
  },
  {
    slug: 'loss-curve-lied',
    topic: 'Fine-tuning',
    title: 'My loss curve said 0.027. My model wouldn\'t stop talking. Part — I',
    dek: 'A finetuning post-mortem, or: how a dashboard lied to me for three epochs.',
    date: 'Jul 2026',
    readingTime: '8 min read',
    mediumUrl: 'https://medium.com/@ramk612000/my-loss-curve-said-0-027-my-model-wouldnt-stop-talking-part-i-6fd58780f8dc',
  },
  {
    slug: 'mamba-moe-postmortem',
    topic: 'Fine-tuning',
    title: 'Fine-Tuning a 30B Hybrid-Mamba MoE on One GPU: A Technical Post-Mortem',
    dek: 'How we LoRA-tuned NVIDIA\'s Nemotron-3-Nano-30B-A3B for a deterministic-reasoning benchmark, the three submission-killing bugs nobody warns you about, and why the model architecture, not the optimizer, decided what was possible.',
    date: 'Jul 2026',
    readingTime: '10 min read',
    mediumUrl: 'https://medium.com/@ramk612000/fine-tuning-a-30b-hybrid-mamba-moe-on-one-gpu-a-technical-post-mortem-f847b59155cf',
  },
  {
    slug: 'nemotron-reasoning',
    topic: 'Fine-tuning',
    title: 'Chasing 0.90 on a 30B Reasoning Model — Nemotron: Our Approach, Honestly',
    dek: 'The strategy we walked in with, the wall we hit at 0.85, every regression we earned, and what we\'d do differently. A story about a Kaggle competition where the model fought back.',
    date: 'Jun 2026',
    readingTime: '8 min read',
    mediumUrl: 'https://medium.com/@ramk612000/chasing-0-90-on-a-30b-reasoning-model-nvidia-nemotron-our-approach-honestly-ef3f7ba12e46',
  },
];

/* ---- 5-Month Master Plan (Work in Progress) ---- */
const PLAN = {
  version: 'v5',
  window: 'Jun – Oct 2026',
  northStar: 'Establish myself as a researcher and development expert in AI systems and large-model inference within five months. Two flagship projects will anchor this journey: TripleQuant-VLM, a comprehensive benchmark of Qwen2.5-VL quantization techniques, and IssueFix-RL, a rigorous study of RLHF approaches that demonstrates both research depth and practical system-building expertise.',
  stack: [
    { rank: 1, name: 'TripleQuant-VLM', status: 'flagship', timeline: 'Month 1–2', progress: 90, repo: 'https://github.com/ramprasathk07/TripleQuant-VLM', signal: 'v1.0 shipped — AWQ/GPTQ/SmoothQuant/FP8 across two runtimes (14× TPS gap, HF eager vs vLLM) plus TurboQuant, a from-scratch KV-cache codec taking usable context 4K → 16K on a 12GB RTX 3060. v2 queued: Triton kernels, vLLM integration, the Qwen2.5-VL OCR/CER table.', domains: ['quantization','inference','vllm','vlm'] },
    { rank: 2, name: 'IssueFix-RL', status: 'research', timeline: 'Month 3–4', progress: 20, repo: 'https://github.com/ramprasathk07/IssueFix-RL', signal: 'Controlled RLHF comparison — SFT vs DPO vs PPO vs GRPO vs DR-GRPO on real GitHub issues. SFT stage underway; reward harness scaffolded.', domains: ['rlhf','post-training','grpo','lora'] },
    { rank: 3, name: 'Inferno-Core', status: 'planned', timeline: 'Month 2–3', blurred: true, signal: 'Mini-vLLM from scratch: block manager, FCFS scheduler, continuous batching, prefix caching, speculative decoding.', domains: ['inference','systems','serving'] },
    { rank: 4, name: 'XFinite-OCR', status: 'planned', timeline: 'Month 1', blurred: true, repo: 'https://github.com/ramprasathk07/XF-ocr.github.io', signal: 'Production VLM serving — Cloudflare Tunnel, Redis, Prometheus. Deployed, observable, OpenAI-compatible.', domains: ['mlops','serving','vlm'] },
    { rank: 5, name: 'Attention Systems Lab', status: 'planned', timeline: 'Month 3–5', blurred: true, signal: 'PyTorch → Triton → TileLang → CUDA. MHA, GQA, Mamba, DeltaNet — one variant, four implementations, one table.', domains: ['kernels','cuda','triton'] },
    { rank: 6, name: 'Tiny Foundation Lab', status: 'planned', timeline: 'Month 5', blurred: true, signal: 'Transformer vs Mamba vs RWKV vs Liquid NN from scratch on TinyStories — architecture breadth.', domains: ['architecture','pretraining'] },
  ],
  months: [
    { m: 'Month 1', when: 'Jun 2026', title: 'Foundation + close TripleQuant v0.1', items: ['FP16 baseline smoke run + W&B wiring', 'W4A16 / W8A8 / W8A16 comparison table', 'Qwen2.5-VL OCR run with CER/WER — the differentiator', 'Tag v0.1, XFinite production polish, publish Blog 1'] },
    { m: 'Month 2', when: 'Jul 2026', title: 'TripleQuant full stack', items: ['modelopt FP8 / NVFP4 + TRT-LLM .engine export', 'torchAO int4 + double quant + autoquant', 'vLLM vs TRT-LLM throughput comparison', 'TurboQuant KV cache Python reference'] },
    { m: 'Month 3', when: 'Aug 2026', title: 'Inferno-Core + start IssueFix-RL', items: ['Block manager, FCFS scheduler, continuous batching', 'Prefix caching → LMCache benchmark arc', 'IssueFix-RL: SFT stage on HumanEvalFix / MBPP', 'One vLLM / SGLang OSS PR'] },
    { m: 'Month 4', when: 'Sep 2026', title: 'IssueFix-RL comparison matrix', items: ['DPO preference pairs, then PPO / GRPO / DR-GRPO', 'Execution-based composite reward + ablations', 'SWE-Bench-Lite holdout-repo evaluation', 'KL divergence + entropy analysis writeup'] },
    { m: 'Month 5', when: 'Oct 2026', title: 'Depth + breadth + close', items: ['Attention Systems Lab kernel progression', 'Tiny Foundation Models from scratch on TinyStories', 'Portfolio + blog consolidation', 'Targeted applications round'] },
  ],
  benchmark: {
    note: 'v1.0 shipped — the numbers that exist today, on Qwen3-1.7B / a 12GB RTX 3060. v2 queued: Triton kernels for TurboQuant (5–10× slower unfused right now), native vLLM integration, per-channel key quantization, and the Qwen2.5-VL OCR/CER table this was originally scoped for.',
    cols: ['Metric', 'Result', 'Setup'],
    rows: [
      ['Decode throughput', '4.1 → 57.9 tok/s', 'W4A16 · HF eager → vLLM (14× gap)'],
      ['Usable context', '4,096 → 16,384 tok', 'TurboQuant KV codec (rotation + Lloyd-Max)'],
      ['VRAM footprint', '−31% vs FP16', 'torchAO int8wo · quality within noise'],
    ],
  },
  reward: 'reward = 0.6·test_pass + 0.1·syntax + 0.1·lint + 0.1·compile + 0.1·minimal_patch',
  methods: [
    { m: 'SFT', watch: 'Baseline pass rate; training loss' },
    { m: 'DPO', watch: 'Policy shift vs SFT; reward margin' },
    { m: 'PPO', watch: 'Clip fraction; KL trajectory; advantage variance' },
    { m: 'GRPO', watch: 'Group reward variance; KL; entropy' },
    { m: 'DR-GRPO', watch: 'Reward stability vs GRPO; policy-collapse risk' },
  ],
};

Object.assign(window, { POSTS, PLAN });
