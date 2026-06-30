import React from 'react';

/**
 * Stat — a large serif figure with a mono label. For "2+ years", "#1", etc.
 */
export function Stat({ value, label, accent = false, style = {} }) {
  return (
    <div style={{ ...style }}>
      <div
        style={{
          fontFamily: 'var(--font-serif)', fontWeight: 300,
          fontSize: '46px', lineHeight: 1, letterSpacing: '-0.02em',
          color: accent ? 'var(--clay)' : 'var(--ink)',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--ink-faint)', marginTop: '10px', maxWidth: '16ch',
        }}
      >
        {label}
      </div>
    </div>
  );
}
