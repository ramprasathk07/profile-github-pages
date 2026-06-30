import React from 'react';
import { Tag } from '../core/Tag.jsx';

function GitHubMark({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function RepoButton({ href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-sans)', fontSize: '11.5px', fontWeight: 600,
        color: hover ? 'var(--paper)' : 'var(--ink)',
        background: hover ? 'var(--ink)' : 'transparent',
        border: '1px solid ' + (hover ? 'var(--ink)' : 'var(--hairline-strong)'),
        borderRadius: 'var(--radius-sm)', padding: '4px 9px', textDecoration: 'none',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      }}
    >
      <GitHubMark size={13} /> code
    </a>
  );
}

const STATUS = {
  flagship: { label: '★ FLAGSHIP', color: 'var(--clay-hover)', bg: 'var(--clay-wash)' },
  active:   { label: 'IN PROGRESS', color: 'var(--positive)', bg: 'var(--positive-wash)' },
  research: { label: 'RESEARCH', color: 'var(--cobalt)', bg: 'var(--cobalt-wash)' },
  next:     { label: 'QUEUED', color: 'var(--warning)', bg: 'var(--warning-wash)' },
  planned:  { label: 'PLANNED', color: 'var(--ink-faint)', bg: 'var(--paper-raised)' },
};

/**
 * PlanRepo — a roadmap entry for the Work-in-Progress tab. Rank number,
 * repo name, status pill, timeline, the working signal, and domain tags.
 * Started repos show a progress bar; not-yet-started ones blur their
 * description (name-only "coming soon" treatment). A `repo` URL renders a
 * compact GitHub "code" button.
 */
export function PlanRepo({
  rank,
  name,
  status = 'planned',
  timeline,
  signal,
  domains = [],
  progress = null,
  repo = null,
  blurred = false,
  style = {},
}) {
  const s = STATUS[status] || STATUS.planned;
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '44px 1fr', gap: '20px',
      padding: '24px 0', borderBottom: '1px solid var(--hairline)', ...style,
    }}>
      <div style={{
        fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: '34px',
        color: blurred ? 'var(--ink-ghost)' : 'var(--ink-faint)', lineHeight: 1, letterSpacing: '-0.02em',
      }}>
        {String(rank).padStart(2, '0')}
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <h3 style={{
            fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '17px',
            color: 'var(--ink)', letterSpacing: '-0.01em',
          }}>
            {name}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.1em', color: s.color, background: s.bg,
            padding: '3px 7px', borderRadius: 'var(--radius-xs)',
          }}>
            {s.label}
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {repo && <RepoButton href={repo} />}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-faint)' }}>
              {timeline}
            </span>
          </div>
        </div>

        {/* signal — blurred + redacted for not-yet-started repos */}
        {blurred ? (
          <div style={{ position: 'relative', marginTop: '10px' }}>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.6,
              color: 'var(--ink-muted)', filter: 'blur(4.5px)', userSelect: 'none',
              pointerEvents: 'none', opacity: 0.7,
            }} aria-hidden="true">
              {signal}
            </p>
            <span style={{
              position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)',
              fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-faint)',
              display: 'inline-flex', alignItems: 'center', gap: '7px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ink-ghost)' }} />
              details coming soon
            </span>
          </div>
        ) : (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.6,
            color: 'var(--ink-muted)', marginTop: '10px',
          }}>
            {signal}
          </p>
        )}

        {/* progress bar — only for started repos */}
        {progress != null && !blurred && (
          <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flex: 1, height: '5px', background: 'var(--paper-sunken)', borderRadius: 'var(--radius-pill)', overflow: 'hidden', maxWidth: '320px' }}>
              <div style={{ width: progress + '%', height: '100%', background: 'var(--clay)', borderRadius: 'var(--radius-pill)' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-faint)' }}>{progress}%</span>
          </div>
        )}

        {/* domains */}
        {domains.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--ink-ghost)',
            }}>
              domains
            </span>
            {domains.map((t, i) => <Tag key={i} tone="outline">{t}</Tag>)}
          </div>
        )}
      </div>
    </div>
  );
}
