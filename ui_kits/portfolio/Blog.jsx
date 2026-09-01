/* Blog — minimal index (Thinking Machines style) + full post reader. */

function BlogIndex({ onOpen }) {
  const { BlogCard } = DS;
  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  return (
    <div style={{ maxWidth: 720, padding: '56px 0 64px' }}>
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
          <div key={p.slug} style={{ position: 'relative' }}>
            {!p.mediumUrl && (
              <span style={{
                position: 'absolute', top: 28, right: 0,
                fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--ink-faint)', border: '1px solid var(--hairline)',
                borderRadius: 'var(--radius-xs)', padding: '3px 8px',
              }}>Upcoming</span>
            )}
            <BlogCard topic={p.topic} title={p.title} dek={p.dek} date={p.date} readingTime={p.readingTime}
              href="#" onClick={(e) => { e.preventDefault(); onOpen(p.slug); }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----- post reader ----- */
function BlogPost({ slug, onBack }) {
  const post = POSTS.find(p => p.slug === slug);
  const FULL_POSTS = {
    'loss-curve-lied': LossCurvePost,
    'mamba-moe-postmortem': MambaMoePost,
    'nemotron-reasoning': NemotronPost,
  };
  const FullPostComponent = FULL_POSTS[slug];
  return (
    <article style={{ maxWidth: 720, padding: '40px 0 80px' }}>
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
  if (post.mediumUrl) {
    return (
      <div style={{ marginTop: 36 }}>
        <div className="post-body">
          <p>This piece is live on Medium. The full essay — mirrored here soon — is up now at the link above.</p>
        </div>
        <Callout label="status · published" style={{ marginTop: 28 }}>
          <a href={post.mediumUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--clay)' }}>Read the full piece on Medium →</a>
        </Callout>
        <div style={{ display: 'flex', gap: 6, marginTop: 28, flexWrap: 'wrap' }}>
          <Tag tone="accent">{post.topic}</Tag>
          <Tag>on Medium</Tag>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginTop: 36 }}>
      <div className="post-body">
        <p>This essay is upcoming. It accompanies the <b>{post.topic.toLowerCase()}</b> work currently underway — it publishes once the experiments close, so the writing always reflects shipped numbers rather than promises.</p>
      </div>
      <Callout label="status · upcoming" style={{ marginTop: 28 }}>
        Want an early read? The repo and W&amp;B report land first; the writeup follows. Reach out and I'll send the working notes.
      </Callout>
      <div style={{ display: 'flex', gap: 6, marginTop: 28, flexWrap: 'wrap' }}>
        <Tag tone="accent">{post.topic}</Tag>
        <Tag>upcoming</Tag>
      </div>
    </div>
  );
}

/* small inline-code style, shared by the essays below */
const codeStyle = { fontFamily: 'var(--font-mono)', fontSize: '0.88em', background: 'var(--paper-raised)', padding: '1px 5px', borderRadius: 3 };

/* ---- "My loss curve said 0.027" essay ---- */
function LossCurvePost() {
  const { Callout } = DS;
  return (
    <div className="post-body" style={{ marginTop: 36 }}>
      <p>I fine-tuned <b>Qwen2.5-0.5B-Instruct</b> on ~10,000 coding-reasoning examples. Validation loss settled at <b>0.0273</b>. Token entropy collapsed from 1.09 to 0.12 nats. Every curve on the dashboard said the run had worked. Then I ran the model and it would not stop talking — coherent-sounding reasoning that repeated <i>"the code is correct… the code is efficient…"</i> straight into the 512-token cap, never once emitting the format tags I had trained it to produce. This is the account of the gap between a healthy loss curve and a broken model.</p>

      <Figure label="figure 1" src="blog-assets/loss-curve-lied/loss-graph.webp"
        caption="The full training dashboard — DFT loss (val 0.0273), token entropy (1.09 → 0.12 nats), gradient norm, and the learning rate. Three of the four panels say 'success'; only the LR panel, rebounding after the midpoint, hints at the bug." />

      <h2>The plan: a small model that actually runs code</h2>
      <p>The target was a compact reasoning model whose responses followed a strict shape: <code style={codeStyle}>&lt;think&gt;</code> step-by-step reasoning <code style={codeStyle}>&lt;/think&gt;</code> then <code style={codeStyle}>&lt;answer&gt;</code> runnable code <code style={codeStyle}>&lt;/answer&gt;</code>. Those four markers went in as new special tokens. The data came from OpenCodeReasoning; the loss was <b>Dynamic Fine-Tuning (DFT)</b> — a per-token scheme that multiplies the usual objective by the model's own probability of the token, <code style={codeStyle}>L = -sg(p)·log p</code>. Training was custom: DDP across two free Kaggle T4s, cosine LR with warmup, W&amp;B and MLflow logging. 7.8 hours, effective batch size 64, and that textbook-looking 0.027.</p>

      <h2>The first clue: a learning-rate schedule that came back from the dead</h2>
      <p>The one curve that looked <i>wrong</i> was the learning rate. A cosine schedule should peak after warmup and decay monotonically to near-zero. Mine peaked around step 25, hit zero halfway through, then <b>climbed back up</b> in epoch 3. One line did it: <code style={codeStyle}>self.scheduler = self.accelerator.prepare(self.scheduler)</code>. Under DDP with two processes, <code style={codeStyle}>accelerate</code> steps the scheduler twice per optimizer step, so a 189-step schedule finished in 94. And <code style={codeStyle}>get_cosine_schedule_with_warmup</code> never clamps progress at 1.0 — once <code style={codeStyle}>progress &gt; 1</code>, the term <code style={codeStyle}>0.5·(1+cos(π·progress))</code> starts <i>rising</i> again. The numbers were internally consistent (predicted 1.98e-5, logged 1.999e-5), which is exactly why it hid in plain sight.</p>

      <Callout label="the tell">
        Every other curve was healthy. The learning rate was the only visible wrong signal — and it was only visible because I plotted it. Log the learning rate. Look at it.
      </Callout>

      <h2>The eval: where everything fell apart</h2>
      <p>The eval checked three things per task: did the output contain the tags, did the code execute correctly in a sandbox, and did generation terminate before 512 tokens. The <i>base</i> model passed 7 of 8 with clean ~112-token code blocks. The fine-tuned model passed 4 of 7, never emitted a tag, and hit the cap every single time. A 6× loss reduction and a 10× entropy drop had produced a model that behaved worse than the one I started with.</p>

      <Figure label="figure 2" src="blog-assets/loss-curve-lied/loss-results.webp"
        caption="Behavioral eval — base model (7/8, clean code blocks) vs. fine-tuned (4/7, no format tags, every generation running to the 512-token cap)." />

      <h2>Bug 1 — the wrong data file</h2>
      <p>The notebook loaded <code style={codeStyle}>opencode_sft_filtered.jsonl</code>. That file held untagged responses — <code style={codeStyle}>&lt;think&gt;…&lt;/think&gt;</code> followed by a bare code block, <b>zero</b> <code style={codeStyle}>&lt;answer&gt;</code> tags across all 10,000 rows. The correctly tagged file, <code style={codeStyle}>opencode_sft_filtered_sl4096_10000.jsonl</code>, was sitting right next to it, never referenced. The model never emitted <code style={codeStyle}>&lt;answer&gt;</code> because it had never once seen it. Lesson: decode and print real rows from inside the dataloader before training starts — not the path, the actual tokens.</p>

      <h2>Bug 2 — 92% of samples were truncated, and EOS vanished with them</h2>
      <p>Training used <code style={codeStyle}>max_length=2048</code>. The data had a median length near 4,900 tokens and a 90th percentile around 8,000. So <b>92%</b> of examples were truncated mid-response — and truncation lopped off the end-of-sequence token the dataloader appends last. The model saw plenty of reasoning and almost never saw how reasoning <i>ends</i>. Only ~8% of batches carried an EOS in their labels. That is the whole explanation for running to the cap: there was no gradient that ever taught it to stop.</p>

      <h2>Bug 3 — DFT loss cannot learn a brand-new token</h2>
      <p>The deepest one. After 10,000 examples where <code style={codeStyle}>&lt;think&gt;</code> is the first assistant token, the checkpoint gave p(<code style={codeStyle}>&lt;think&gt;</code>) ≈ 1.4e-14 while p(<code style={codeStyle}>To</code>) ≈ 0.9999. DFT's gradient is scaled by the model's current probability of the correct token — near zero probability means near zero gradient, so a freshly-initialized token can never get off the ground. Standard cross-entropy does the opposite: its gradient is <i>largest</i> exactly when the probability is low. DFT is rich-get-richer; it sharpens what the model already believes and cannot bootstrap new vocabulary.</p>

      <Callout tone="info" label="why the loss stayed flat">
        <code style={{...codeStyle, background:'transparent', padding:0}}>-p·log p</code> goes to zero when p→1 (correct) <i>and</i> when p→0 (maximally wrong). Format failures contributed zero loss. The metric was structurally blind to the exact thing that was broken.
      </Callout>

      <h2>Why the validation loss lied</h2>
      <p>Three things compounded. The validation set came from the same broken, untagged, truncated file — the wrong distribution validated perfectly against the wrong targets. DFT's blind spot meant format failures registered as zero loss. And teacher-forced likelihood measures probability, not behavior: nothing in cross-entropy checks whether generation terminates, follows a format, or runs. Only a behavioral eval measures the thing you actually shipped for.</p>

      <h2>The fix list</h2>
      <p><b>1.</b> Load the tagged file. <b>2.</b> Raise <code style={codeStyle}>max_length</code> to 6000 and assert ≥95% of samples keep their EOS in the labels. <b>3.</b> Size the scheduler in scheduler-steps as <code style={codeStyle}>total_optimizer_steps × num_processes</code>, or just don't hand it to <code style={codeStyle}>accelerator.prepare()</code>. <b>4.</b> Bootstrap new tokens with plain cross-entropy early, or mix CE+DFT — DFT alone can't initialize vocabulary. <b>5.</b> Run the behavioral eval on every checkpoint and log format compliance, execution pass rate, and stop rate right next to the loss.</p>

      <h2>What I learned</h2>
      <p><b>A loss curve validates optimization, not intent.</b> Mine was genuinely healthy — stable gradients, validation tracking training — while the model was broken.</p>
      <p><b>RL-flavored losses inherit RL's exploration problem.</b> Weighting by policy confidence makes zero-probability targets unreachable. New vocabulary needs bootstrap probability mass before a confidence-weighted loss can help it.</p>
      <p><b>Small models are a debugging superpower.</b> At 0.5B, every probe ran in minutes on consumer hardware. I could ask "what is p(&lt;think&gt;)?" and have an answer before a coffee cooled.</p>
      <p><b>The missing metric is the one that bites.</b> W&amp;B logged loss, entropy, gradient norm, and learning rate. It logged neither format compliance nor termination rate — the two signals that actually mattered stayed off the dashboard until the post-mortem.</p>

      <hr style={{ border: 0, borderTop: '1px solid var(--hairline)', margin: '44px 0 28px' }} />
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-faint)' }}>
        This is Part I. Originally posted on <a href="https://medium.com/@ramk612000/my-loss-curve-said-0-027-my-model-wouldnt-stop-talking-part-i-6fd58780f8dc" style={{color:'var(--clay)'}}>Medium</a>.
      </p>
    </div>
  );
}

/* ---- "Fine-Tuning a 30B Hybrid-Mamba MoE" post-mortem ---- */
function MambaMoePost() {
  const { Callout } = DS;
  return (
    <div className="post-body" style={{ marginTop: 36 }}>
      <p>The NVIDIA Nemotron Model Reasoning Challenge hands you a 30B model, a rank-≤32 LoRA budget, and ~7,500 deterministic puzzles — bit tricks, base and unit conversion, ciphers, equation transforms, cryptarithms — graded by exact string match inside <code style={codeStyle}>\boxed&#123;&#125;</code> or ±10⁻² numeric tolerance, greedy-decoded through vLLM with LoRA-only inference. I reached <b>0.85</b>. What follows is a post-mortem on why the model's architecture — not any optimizer knob — decided what was possible, and three silent bugs that each produced a flawless training curve and a base-model score.</p>

      <h2>Architecture decides everything</h2>
      <p><b>Nemotron-3-Nano-30B-A3B</b> is 52 layers, but only <b>6</b> are GQA self-attention — the other <b>46</b> are Mamba-2 state-space layers, giving linear-time sequence processing. Each MoE block routes tokens top-6 across <b>128 routed experts</b> plus 2 shared experts per layer. No dropout, Squared ReLU instead of SwiGLU, no additive biases, no positional embeddings, untied input/output embeddings. ~3B active parameters per token out of 30B total. That shape dictates which modules LoRA can even touch and how gradients propagate — before you tune a single hyperparameter.</p>

      <Figure label="figure 1" src="blog-assets/mamba-moe-postmortem/Nvidia-nemotron-moe.webp"
        caption="Nemotron-3-Nano-30B-A3B: 52 layers — GQA attention, Mamba-2 state-space, and 128-expert top-6 MoE blocks (1 shared + 6 active per token). Diagram after Sebastian Raschka." />

      <h2>LoRA on SSMs — where gradients actually flow</h2>
      <p>Mamba-2 computes its state transitions (<code style={codeStyle}>A, B, C, D</code>) inside a fused selective-scan CUDA kernel. LoRA decomposes a weight <code style={codeStyle}>W</code> into <code style={codeStyle}>W + AB&#8288;ᵀ</code>, but only the linear projections at the layer boundary — <code style={codeStyle}>in_proj</code> and <code style={codeStyle}>out_proj</code> — have the dimensionality for a useful low-rank factorization; the scan's internal state does not. The SSM-PEFT and MambaPEFT papers say the same. So the real adaptation surface is: the 6 attention layers, the Mamba input projections, the MoE expert projections, and the LM head.</p>

      <h2>Where the capacity actually lives</h2>
      <p>With rank pinned at 32, you buy capacity by <i>widening the target set</i>, not raising the rank. Each targeted projection adds <code style={codeStyle}>2 · d_model · r</code> parameters. The 128 routed experts — each with <code style={codeStyle}>gate/up/down</code> — contribute ~101M trainable parameters on their own; <code style={codeStyle}>lm_head</code> over a ~128K vocab adds ~8.2M; attention and Mamba projections add several million more. The full target set sums to roughly <b>888M trainable parameters, 2.74% of the model</b>. This is the opposite of the usual "just LoRA the attention" advice — here the experts and the output layer are where the score comes from.</p>

      <h2>The 0.85 recipe</h2>
      <p>Almost no cleverness: rank 32, alpha 64, targeting all Q/K/V/O plus Mamba <code style={codeStyle}>in_proj</code>, every expert <code style={codeStyle}>gate/up/down</code> (shared and routed), and <code style={codeStyle}>lm_head</code>. Plain mean NLL over full sequences — no assistant-only masking — LR 2e-4 linear decay from zero warmup, effective batch 16, one epoch, gradient clipping effectively off (max norm 1e9), no weight decay, Adam β₂=0.95, max length 8192. One teacher's chain-of-thought across all 7,830 rows.</p>

      <h2>Why every "improvement" regressed</h2>
      <p><b>Three teachers instead of one → 0.67.</b> Averaging over disjoint high-probability solution paths carves a low-probability valley between the modes; the model learns neither cleanly. <b>Worst-token loss → overfit.</b> Focusing gradient on the hardest tokens per sequence just amplified variance and chased noise. <b>Six changes at once → 0.53.</b> Narrower targets dropped trainable parameters from 888M to ~30M — a severe manifold constraint the model lacked the capacity to work within. When several knobs move together and the score falls, you have learned nothing about which knob did it.</p>

      <h2>Bug 1 — dead <code style={codeStyle}>out_proj</code> LoRA under Unsloth</h2>
      <p>The fused Mamba-2 scan emits <code style={codeStyle}>Y = scan(X, A, B, C, D)</code> in one CUDA op, and Unsloth's checkpointing backward guard treats that output as detached for the projection's autograd graph. The gradient to <code style={codeStyle}>out_proj</code> becomes zero — the parameters exist, hold memory, and never update. Only <code style={codeStyle}>in_proj</code> survives, because its inputs are tracked before the fused scan. Fix: drop <code style={codeStyle}>out_proj</code> from the target list entirely; <code style={codeStyle}>in_proj</code> is the sole viable Mamba surface.</p>

      <h2>Bug 2 — silent freezing by <code style={codeStyle}>prepare_model_for_training</code></h2>
      <p>That helper regex-matches parameter names (<code style={codeStyle}>.*\.lora_A\..*</code>, <code style={codeStyle}>.*\.lora_B\..*</code>) and freezes anything that doesn't match. On Nemotron's non-standard module tree, some LoRA tensors get caught and set to <code style={codeStyle}>requires_grad=False</code>. The fix is an explicit audit: walk <code style={codeStyle}>named_parameters()</code>, find frozen tensors whose names contain <code style={codeStyle}>lora_A</code>/<code style={codeStyle}>lora_B</code>, and call <code style={codeStyle}>p.requires_grad_(True)</code>. Perfect curves, zero leaderboard movement, because gradients never flowed.</p>

      <h2>Bug 3 — fused expert keys ≠ per-expert keys</h2>
      <p>The critical one. Unsloth trains the 128 experts as <b>fused</b> tensors (shapes like <code style={codeStyle}>[128, r, d]</code>), but the evaluator loads a transformers-native model with 128 separate <code style={codeStyle}>nn.Linear</code> modules under <code style={codeStyle}>…experts.&#123;j&#125;.up_proj</code>. Submit the fused keys and the evaluator matches nothing, silently falls back to the base model, and scores at baseline — discarding ~856M trained parameters with no warning. The fix: split each fused tensor into 128 per-expert tensors by reshape/permute, rename keys to the evaluator's namespace, and update <code style={codeStyle}>target_modules</code> in <code style={codeStyle}>adapter_config.json</code>.</p>

      <Callout label="the pattern behind all three">
        Dead gradients, frozen parameters, and a namespace mismatch all produce a flawless loss curve. None of them announce themselves. Verify the plumbing — load-and-check every checkpoint — don't trust that a falling loss means the weights are being trained and will load.
      </Callout>

      <h2>The zero-loss SFT trap</h2>
      <p>A related landmine: TRL's <code style={codeStyle}>SFTTrainer</code> masks everything but the assistant turn when building labels. If the chat template or masking breaks — wrong roles, missing <code style={codeStyle}>eos_token</code> — every label becomes <code style={codeStyle}>-100</code> and the loss over an empty set is exactly <b>0.0</b>: a perfectly flat, professional-looking curve over no training at all. Fix: drop to vanilla <code style={codeStyle}>Trainer</code> with explicit labels, plus a pre-flight that decodes 3 samples, confirms each emits <code style={codeStyle}>\boxed&#123;&#125;</code>, checks the brace parser recovers the answer, and asserts pre-flight loss &gt; 0.3.</p>

      <h2>Why RL didn't happen</h2>
      <p>The plan was Dr.GRPO with a deterministic <code style={codeStyle}>\boxed&#123;&#125;</code>-match reward, no reward model, β=0. But without recurrent state caching (<code style={codeStyle}>NemotronHybridDynamicCache</code>), HuggingFace <code style={codeStyle}>generate</code> recomposes the full sequence per token — roughly <b>1 token/second</b> at length 8192. One run produced 12 rollout groups in 12 hours; real RL needs thousands, i.e. weeks. vLLM does ~600 tok/s, but the offline Kaggle image had no wheels for this model. So I decoupled it into <b>RAFT</b>: generate rollouts offline in a resumable pass, keep only solver-verified-correct responses, and train them as ordinary SFT — with a <code style={codeStyle}>PERFECT_RESCUE</code> step distilling the solver's own chain-of-thought for the prompts the model couldn't crack.</p>

      <h2>Where the remaining points live</h2>
      <p>0.85 is a weighted average. Arithmetic categories (~60% of the weight) already sit near 0.95, contributing ~0.57. The hard tail — ciphers, bit manipulation, cryptarithmetic (~40% weight) — sits at 0.60–0.75, contributing ~0.28. Reaching 0.90 means lifting that tail from ~0.65 to ~0.85: a 20-point gain on 40% weight is exactly the 0.08 gap. And the cryptarithm data was 92% duplicates — 627 rows collapse to 54 unique problems. The path is a deterministic synthetic generator plus strong-teacher traces, not a better optimizer.</p>

      <h2>Five lessons</h2>
      <p><b>1. Architecture &gt; optimizer.</b> Whether RL was feasible, which modules LoRA could touch, and how to package the submission were all decided by the hybrid-Mamba-MoE design.</p>
      <p><b>2. Put capacity in the right place.</b> Targeting the 128 experts and <code style={codeStyle}>lm_head</code> — not just attention — is what earned 0.85.</p>
      <p><b>3. Verify plumbing, not just loss.</b> Three silent failures each gave perfect training and a base-model score.</p>
      <p><b>4. Consistency beats volume.</b> One solver-perfect teacher beat a three-teacher mixture by 8 points.</p>
      <p><b>5. Measure bottlenecks early.</b> A 30-second generation-speed probe would have swapped "online RL" for "decoupled RAFT" and saved a 12-hour dead run.</p>

      <hr style={{ border: 0, borderTop: '1px solid var(--hairline)', margin: '44px 0 28px' }} />
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-faint)' }}>
        Originally posted on <a href="https://medium.com/@ramk612000/fine-tuning-a-30b-hybrid-mamba-moe-on-one-gpu-a-technical-post-mortem-f847b59155cf" style={{color:'var(--clay)'}}>Medium</a>.
      </p>
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
        The full code — LoRA config, submission pipeline, RAFT loop — is in the <a href="https://github.com/ramprasathk07/Kaggle-Nemotron" style={{color:'var(--clay)'}}>Kaggle-Nemotron repo</a>. Originally posted on <a href="https://medium.com/@ramk612000/chasing-0-90-on-a-30b-reasoning-model-nvidia-nemotron-our-approach-honestly-ef3f7ba12e46" style={{color:'var(--clay)'}}>Medium</a>.
      </p>
    </div>
  );
}

function Blog() {
  const [slug, setSlug] = React.useState(null);
  const [, bump] = React.useState(0);
  React.useEffect(() => { window.scrollTo && window.scrollTo(0, 0); }, [slug]);

  // Merge in anything the Medium RSS sync has found that isn't already
  // hand-curated above. Never touches `featured` — that stays an
  // editorial call made in this file, not the bot's.
  React.useEffect(() => {
    fetch('medium-posts.json').then(r => (r.ok ? r.json() : [])).then(items => {
      let changed = false;
      items.forEach(item => {
        if (!POSTS.some(p => p.mediumUrl === item.mediumUrl)) {
          POSTS.push({ ...item, featured: false });
          changed = true;
        }
      });
      if (changed) bump(n => n + 1);
    }).catch(() => {});
  }, []);

  if (slug) return <BlogPost slug={slug} onBack={() => setSlug(null)} />;
  return <BlogIndex onOpen={setSlug} />;
}

Object.assign(window, { Blog });
