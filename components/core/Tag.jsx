import React from 'react';

/**
 * Tag — small technical chip for stacks, tools, topics (e.g. "vLLM", "GRPO").
 */
export function Tag({ children, tone = 'neutral', mono = true, style = {}, ...rest }) {
  const TONES = {
    neutral: { background: 'var(--paper-raised)', color: 'var(--ink-muted)', border: '1px solid var(--hairline)' },
    accent:  { background: 'var(--clay-wash)', color: 'var(--clay-hover)', border: '1px solid transparent' },
    cobalt:  { background: 'var(--cobalt-wash)', color: 'var(--cobalt)', border: '1px solid transparent' },
    solid:   { background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' },
    outline: { background: 'transparent', color: 'var(--ink-muted)', border: '1px solid var(--hairline-strong)' },
  };
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
        fontSize: '11.5px', fontWeight: 500, lineHeight: 1,
        letterSpacing: mono ? '0.01em' : '0.01em',
        padding: '4px 8px', borderRadius: 'var(--radius-xs)',
        whiteSpace: 'nowrap', ...t, ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
