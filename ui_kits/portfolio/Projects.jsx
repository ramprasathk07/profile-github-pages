/* Projects — filterable repo grid. */

function Projects() {
  const { ProjectCard } = DS;
  const [filter, setFilter] = React.useState('all');
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat.includes(filter));
  return (
    <div style={{ padding: '56px 0 64px' }}>
      <header style={{ maxWidth: '64ch' }}>
        <div className="ds-eyebrow" style={{ color: 'var(--clay)' }}>// 03 — repos</div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300, letterSpacing: '-0.025em', marginTop: 16, lineHeight: 1.04 }}>
          Selected work.
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.6, color: 'var(--ink-muted)', marginTop: 18 }}>
          {PROJECTS.length} repositories — multi-agent supply-chain security, quantization, GRPO RL loops, sparse MoE from scratch, and hackathon wins.
        </p>
      </header>

      {/* filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '32px 0 36px', paddingBottom: 24, borderBottom: '1px solid var(--hairline)' }}>
        {PROJECT_FILTERS.map(f => {
          const active = f === filter;
          return (
            <button key={f} onClick={() => setFilter(f)} style={{
              appearance: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.02em',
              padding: '6px 12px', borderRadius: 'var(--radius-pill)',
              border: '1px solid ' + (active ? 'var(--ink)' : 'var(--hairline-strong)'),
              background: active ? 'var(--ink)' : 'transparent',
              color: active ? 'var(--paper)' : 'var(--ink-muted)',
              transition: 'all var(--dur-fast) var(--ease-out)',
            }}>{f}</button>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 16 }}>
        {shown.map((p, i) => (
          <ProjectCard key={p.title} badge={p.badge} badgeTone={p.badgeTone} icon={p.icon}
            title={p.title} blurb={p.blurb} tags={p.tags} links={p.links} repo={p.repo} />
        ))}
      </div>

      <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--hairline)' }}>
        <DS.ArrowLink href={PROFILE.github} tone="ink">see all repositories on github</DS.ArrowLink>
      </div>
    </div>
  );
}

Object.assign(window, { Projects });
