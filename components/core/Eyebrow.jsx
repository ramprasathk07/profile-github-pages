import React from 'react';

/**
 * Eyebrow — mono uppercase kicker, optionally numbered like "// 01 — about".
 */
export function Eyebrow({ children, index = null, slash = true, tone = 'muted', style = {}, ...rest }) {
  const color = tone === 'accent' ? 'var(--clay)' : tone === 'strong' ? 'var(--ink)' : 'var(--ink-faint)';
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)', fontSize: '11.5px', fontWeight: 500,
        letterSpacing: '0.14em', textTransform: 'uppercase', color,
        display: 'flex', alignItems: 'center', gap: '8px', ...style,
      }}
      {...rest}
    >
      {(slash || index != null) && (
        <span style={{ color: 'var(--clay)' }}>
          {slash ? '//' : ''}{index != null ? ` ${String(index).padStart(2, '0')}` : ''}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
