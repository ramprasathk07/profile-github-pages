/* Blog index + featured post content + 5-month plan data. text/babel. */

const POSTS = [
  {
    slug: 'vllm-internals',
    topic: 'Inference',
    title: 'How vLLM works internally — a deep dive',
    dek: 'PagedAttention, continuous batching, and the block manager, from first principles — and why they let one GPU serve far more requests than naive decoding.',
    date: 'Jun 2026',
    readingTime: '12 min read',
    featured: true,
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
  {
    slug: 'triplequant',
    topic: 'Quantization',
    title: 'TripleQuant: benchmarking Qwen2.5-VL across three quant backends',
    dek: 'A single controlled table comparing llmcompressor, modelopt, and torchAO on prefill latency, decode TPS, VRAM, and OCR accuracy — the comparison that did not exist.',
    date: 'May 2026',
    readingTime: '9 min read',
  },
  {
    slug: 'issuefix-rl',
    topic: 'Post-training',
    title: 'IssueFix-RL: SFT vs DPO vs PPO vs GRPO vs DR-GRPO on real GitHub issues',
    dek: 'Same model, same data, same reward — only the algorithm changes. What KL divergence and entropy actually tell you about policy stability.',
    date: 'Apr 2026',
    readingTime: '14 min read',
  },
  {
    slug: 'mini-vllm',
    topic: 'Systems',
    title: 'A mini-vLLM from scratch: block manager, scheduler, speculative decoding',
    dek: 'Building Inferno-Core — the smallest serving engine that still does the things that matter: paged KV, continuous batching, prefix caching, and a draft model.',
    date: 'Mar 2026',
    readingTime: '11 min read',
  },
  {
    slug: 'attention-kernels',
    topic: 'Kernels',
    title: 'Writing attention kernels: PyTorch → Triton → TileLang → CUDA',
    dek: 'One attention variant, four implementations, one performance table. Where each abstraction earns its keep and where it stops paying off.',
    date: 'Feb 2026',
    readingTime: '13 min read',
  },
];

/* ---- 5-Month Master Plan (Work in Progress) ---- */
const PLAN = {
  version: 'v5',
  window: 'Jun – Oct 2026',
  northStar: 'Land a Research Engineer / AI Systems / LLM Inference role at 30–50 LPA+ (or international equivalent) by Month 5. Two flagship assets drive this: TripleQuant-VLM — the most comprehensive Qwen2.5-VL quantization benchmark published — and IssueFix-RL, a rigorous RLHF comparison that opens research-lab doors inference work alone cannot.',
  stack: [
    { rank: 1, name: 'TripleQuant-VLM', status: 'flagship', timeline: 'Month 1–2', progress: 45, repo: 'https://github.com/ramprasathk07/TripleQuant-VLM', signal: '3-backend quant benchmark (AWQ, TurboQuant KV, Triton attention) on Qwen2.5-VL — the inference-depth flagship. v0.1 baseline + W4A16 table already shipping.', domains: ['quantization','inference','vllm','vlm'] },
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
    note: 'The career asset. This table does not exist anywhere for Qwen2.5-VL — publishing it, even partially filled, is the report that gets noticed.',
    cols: ['Config', 'Decode TPS', 'VRAM GB', 'CER Δ vs FP16', 'Serving'],
    rows: [
      ['FP16 baseline', '—', '—', 'baseline', 'vLLM'],
      ['llmcompressor W4A16', '·', '·', '·', 'vLLM'],
      ['llmcompressor W8A8', '·', '·', '·', 'vLLM'],
      ['modelopt FP8', '·', '·', '·', 'vLLM'],
      ['modelopt NVFP4', '·', '·', '·', 'vLLM'],
      ['modelopt → TRT-LLM', '·', '·', '·', 'TRT-LLM'],
      ['torchAO int4wo', '·', '·', '·', 'torch.compile'],
      ['W4A16 + TurboQuant KV', '·', '·', '·', 'vLLM'],
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
