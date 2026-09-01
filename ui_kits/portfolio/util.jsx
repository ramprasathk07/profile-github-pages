/* Shared helpers + data for the portfolio UI kit.
   Loaded as text/babel; attaches everything to window. */

const DS = window.RamPrasathPortfolioDesignSystem_321ff2;

/* ---- Lucide icon wrapper (line icons, currentColor, 1em) ---- */
function Icon({ name, size = 16, stroke = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      try { window.lucide.createIcons({ attrs: { 'stroke-width': stroke }, root: ref.current }); } catch (e) {}
    }
  });
  return <span ref={ref} style={{ display: 'inline-flex', width: size, height: size, color: 'currentColor', ...style }} className="lucide-host" />;
}

/* ---- Figure: editorial research-paper style ----
   Pass `src` to render a real image (path is relative to index.html, e.g.
   "blog-assets/loss-curve-lied/01-lr-schedule.png"). Omit `src` to render the
   striped placeholder box labelled with `label`. */
function Figure({ caption, label = 'figure', ratio = '16 / 9', src = '', alt = '', style = {} }) {
  return (
    <figure style={{ margin: '36px 0', ...style }}>
      {src ? (
        <img src={src} alt={alt || caption || label} loading="lazy" style={{
          display: 'block', width: '100%', height: 'auto',
          border: '1px solid var(--hairline)', borderRadius: 'var(--radius-md)',
        }} />
      ) : (
      <div style={{
        aspectRatio: ratio, background: 'var(--paper-raised)',
        border: '1px solid var(--hairline)', borderRadius: 'var(--radius-md)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 11px, rgba(27,26,22,0.025) 11px, rgba(27,26,22,0.025) 12px)',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--ink-ghost)',
        }}>{label}</span>
      </div>
      )}
      {caption && (
        <figcaption style={{
          fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ink-faint)',
          marginTop: 12, lineHeight: 1.5, textAlign: 'center',
        }}>{caption}</figcaption>
      )}
    </figure>
  );
}

/* ============================ DATA ============================ */

const PROFILE = {
  name: 'Ram Prasath K',
  role: 'ML Engineer',
  location: 'Pune, India',
  email: 'ramk612000@gmail.com',
  phone: '(+91) 9943933752',
  github: 'https://github.com/ramprasathk07',
  linkedin: 'https://www.linkedin.com/in/ramprasathk07/',
  medium: 'https://medium.com/@ramk612000',
  status: 'currently @ Ubisoft India · open to inference / agentic AI roles',
  headline: 'Building LLMs at the metal.',
  tagline: 'ML Engineer with 2+ years shipping production LLM/VLM inference, multi-agent systems, and edge AI. Quantization on RTX 4090 / MI300X, ReAct + MCP orchestration, and diffusion-transformer Vision-Action models for autonomous gameplay agents.',
  ramjson: {
    role: 'ML Engineer',
    focus: ['LLM', 'VLM', 'agents'],
    gpus: ['4090', 'Pro 6000', 'MI300X'],
    quant: 'W4A16 | W8A8 | AWQ',
    tuning: 'SFT|LoRA|QLoRA|DPO|GRPO',
    status: 'shipping',
  },
};

const STATS = [
  { value: '2+', label: 'years in production AI' },
  { value: '#1', label: "Mistral AI Hackathon '26", accent: true },
  { value: '85%', label: 'Nemotron Nano reasoning' },
];

const PROFILE_PROSE = [
  'I work on the serving and fine-tuning layer of modern LLMs — vLLM with W8A8 and W4A16 quantization, multi-agent orchestration on Google ADK + MCP, and inference profiling for tokens/sec, TTFT, and cost-per-request under tight GPU budgets.',
  'At Ubisoft India I build diffusion-transformer Vision-Action models for autonomous gameplay agents. Before that at Ninestars I shipped a YOLO + RT-DETR layout-annotation pipeline (4× throughput, −20% manual review) and a multi-agent platform on Google ADK + MCP reaching 92% tool-call success. At Bosch I owned a ResNet-SE voice biometrics system end-to-end onto NXP edge silicon.',
  'I won #1 at the Mistral AI Worldwide Hackathon 2026 with Mistral Raid — an LLM-driven dungeon crawler boss that adapts to your voice. I am an IEEE-published author and hold a patent in voice-driven AI.',
];

