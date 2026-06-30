import React from 'react';
import { Tag } from '../core/Tag.jsx';

/**
 * TimelineEntry — one role in the experience timeline: title, org, dates,
 * a one-line summary, bullets, and a tech tag row. Left clay rule + node.
 */
export function TimelineEntry({
  role,
  org,
  summary,
  dates,
  bullets = [],
  tags = [],
  last = false,
  style = {},
}) {
  return (
    <div style={{ display: 'flex', gap: '22px', ...style }}>
      {/* rail */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '11px' }}>
        <span style={{
          width: '11px', height: '11px', borderRadius: '50%',
          background: 'var(--paper)', border: '2px solid var(--clay)', marginTop: '5px',
        }} />
        {!last && <span style={{ width: '1px', flex: 1, background: 'var(--hairline-strong)', marginTop: '4px' }} />}
      </div>
      {/* body */}
      <div style={{ paddingBottom: last ? 0 : '40px', flex: 1 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: '16px', flexWrap: 'wrap',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '21px',
            color: 'var(--ink)', letterSpacing: '-0.01em',
          }}>
            {role} <span style={{ color: 'var(--ink-faint)' }}>· {org}</span>
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-faint)',
            whiteSpace: 'nowrap', letterSpacing: '0.02em',
          }}>
            {dates}
          </span>
        </div>
        {summary && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '13.5px', color: 'var(--ink-faint)',
            marginTop: '4px',
          }}>
            {summary}
          </p>
        )}
        {bullets.length > 0 && (
          <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {bullets.map((b, i) => (
              <li key={i} style={{
                fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.6,
                color: 'var(--ink-muted)', paddingLeft: '18px', position: 'relative',
              }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--clay)' }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
            {tags.map((t, i) => <Tag key={i} tone="outline">{t}</Tag>)}
          </div>
        )}
      </div>
    </div>
  );
}
