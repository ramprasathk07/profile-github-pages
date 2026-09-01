/* App shell — top nav, tab routing, contact footer. */

const TABS = [
  { value: 'about', label: 'about' },
  { value: 'blog', label: 'blog' },
  { value: 'wip', label: 'work in progress' },
  { value: 'projects', label: 'projects' },
];

function Nav({ tab, setTab }) {
  const { Button } = DS;
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(251,249,244,0.86)',
      backdropFilter: 'saturate(140%) blur(10px)', WebkitBackdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', height: 'var(--nav-height)', gap: 24 }}>
        {/* wordmark */}
        <button onClick={() => setTab('about')} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 500, color: 'var(--clay)' }}>~/</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 300, letterSpacing: '-0.01em', color: 'var(--ink)' }}>ram <b style={{ fontWeight: 600 }}>prasath</b></span>
        </button>
        {/* tabs */}
        <nav style={{ display: 'flex', gap: 2, marginLeft: 18 }} className="nav-tabs">
          {TABS.map(t => {
            const active = t.value === tab;
            return (
              <button key={t.value} onClick={() => setTab(t.value)} style={{
                appearance: 'none', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: active ? 600 : 500,
                color: active ? 'var(--ink)' : 'var(--ink-faint)', padding: '8px 12px', position: 'relative',
                transition: 'color var(--dur-fast) var(--ease-out)',
              }}>
                {t.label}
                <span style={{ position: 'absolute', left: 12, right: 12, bottom: -1, height: 2, background: 'var(--clay)', transform: active ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform var(--dur-base) var(--ease-out)' }} />
              </button>
            );
          })}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-faint)' }} className="nav-status">open to roles</span>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="View code on GitHub" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 'var(--radius-sm)', color: 'var(--ink)',
            border: '1px solid var(--hairline-strong)', transition: 'background var(--dur-fast) var(--ease-out)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--paper-raised)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
            <Icon name="github" size={17} />
          </a>
          <Button as="a" href="../../resume.pdf" target="_blank" rel="noreferrer" variant="secondary" size="sm" iconRight={<Icon name="arrow-up-right" size={13} />}>resume.pdf</Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ innerRef }) {
  return (
    <footer ref={innerRef} style={{ borderTop: '1px solid var(--hairline)', background: 'var(--paper-raised)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 32px' }}>
        <div className="ds-eyebrow" style={{ color: 'var(--clay)' }}>// let's ship</div>
        <h2 style={{ fontSize: 'clamp(32px, 4.6vw, 48px)', fontWeight: 300, letterSpacing: '-0.025em', marginTop: 18, lineHeight: 1.05, maxWidth: '16ch' }}>
          Open to inference, agentic AI &amp; MLOps roles.
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.6, color: 'var(--ink-muted)', marginTop: 18, maxWidth: '50ch' }}>
          Hit me up if you're shipping LLMs into production. Fast to reach, faster to ship.
        </p>
        <div style={{ display: 'flex', gap: 26, marginTop: 34, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 14 }}>
          <a href={'mailto:' + PROFILE.email} style={{ color: 'var(--ink)', display: 'inline-flex', gap: 8, alignItems: 'center' }}><Icon name="mail" size={15} /> {PROFILE.email}</a>
          <a href={PROFILE.linkedin} style={{ color: 'var(--ink)', display: 'inline-flex', gap: 8, alignItems: 'center' }}><Icon name="linkedin" size={15} /> linkedin</a>
          <a href={PROFILE.github} style={{ color: 'var(--ink)', display: 'inline-flex', gap: 8, alignItems: 'center' }}><Icon name="github" size={15} /> github</a>
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-faint)' }}>
          <span>📍 {PROFILE.location} · {PROFILE.phone}</span>
          <span>© Ram Prasath K · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [tab, setTab] = React.useState('about');
  const footerRef = React.useRef(null);
  const topRef = React.useRef(null);

  const nav = (dest) => {
    if (dest === 'contact') {
      if (footerRef.current) window.scrollTo({ top: footerRef.current.offsetTop - 40, behavior: 'smooth' });
      return;
    }
    setTab(dest);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  return (
    <div ref={topRef}>
      <Nav tab={tab} setTab={(t) => { setTab(t); window.scrollTo({ top: 0 }); }} />
      <main style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px', minHeight: '60vh' }}>
        {tab === 'about' && <About onNav={nav} />}
        {tab === 'blog' && <Blog />}
        {tab === 'wip' && <WorkInProgress />}
        {tab === 'projects' && <Projects />}
      </main>
      <Footer innerRef={footerRef} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