const EXPERIENCE = [
  {
    role: 'Jr. R&D Engineer', org: 'Ubisoft India Studios',
    summary: 'Game AI & QC — Vision-Action models for autonomous agents',
    dates: 'Oct 2025 — present',
    bullets: [
      'Diagnosed and resolved training instability in NVIDIA NitroGen (Vision-Language-Action) fine-tuning pipelines — traced data, optimizer, and architecture failures to improve training reliability for Game AI workflows.',
      'Built EagleEye Snap inside Ubisoft\'s C++ Anvil engine to detect triangle-level mesh clipping, integrating a LoRA fine-tuned Qwen-VL classifier to separate intentional from unintended geometry intersections.',
      'Designed a hybrid RAG system over Perforce changelist history — BM25 + vector retrieval + reranking — to accelerate regression root-cause analysis across game builds.',
    ],
    tags: ['PyTorch', 'Diffusion Transformers', 'Vision-Action', 'C++', 'C#', 'Anvil', 'P4V', 'Jira'],
  },
  {
    role: 'Data Science Engineer', org: 'Ninestars Information Technologies',
    summary: 'R&D — production AI: OCR, document intelligence, multi-agent automation',
    dates: 'Jul 2024 — Sep 2025',
    bullets: [
      'Integrated YOLO + RT-DETR for layout-aware annotation acceleration via a Flask backend — 4× labeling throughput, −20% manual review, +15% entity-extraction precision.',
      'Built backend inference services on FastAPI, PostgreSQL, and gRPC to support scalable document-understanding workflows and low-latency model serving.',
      'Optimized VLM inference with vLLM (W8A16 / W4A16 quantization) on RTX 4090 — profiled TTFT, decode throughput, and request concurrency to hold stable low-latency serving in production.',
      'Architected a multi-agent platform on Google ADK + MCP serving self-hosted GPT-OSS-20B via vLLM — Langfuse eval pipelines reaching 92% tool-call success across enterprise workflows.',
    ],
    tags: ['vLLM', 'YOLO', 'RT-DETR', 'Flask', 'FastAPI', 'PostgreSQL', 'gRPC', 'Google ADK', 'MCP', 'GPT-OSS-20B', 'Langfuse', 'AWS'],
  },
  {
    role: 'AI/ML Research Engineer (Intern)', org: 'Bosch Global Software Technologies',
    summary: 'HMI — 11-month research → NXP edge deployment',
    dates: 'Aug 2023 — Jul 2024',
    bullets: [
      'Built a ResNet-SE automotive voice authentication system with anti-spoofing — 95% accuracy, 4% EER under real-world noisy driving conditions.',
      'Trained multilingual speaker recognition models on VoxCeleb and AI4Bharat IndicSuperb; deployed via ONNX / TFLite on NXP edge hardware (Android target).',
      'Built an experimental speaker-diarization pipeline for multi-speaker automotive audio using ECAPA-TDNN embeddings and clustering.',
    ],
    tags: ['PyTorch', 'ResNet-SE', 'ECAPA-TDNN', 'TensorFlow Lite', 'ONNX', 'NXP Edge', 'Android', 'VoxCeleb', 'IndicSuperb'],
  },
];

