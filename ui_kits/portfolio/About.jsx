/* About — the home view: hero, profile, stats, experience, stack, achievements, research, education. */

function HeroJson() {
  const j = PROFILE.ramjson;
  const line = (k, v, last) => (
    <div style={{ display: 'flex', gap: 6 }}>
      <span style={{ color: 'var(--cobalt)' }}>"{k}"</span>
      <span style={{ color: 'var(--ink-ghost)' }}>:</span>
      <span style={{ color: 'var(--clay-hover)' }}>{JSON.stringify(v)}</span>
      {!last && <span style={{ color: 'var(--ink-ghost)' }}>,</span>}
    </div>
  );
  const keys = Object.keys(j);
  return (
    <div style={{
      background: 'var(--paper-raised)', border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden', minWidth: 0,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '11px 14px',
        borderBottom: '1px solid var(--hairline)',
      }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--clay)' }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--warning)' }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--positive)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', marginLeft: 6 }}>~/whoami · cat ram.json</span>
      </div>
      <div style={{ padding: '18px 18px', fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.85, color: 'var(--ink)' }}>
        <div style={{ color: 'var(--ink-ghost)' }}>{'{'}</div>
        <div style={{ paddingLeft: 18 }}>{keys.map((k, i) => <div key={k}>{line(k, j[k], i === keys.length - 1)}</div>)}</div>
        <div style={{ color: 'var(--ink-ghost)' }}>{'}'}<span style={{ marginLeft: 4, animation: 'blink 1.1s steps(1) infinite', color: 'var(--clay)' }}>█</span></div>
      </div>
    </div>
  );
}

function About({ onNav }) {
  const { Button, Tag, Stat, SectionDivider, ArrowLink, TimelineEntry } = DS;
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '56px 0 12px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 9, marginBottom: 28,
          fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)',
          border: '1px solid var(--hairline)', borderRadius: 'var(--radius-pill)', padding: '6px 13px', background: 'var(--paper)',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--positive)', boxShadow: '0 0 0 3px var(--positive-wash)' }} />
          {PROFILE.status}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.45fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }} className="hero-grid">
          <div>
            <h1 style={{ fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 300, lineHeight: 1.02, letterSpacing: '-0.025em' }}>
              {PROFILE.headline}
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.6, color: 'var(--ink-muted)', marginTop: 26, maxWidth: '54ch' }}>
              {PROFILE.tagline}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <Button variant="primary" iconRight="→" onClick={() => onNav('projects')}>See projects</Button>
              <Button variant="secondary" onClick={() => onNav('contact')}>Get in touch</Button>
            </div>
            <div style={{ display: 'flex', gap: 22, marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              <a href={PROFILE.github} style={{ color: 'var(--ink-muted)', display: 'inline-flex', gap: 7, alignItems: 'center' }}><Icon name="github" size={15} /> github</a>
              <a href={PROFILE.linkedin} style={{ color: 'var(--ink-muted)', display: 'inline-flex', gap: 7, alignItems: 'center' }}><Icon name="linkedin" size={15} /> linkedin</a>
              <a href={'mailto:' + PROFILE.email} style={{ color: 'var(--ink-muted)', display: 'inline-flex', gap: 7, alignItems: 'center' }}><Icon name="mail" size={15} /> email</a>
            </div>
          </div>
          <HeroJson />
        </div>
        {/* stats */}
        <div style={{ display: 'flex', gap: 56, marginTop: 56, paddingTop: 36, borderTop: '1px solid var(--hairline)', flexWrap: 'wrap' }}>
          {STATS.map((s, i) => <Stat key={i} value={s.value} label={s.label} accent={s.accent} />)}
        </div>
      </section>

      {/* PROFILE */}
      <section style={{ padding: '56px 0' }}>
        <SectionDivider index={1} label="profile" style={{ marginBottom: 36 }} />
        <div className="ds-prose" style={{ maxWidth: '70ch' }}>
          {PROFILE_PROSE.map((p, i) => <p key={i} style={{ marginTop: i ? '1.1em' : 0 }}>{p}</p>)}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ padding: '20px 0 56px' }}>
        <SectionDivider index={2} label="experience" style={{ marginBottom: 40 }} />
        <div style={{ maxWidth: 820 }}>
          {EXPERIENCE.map((e, i) => (
            <TimelineEntry key={i} {...e} last={i === EXPERIENCE.length - 1} />
          ))}
        </div>
      </section>

      {/* STACK */}
      <section style={{ padding: '20px 0 56px' }}>
        <SectionDivider index={3} label="stack" style={{ marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '28px 40px' }}>
          {STACK.map((g, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 14 }}>{g.group}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.items.map((it, j) => <Tag key={j}>{it}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section style={{ padding: '20px 0 56px' }}>
        <SectionDivider index={4} label="achievements" style={{ marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} style={{ border: '1px solid var(--hairline)', borderRadius: 'var(--radius-md)', padding: '22px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', color: 'var(--clay)', marginBottom: 14 }}>{a.kicker}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 20, lineHeight: 1.2, color: 'var(--ink)' }}>{a.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-muted)', marginTop: 12 }}>{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH + EDUCATION */}
      <section style={{ padding: '20px 0 64px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56 }} className="re-grid">
        <div>
          <SectionDivider index={5} label="research" style={{ marginBottom: 32 }} />
          {RESEARCH.map((r, i) => (
            <div key={i} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: i < RESEARCH.length - 1 ? '1px solid var(--hairline)' : 'none' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 19, lineHeight: 1.25, color: 'var(--ink)' }}>{r.title}</h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--clay)', margin: '8px 0 10px' }}>{r.venue}</div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{r.body}</p>
            </div>
          ))}
        </div>
        <div>
          <SectionDivider index={6} label="education" style={{ marginBottom: 32 }} />
          {EDUCATION.map((e, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--hairline)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--ink)' }}>{e.school}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ink-muted)', marginTop: 4 }}>{e.degree}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-faint)', whiteSpace: 'nowrap' }}>{e.when}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { About });
