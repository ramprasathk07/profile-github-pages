/* Work in Progress — the 5-month master plan, as an editorial roadmap. */

function WorkInProgress() {
  const { PlanRepo, Callout, Tag } = DS;
  const P = PLAN;
  return (
    /* One column width for the whole tab — section dividers, the plan rows,
       the benchmark table, and the month timeline all share left/right edges. */
    <div style={{ maxWidth: 900, padding: '56px 0 64px' }}>
      <header style={{ maxWidth: '66ch' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span className="ds-eyebrow" style={{ color: 'var(--clay)' }}>// the plan</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', border: '1px solid var(--hairline)', padding: '3px 8px', borderRadius: 'var(--radius-xs)' }}>{P.version} · {P.window}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.04 }}>
          What I'm building next.
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.62, color: 'var(--ink-muted)', marginTop: 20 }}>
          A live, public roadmap — not a wishlist. Six repositories, ranked by hiring impact, executed over five months. This is the working plan; it changes as experiments close.
        </p>
      </header>

      {/* north star */}
      <div style={{ marginTop: 40 }}>
        <Callout label="north star">{P.northStar}</Callout>
      </div>

      {/* priority stack */}
      <section style={{ marginTop: 56 }}>
        <DS.SectionDivider label="priority stack" style={{ marginBottom: 8 }} />
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--ink-faint)', margin: '14px 0 8px' }}>
          Ranked by impact. The top two are underway with live progress; the rest are scoped and queued — names out, details landing as each kicks off.
        </p>
        <div>
          {P.stack.map(r => <PlanRepo key={r.rank} {...r} />)}
        </div>
      </section>

      {/* benchmark table */}
      <section style={{ marginTop: 56 }}>
        <DS.SectionDivider label="the career asset · TripleQuant benchmark" style={{ marginBottom: 20 }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-muted)', maxWidth: '64ch', marginBottom: 22 }}>
          {P.benchmark.note}
        </p>
        <div style={{ overflowX: 'auto', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-md)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>
            <thead>
              <tr>
                {P.benchmark.cols.map((c, i) => (
                  <th key={i} style={{ textAlign: i === 0 ? 'left' : 'right', padding: '12px 16px', borderBottom: '1px solid var(--hairline-strong)', color: 'var(--ink-faint)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 10.5, whiteSpace: 'nowrap', background: 'var(--paper-raised)' }}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {P.benchmark.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      textAlign: ci === 0 ? 'left' : 'right', padding: '11px 16px',
                      borderBottom: ri < P.benchmark.rows.length - 1 ? '1px solid var(--hairline)' : 'none',
                      color: ci === 0 ? 'var(--ink)' : 'var(--ink-faint)',
                      fontWeight: ci === 0 ? 600 : 400, whiteSpace: 'nowrap',
                      background: ri === 0 ? 'var(--clay-wash)' : 'transparent',
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* IssueFix-RL comparison */}
      <section style={{ marginTop: 56 }}>
        <DS.SectionDivider label="IssueFix-RL · the controlled experiment" style={{ marginBottom: 20 }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-muted)', maxWidth: '64ch' }}>
          Same model, same dataset, same reward — only the algorithm changes. A genuine controlled comparison across five post-training methods on GitHub issue resolution.
        </p>
        <div style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: 'var(--radius-md)', padding: '16px 20px', margin: '22px 0', fontFamily: 'var(--font-mono)', fontSize: 13.5, overflowX: 'auto' }}>
          <span style={{ color: 'var(--ink-ghost)' }}>reward = </span>
          <span style={{ color: '#E08A6C' }}>0.6·test_pass</span> + 0.1·syntax + 0.1·lint + 0.1·compile + 0.1·minimal_patch
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
          {P.methods.map((m, i) => (
            <div key={i} style={{ border: '1px solid var(--hairline)', borderRadius: 'var(--radius-sm)', padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15, color: 'var(--clay)' }}>{m.m}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.5, color: 'var(--ink-muted)', marginTop: 8 }}>{m.watch}</div>
            </div>
          ))}
        </div>
      </section>

      {/* month timeline */}
      <section style={{ marginTop: 56 }}>
        <DS.SectionDivider label="month-by-month" style={{ marginBottom: 36 }} />
        <div>
          {P.months.map((mo, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 28, padding: '24px 0', borderBottom: i < P.months.length - 1 ? '1px solid var(--hairline)' : 'none' }} className="month-row">
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--ink)' }}>{mo.m}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-faint)', marginTop: 4 }}>{mo.when}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 12 }}>{mo.title}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {mo.items.map((it, j) => (
                    <li key={j} style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-muted)', paddingLeft: 18, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--clay)' }}>▸</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { WorkInProgress });