const STACK = [
  { group: 'Languages', items: ['Python', 'C++', 'C#', 'SQL'] },
  { group: 'ML Serving', items: ['vLLM', 'FastAPI', 'Flask', 'gRPC', 'Docker', 'AWS', 'Linux', 'CI/CD', 'MCP Servers', 'OpenAI-compat APIs'] },
  { group: 'Agentic Systems', items: ['Google ADK', 'MCP', 'ReAct', 'Self-Reflection', 'Hierarchical Delegation', 'RAG'] },
  { group: 'Model Optimization', items: ['W8A8', 'W4A16', 'AWQ', 'GPTQ', 'SmoothQuant', 'FP8', 'KV-cache Codec', 'Continuous Batching', 'ONNX', 'TFLite', 'Distillation', 'QAT'] },
  { group: 'Fine-tuning', items: ['PyTorch', 'HF Transformers', 'SFT', 'LoRA', 'QLoRA', 'DPO', 'PPO', 'GRPO', 'FSDP'] },
  { group: 'Eval & Observability', items: ['tokens/sec', 'TTFT', 'cost/req', 'W&B', 'LLM-as-judge', 'Langfuse', 'MLflow'] },
  { group: 'Data & Storage', items: ['PostgreSQL', 'pgvector', 'Neo4j', 'Qdrant'] },
  { group: 'GPUs / Hardware', items: ['RTX 4090', 'RTX Pro 6000', 'AMD MI300X', 'NXP Edge'] },
];

const ACHIEVEMENTS = [
  { kicker: 'WINNER · #1', title: 'Mistral AI Worldwide Hackathon 2026', body: 'Online track — Mistral Raid: an AI dungeon crawler with adaptive LLM bosses, Voxtral STT, and real-time combat telemetry.' },
  { kicker: 'AMD × UNSLOTH × PYTORCH', title: 'Synthetic Data AI Agents Challenge', body: 'Fine-tuned QA agents with Synthetic-Data-Kit on AMD Instinct MI300X — SFT, LoRA, QLoRA, DPO on next-gen GPU.' },
  { kicker: 'NVIDIA · KAGGLE', title: 'Nemotron Reasoning Challenge', body: 'Improved Nemotron-3-Nano reasoning to 85% — synthetic data curation, SFT + LoRA + GRPO on RTX Pro 6000.' },
];

const RESEARCH = [
  { title: 'Appearance-Trajectory Network for Video Anomaly Detection', venue: 'ICCCNT 2024 · IEEE · IIT Mandi', body: 'Memory-augmented CNN for unsupervised video surveillance — 82% AUC (appearance), 84.9% AUC (skeleton), with integrated video captioning.' },
  { title: 'Simultaneous Voice Auth + Intent/Entity Classification', venue: 'Patent No. 202441102999 · filed Dec 2024', body: 'Voice authentication combined with real-time intent + entity classification for secure, context-aware decision automation.' },
];

const EDUCATION = [
  { school: 'IIT Madras', degree: 'BSc Data Science & Applications (Online)', when: 'Dec 2024' },
  { school: 'Amrita Vishwa Vidyapeetham', degree: 'M.Tech Data Science · School of AI · CGPA 8.5/10', when: 'Jun 2024' },
  { school: 'SASTRA Deemed University', degree: 'B.Tech Mechanical Engineering', when: 'Jun 2022' },
];

const GH = 'https://github.com/ramprasathk07/';

