/* Blog — minimal index (Thinking Machines style) + full post reader. */

function BlogIndex({ onOpen }) {
  const { BlogCard } = DS;
  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 0 64px' }}>
      <header style={{ marginBottom: 8 }}>
        <div className="ds-eyebrow" style={{ color: 'var(--clay)' }}>writing</div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300, letterSpacing: '-0.025em', marginTop: 16, lineHeight: 1.04 }}>
          Notes from the serving layer.
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.6, color: 'var(--ink-muted)', marginTop: 18, maxWidth: '58ch' }}>
          Deep dives on LLM inference, quantization, post-training, and the systems that make models fast. Written while building them.
        </p>
      </header>

      {/* featured */}
      <button onClick={() => onOpen(featured.slug)} style={{
        display: 'block', width: '100%', textAlign: 'left', appearance: 'none', cursor: 'pointer',
        background: 'var(--paper-raised)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-md)',
        padding: '30px 30px 26px', margin: '40px 0 8px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: 'var(--clay)', padding: '3px 8px', borderRadius: 'var(--radius-xs)' }}>Featured</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{featured.topic}</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 32, lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{featured.title}</h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.55, color: 'var(--ink-muted)', marginTop: 14 }}>{featured.dek}</p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-faint)', marginTop: 18, display: 'flex', gap: 10 }}>
          <span>{featured.date}</span><span style={{ color: 'var(--ink-ghost)' }}>·</span><span>{featured.readingTime}</span>
        </div>
      </button>

      <div>
        {rest.map(p => (
          <BlogCard key={p.slug} topic={p.topic} title={p.title} dek={p.dek} date={p.date} readingTime={p.readingTime}
            href="#" onClick={(e) => { e.preventDefault(); onOpen(p.slug); }} />
        ))}
      </div>
    </div>
  );
}

/* ----- post reader ----- */
function BlogPost({ slug, onBack }) {
  const post = POSTS.find(p => p.slug === slug);
  const FULL_POSTS = { 'vllm-internals': VllmPost, 'nemotron-reasoning': NemotronPost };
  const FullPostComponent = FULL_POSTS[slug];
  return (
    <article style={{ maxWidth: 680, margin: '0 auto', padding: '40px 0 80px' }}>
      <button onClick={onBack} style={{
        appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-muted)',
        display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 44,
      }}>
        <Icon name="arrow-left" size={14} /> all writing
      </button>

      <div className="ds-eyebrow" style={{ color: 'var(--clay)' }}>{post.topic}</div>
      <h1 style={{ fontSize: 'clamp(34px, 4.6vw, 48px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.07, marginTop: 18 }}>{post.title}</h1>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.5, color: 'var(--ink-muted)', marginTop: 22 }}>{post.dek}</p>

      {/* author / meta line */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 28, paddingBottom: 28, borderBottom: '1px solid var(--hairline)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 15 }}>R</span>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>Ram Prasath K</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)' }}>{post.date} · {post.readingTime}</div>
          </div>
        </div>
        {post.mediumUrl && (
          <a href={post.mediumUrl} target="_blank" rel="noreferrer" style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--clay)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            read on Medium <Icon name="arrow-up-right" size={12} />
          </a>
        )}
      </div>

      {FullPostComponent ? <FullPostComponent /> : <DraftNotice post={post} />}
    </article>
  );
}

function DraftNotice({ post }) {
  const { Callout, Tag } = DS;
  return (
    <div style={{ marginTop: 36 }}>
      <div className="post-body">
        <p>This essay is in progress. It accompanies the <b>{post.topic.toLowerCase()}</b> work currently underway — drafts go up as the experiments close, so the writing always reflects shipped numbers rather than promises.</p>
      </div>
      <Callout label="status · drafting" style={{ marginTop: 28 }}>
        Want an early read? The repo and W&amp;B report land first; the writeup follows. Reach out and I'll send the working notes.
      </Callout>
      <div style={{ display: 'flex', gap: 6, marginTop: 28, flexWrap: 'wrap' }}>
        <Tag tone="accent">{post.topic}</Tag>
        <Tag>in progress</Tag>
      </div>
    </div>
  );
}

