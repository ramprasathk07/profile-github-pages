import React from 'react';

/**
 * Callout — an inset note for the prose / blog body. Left clay rule,
 * raised paper background. For asides, key results, or rules.
 */
export function Callout({ children, label = null, tone = 'neutral', style = {} }) {
  const TONES = {
    neutral: { bar: 'var(--clay)', bg: 'var(--paper-raised)' },
    info:    { bar: 'var(--cobalt)', bg: 'var(--cobalt-wash)' },
    positive:{ bar: 'var(--positive)', bg: 'var(--positive-wash)' },
  };
  const t = TONES[tone] || TONES.neutral;
  return (
    <div style={{
      borderLeft: `2px solid ${t.bar}`, background: t.bg,
      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
      padding: '16px 20px', ...style,
    }}>
      {label && (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '10.5px', fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: t.bar,
          marginBottom: '8px',
        }}>
          {label}
        </div>
      )}
      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: '16px', lineHeight: 1.6,
        color: 'var(--ink)',
      }}>
        {children}
      </div>
    </div>
  );
}
