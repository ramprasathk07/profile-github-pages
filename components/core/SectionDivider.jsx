import React from 'react';

/**
 * SectionDivider — a full-width hairline with an optional mono label,
 * echoing the "// 01 — about" section markers in the portfolio.
 */
export function SectionDivider({ label = null, index = null, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', ...style }}>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '11.5px', fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)',
            whiteSpace: 'nowrap', flexShrink: 0,
          }}
        >
          <span style={{ color: 'var(--clay)' }}>
            //{index != null ? ` ${String(index).padStart(2, '0')}` : ''}
          </span>{' '}
          {label}
        </span>
      )}
      <span style={{ flex: 1, height: '1px', background: 'var(--hairline)' }} />
    </div>
  );
}