/* ---- Nemotron reasoning essay ---- */
function NemotronPost() {
  const { Callout } = DS;
  return (
    <div className="post-body" style={{ marginTop: 36 }}>
      <p>We set out to fine-tune <b>NVIDIA Nemotron-3-Nano-30B</b> with a rank-32 LoRA adapter on roughly 7,500 reasoning puzzles — number bases, bit tricks, ciphers, cryptarithms. Our target was 0.90. We hit 0.85. This is the unfiltered account of what happened between those two numbers.</p>

      <h2>Phase 0 — Get something on the board</h2>
      <p>The first move was a clean end-to-end pipeline: <b>Unsloth</b> for memory-efficient training, LoRA on attention and gate projections, single-GPU execution, teacher chain-of-thought data generated from the training set. We submitted. Score: 0.85. For a first run, this was good. For a competition ceiling, it turned out to be almost exactly where we would stay.</p>

      <h2>The wall at 0.85</h2>
      <p>What followed was a month of attempts that, in retrospect, all attacked the wrong variable:</p>
      <p><b>Narrowing LoRA targets and adding smarter loss functions</b> — dropped to 0.53. <b>Merging multiple teachers' reasoning chains</b> — 0.67. <b>Fancy loss shaping</b> — underperformed plain cross-entropy. <b>Increasing LoRA rank</b> — minimal movement. Every experiment produced a convincing loss curve. None moved the leaderboard meaningfully.</p>

      <Callout label="the uncomfortable truth">
        The 0.85 recipe was already near the ceiling of what an SFT config change could do. The remaining gains were hiding somewhere else entirely.
      </Callout>

      <h2>The three silent traps</h2>
      <p>The experiments that felt the most puzzling — where training loss looked fine but leaderboard stayed flat — were explained by three bugs that each produce <i>no visible signal in your training curves</i>:</p>

      <p><b>1. Dead Mamba projection.</b> Unsloth's checkpointing silently eliminated gradients in the Mamba model's <code style={{fontFamily:'var(--font-mono)',fontSize:'0.88em',background:'var(--paper-raised)',padding:'1px 5px',borderRadius:3}}>out_proj</code> LoRA. The adapter was there. The gradient was not. Loss curved downward perfectly.</p>

      <p><b>2. Silent freeze.</b> Model preparation inadvertently froze LoRA parameters due to naming pattern mismatches in the preparation step. Again: loss looked fine. No frozen-parameter warning, no NaN, nothing.</p>

      <p><b>3. Submission discard.</b> The trainer saved MoE experts as fused tensors. The evaluator expected 128 separate expert tensors. The entire trained weight set — roughly 856M parameters of LoRA updates — failed to load. The leaderboard reported base-model performance with zero diagnostic clues. We had been benchmarking the unmodified base model for multiple runs.</p>

      <Callout tone="info" label="lesson">
        A flat leaderboard does not mean the model is not learning. It might mean your weights never loaded. Verify loading explicitly — don't trust that the submission succeeded just because the file uploaded.
      </Callout>

      <h2>The reinforcement-learning detour</h2>
      <p>We planned to implement <b>DR-GRPO</b> with deterministic reward functions — a reward that checks whether the model's answer is correct rather than just how fluent the reasoning looks. The plan was clean. The execution hit a wall we should have tested for on day one.</p>
      <p>Nemotron's generation speed without specialized KV caching dropped to approximately <b>one token per second</b>. RL requires rollouts — many of them. A 12-hour run became impractical before we wrote a single reward function. We redirected the effort into two things that did ship: an abort probe that checks generation speed before committing to a long run, and a decoupled RAFT loop — offline sampling of verified correct solutions for SFT without real-time RL constraints.</p>

      <h2>Where the last five points really live</h2>
      <p>The 0.85 aggregate concealed a distribution problem. Breaking down performance by category:</p>
      <p><b>Arithmetic categories</b> (base conversion, units, gravity): <b>~95% accuracy</b>. The model already solved these. More data, more epochs, higher rank — none of it helps something that is already at the ceiling.</p>
      <p><b>Hard tail</b> (ciphers, bit operations, cryptarithms): <b>60–75% accuracy</b>. This is where the points live. And when we deduplicated the cryptarithm training data, 627 rows collapsed to 54 unique problems. We had been training on 573 repeated examples of 54 puzzles and calling it diversity.</p>
      <p>The path to 0.90 was never a better optimizer or a higher LoRA rank. It was a deterministic synthetic generator for cryptarithms and a strong-teacher pipeline for the cipher categories.</p>

      <h2>What we'd tell ourselves on day one</h2>
      <p><b>Change one variable per run.</b> We ran experiments that changed the LoRA config, the data mix, and the loss weighting simultaneously. When something moved, we did not know why. When nothing moved, we did not know why either.</p>
      <p><b>The MoE experts contain the capacity.</b> Standard LoRA-the-attention guidance is correct for dense models. For a sparse MoE, the experts are where the domain knowledge lives. We discovered this late.</p>
      <p><b>Measure generation speed before building post-training systems.</b> A 30-second speed check — generate 100 tokens, measure wall-clock time — would have prevented the 12-hour RL detour.</p>
      <p><b>Verify the full loading path explicitly.</b> Dead gradients, frozen parameters, and tensor namespace mismatches all produce flawless training loss curves. None of them announce themselves. Add an explicit load-and-verify step after every checkpoint save.</p>
      <p><b>Fix the tail, not the head.</b> If a category is at 95%, more data does nothing. Find the categories that are at 65% and fix those.</p>

      <h2>The 0.90 manifesto</h2>
      <p>The model has the reasoning capability. It demonstrated that clearly on the easy categories. What it lacked was verified reasoning traces for the hard ones.</p>
      <p>0.90 is not about better fine-tuning. It is about better data — specifically, synthetic generators that can produce thousands of verified cryptarithm and cipher examples with step-by-step solutions, and a pipeline to distill those solutions from a stronger teacher into the format Nemotron already knows how to follow.</p>
      <p>We did not get to 0.90. But we now know exactly why, and exactly what it would take. That feels more valuable than a number on a leaderboard we do not fully understand.</p>

      <hr style={{ border: 0, borderTop: '1px solid var(--hairline)', margin: '44px 0 28px' }} />
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-faint)' }}>
        The full code — LoRA config, submission pipeline, RAFT loop — is in the <a href="https://github.com/ramprasathk07/Kaggle-Nemotron" style={{color:'var(--clay)'}}>Kaggle-Nemotron repo</a>. Originally posted on <a href="https://medium.com/me/stories?tab=posts-published" style={{color:'var(--clay)'}}>Medium</a>.
      </p>
    </div>
  );
}