const PROJECTS = [
  { cat: ['featured','agents','security'], badge: '★ NEW · FLAGSHIP', badgeTone: 'solid', icon: '🛡️', title: 'Sentinel-AI', blurb: 'Autonomous multi-agent supply-chain security for every Pull Request — running 100% on your own infrastructure. Eight specialized agents work as a coordinated immune system across Detect → Validate → Patch.', tags: ['Google ADK','A2A','Ollama','vLLM','Multi-Agent'], repo: GH + 'Sentinel-AI-Prod' },
  { cat: ['featured','hackathon','agents'], badge: '🏆 WINNER · #1', badgeTone: 'accent', icon: '⚔️', title: 'Mistral Raid', blurb: 'Dungeon crawler where the boss runs on Mistral AI. Four models powering four agents; Voxtral transcribes your voice and the boss generates personalized taunts + attack mechanics, voiced by ElevenLabs.', tags: ['Mistral LLM ×4','Voxtral STT','ElevenLabs','Phaser 3'], links: [{label:'live demo',href: GH + 'mistral-raid'}], repo: GH + 'mistral-raid' },
  { cat: ['featured','quantization','llm'], badge: 'v1.0 shipped · 14× runtime gap', badgeTone: 'cobalt', title: 'TripleQuant-VLM', blurb: 'Unified quant benchmark across AWQ, GPTQ, SmoothQuant, and FP8 on two runtimes — the same W4A16 checkpoint runs 4.1 tok/s on HF eager vs 57.9 tok/s under vLLM. TurboQuant, a from-scratch KV-cache codec (rotation + Lloyd-Max), pushes usable context 4K → 16K on a 12GB RTX 3060.', tags: ['AWQ','GPTQ','SmoothQuant','FP8','TurboQuant KV','vLLM'], repo: GH + 'TripleQuant-VLM' },
  { cat: ['featured','agents','rag'], badge: '★ NEW · private RAG', badgeTone: 'accent', icon: '📚', title: 'LEANN', blurb: 'RAG on everything — 97% storage savings while running a fast, accurate, 100% private RAG application on your personal device. No data leaves the machine.', tags: ['RAG','On-device','Vector Index','Privacy'], repo: GH + 'LEANN' },
  { cat: ['agents','hackathon'], badge: "Meta OpenEnv Hackathon '26", badgeTone: 'neutral', icon: '🦅', title: 'PatchHawk', blurb: 'Autonomous DevSecOps agent driven by GRPO. The reward is tied directly to patch success inside a real Docker execution sandbox — closing detection → validation → remediation through grounded RL.', tags: ['GRPO','OpenEnv','Docker Sandbox','RL','W&B'], repo: GH + 'PatchHawk' },
  { cat: ['featured','llm','fine-tuning'], badge: 'controlled ablation · complete', badgeTone: 'neutral', title: 'Differential-MoE', blurb: 'Four 209M-param transformers trained from scratch on free Kaggle 2×T4 — a controlled 2×2 ablation isolating differential attention from top-2 MoE. MoE alone cuts −0.129 nats vs. dense (wins 96% of test windows); combined gain recovers only 56% of the additive total.', tags: ['MoE','Differential Attention','RoPE','RMSNorm','Ablation'], repo: GH + 'Differential-MOE' },
  { cat: ['featured','rag','llm'], badge: '★ NEW · production RAG', badgeTone: 'accent', icon: '📖', title: 'ArxivSage', blurb: 'Production-grade RAG over arXiv papers — hybrid BM25 + dense retrieval with reciprocal rank fusion, cross-encoder reranking, every component swappable from config. 235 papers / 13k chunks, 61.5% recall@1 (factoid), 127 tests.', tags: ['RAG','BM25','Cross-Encoder','Chroma','Langfuse'], repo: GH + 'RAG' },
  { cat: ['quantization','llm'], badge: 'in progress · TensorRT', badgeTone: 'neutral', title: 'Tensor-RT-exp', blurb: 'Qwen3-VL-2B rebuilt from scratch and compiled through TensorRT — the vision encoder runs 1.6–2.2× faster than PyTorch eager. Found the checkpoint\'s native BF16 underperforms FP16 on this architecture; decoder deployment via TensorRT-LLM in progress.', tags: ['TensorRT','TensorRT-LLM','Qwen3-VL','Triton','ONNX'], repo: GH + 'Tensor-RT-exp' },
  { cat: ['vision'], badge: 'unified trainer', badgeTone: 'neutral', title: 'simple_yolo_detr', blurb: 'Single-config, unified training + inference for the full YOLO (v3 → v11) and DETR family (DETR, Conditional, Deformable, DETA, RT-DETR, YOLOS). ONNX export, one dispatcher script.', tags: ['YOLO v3-v11','DETR','RT-DETR','DETA','ONNX'], repo: GH + 'simple_yolo_detr' },
  { cat: ['fine-tuning','hackathon'], badge: 'Kaggle · NVIDIA', badgeTone: 'neutral', title: 'Nemotron Reasoning', blurb: 'Fine-tuning Nemotron-3-Nano-30B on ~7.5k logic/math/bit-manipulation puzzles via Unsloth + SFT + LoRA (rank 32, RSLoRA). vLLM submission pipeline, auto-packaging.', tags: ['Nemotron 30B','Unsloth','LoRA','RSLoRA','vLLM'], repo: GH + 'Kaggle-Nemotron' },
  { cat: ['llm','quantization'], badge: 'production VLM', badgeTone: 'neutral', title: 'XFINITE-OCR', blurb: 'vLLM-powered VLM inference with an OpenAI-compatible API. Decoding-time inference controls for OCR robustness; profiling tokens/sec, TTFT, and throughput across batches and context lengths.', tags: ['vLLM','VLM','OpenAI API','Profiling'], repo: GH + 'XF-ocr.github.io' },
  { cat: ['fine-tuning','llm'], badge: 'SFT → GRPO', badgeTone: 'neutral', title: 'FineTuning-LLMs', blurb: 'Pipeline turning a plain base LLM into a reasoning model — SFT on curated chain-of-thought, then GRPO with curriculum rewards to unlock logic and problem-solving.', tags: ['SFT','GRPO','CoT','Reasoning'], repo: GH + 'FineTuning-LLMs' },
  { cat: ['llm'], badge: 'from scratch', badgeTone: 'neutral', title: 'Mini-LLaMa From Scratch', blurb: 'An LLM from scratch compared against LLaMa — RoPE, RMSNorm, grouped-query attention.', tags: ['PyTorch','LLaMa','RoPE','GQA'], repo: GH + 'Mini-LLaMa-From-Scratch' },
  { cat: ['quantization'], badge: 'GPU kernels', badgeTone: 'neutral', title: 'Triton Practice', blurb: 'Hands-on Triton kernels — matmul, fused attention, flash variants. GPU performance work.', tags: ['Triton','CUDA','FlashAttention'], repo: GH + 'Triton-practice' },
  { cat: ['agents'], badge: 'STT · TTS', badgeTone: 'neutral', title: 'LLM VoiceChat', blurb: 'An LLM chatbot wired with realtime STT + TTS for voice-driven conversation.', tags: ['LLM','STT','TTS','Python'], repo: GH + 'LLM_voicechat' },
  { cat: ['llm'], badge: '16MB challenge', badgeTone: 'neutral', title: 'Parameter Golf', blurb: 'The smallest LM that fits in 16MB. Minimize L(N) under a fixed sparse parameter budget — every parameter justified by validation density.', tags: ['Tiny LM','Efficiency'], repo: GH + 'parameter-golf' },
  { cat: ['vision'], badge: 'audio · speaker ID', badgeTone: 'neutral', title: 'ResNet-SE Fine-tune', blurb: 'Fine-tuning a ResNet-SE backbone in PyTorch for speaker recognition / voice biometric tasks.', tags: ['PyTorch','ResNet-SE','Speaker ID'], repo: GH + 'ResNet_SE' },
];

const PROJECT_FILTERS = ['all','featured','agents','security','rag','llm','quantization','fine-tuning','vision','hackathon'];

Object.assign(window, { DS, Icon, Figure, PROFILE, STATS, PROFILE_PROSE, EXPERIENCE, STACK, ACHIEVEMENTS, RESEARCH, EDUCATION, PROJECTS, PROJECT_FILTERS });
