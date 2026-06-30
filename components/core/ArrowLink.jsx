import React from 'react';

/**
 * ArrowLink — a text link with a trailing arrow that nudges on hover.
 * The portfolio's signature "see projects →" affordance.
 */
export function ArrowLink({ children, href = '#', tone = 'accent', onClick, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'ink' ? 'var(--ink)' : 'var(--clay)';
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600,
        color, textDecoration: 'none',
        borderBottom: hover ? `1px solid ${tone === 'ink' ? 'var(--ink)' : 'var(--clay)'}` : '1px solid transparent',
        paddingBottom: '1px', transition: 'border-color var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
      <span style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>→</span>
    </a>
  );
}