/* ---- the one fully-written sample essay ---- */
function VllmPost() {
  const { Callout } = DS;
  return (
    <div className="post-body" style={{ marginTop: 36 }}>
      <p>A single A100 running a 7B model with naive autoregressive decoding serves a handful of concurrent requests before it falls over. The same GPU, running <b>vLLM</b>, serves an order of magnitude more — at lower latency. Almost none of that gain comes from a faster matmul. It comes from <i>how memory is managed</i>.</p>
      <p>This post walks through the three ideas that make that true: paged attention, the block manager, and continuous batching. None of them are exotic; together they change what a single GPU can do.</p>

      <h2>The problem is the KV cache, not the weights</h2>
      <p>During generation, every token attends to every token before it. To avoid recomputing those keys and values at each step, we cache them — the <b>KV cache</b>. For a long context and a large batch, this cache dwarfs the model weights. It is also the thing that grows, unpredictably, as each sequence decodes to a different length.</p>
      <p>Classic serving stacks pre-allocate a contiguous block per sequence sized to the maximum length. That wastes most of it. A request that stops at 60 tokens still holds memory for 2,048. Internal fragmentation alone can leave more than half the cache unusable.</p>

      <Callout label="the key insight">
        Treat the KV cache like virtual memory. Pages, not contiguous arrays. The model never sees a sequence's memory as fragmented — a lookup table hides the indirection.
      </Callout>

      <h2>PagedAttention</h2>
      <p>PagedAttention borrows the operating-system trick directly. The cache is carved into fixed-size <b>blocks</b> — say 16 tokens each. A sequence's logical tokens map to physical blocks through a per-sequence block table. Blocks need not be contiguous; they need not even be in order. The attention kernel is taught to gather across them.</p>
      <Figure label="figure 1" caption="A sequence's logical KV positions (top) map through a block table to non-contiguous physical blocks (bottom). Allocation happens one block at a time, on demand." ratio="16 / 8" />
      <p>The payoff is twofold. Memory is allocated lazily, one block at a time, so a short generation never reserves space it won't use — fragmentation drops to under a block per sequence. And because blocks are just handles, two sequences that share a prefix can share the <i>same physical blocks</i> until they diverge. That is how prompt caching and parallel sampling become nearly free.</p>

      <h2>The block manager</h2>
      <p>Someone has to hand out and reclaim those blocks. The <b>block manager</b> is a small allocator: a free list of physical blocks, the per-sequence block tables, and reference counts so shared blocks are only freed when the last owner is done. Copy-on-write handles the moment two shared sequences finally diverge — the shared block is duplicated, each owner gets its own copy, and decoding continues.</p>
      <p>When the GPU runs out of blocks under load, the manager can <b>preempt</b>: evict a sequence's blocks (recompute or swap them to host memory) and resume it later. The scheduler decides who gets evicted. This is what lets the server accept more requests than fit at once without crashing.</p>

      <h2>Continuous batching</h2>
      <p>Static batching waits for a batch to fill, runs all sequences to completion, then starts the next. The slowest sequence holds everyone hostage and the GPU idles on padding. <b>Continuous batching</b> instead schedules at the granularity of a single decode step: finished sequences leave the batch immediately and waiting requests join on the very next iteration.</p>
      <Callout tone="info" label="why it compounds">
        Paged memory makes a sequence cheap to add or drop mid-flight. Continuous batching exploits that to keep the GPU saturated. Neither works nearly as well without the other.
      </Callout>
      <p>The scheduler runs a simple loop: admit as many waiting requests as there are free blocks for, run one decode step across the whole live batch, retire anything that hit a stop token, and preempt if memory gets tight. Throughput stops being limited by the unlucky long sequence and starts tracking the GPU's actual compute.</p>

      <h2>What this means in practice</h2>
      <p>When you profile a vLLM deployment, the levers that matter are the ones these mechanisms expose: block size (granularity vs. overhead), the fraction of GPU memory handed to the cache, and how aggressively the scheduler admits and preempts. Quantizing the weights buys you headroom; quantizing the KV cache — the work in <a href="#">TripleQuant</a> — buys you more of the resource that was actually scarce all along.</p>
      <p>That is the whole trick. Not a faster kernel — a better accountant.</p>

      <hr style={{ border: 0, borderTop: '1px solid var(--hairline)', margin: '44px 0 28px' }} />
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-faint)' }}>
        Building a from-scratch version of this — block manager, scheduler, speculative decoding — as Inferno-Core. Notes in the Work in Progress tab.
      </p>
    </div>
  );
}

function Blog() {
  const [slug, setSlug] = React.useState(null);
  React.useEffect(() => { window.scrollTo && window.scrollTo(0, 0); }, [slug]);
  if (slug) return <BlogPost slug={slug} onBack={() => setSlug(null)} />;
  return <BlogIndex onOpen={setSlug} />;
}

Object.assign(window, { Blog });
