import React from 'react';
import { Tag } from '../core/Tag.jsx';

function GitHubMark({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/**
 * ProjectCard — a repository / project entry: optional badge, title, blurb,
 * tag row, links, and a primary "View code" GitHub button.
 * The core unit of the Projects grid.
 */
export function ProjectCard({
  title,
  blurb,
  tags = [],
  badge = null,
  badgeTone = 'accent',
  links = [],
  repo = null,
  icon = null,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-page)',
        border: '1px solid var(--hairline)',
        borderColor: hover ? 'var(--clay)' : 'var(--hairline)',
        borderRadius: 'var(--radius-md)', padding: '22px 22px 20px',
        transition: 'border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        transform: hover ? 'translateY(-2px)' : 'none', height: '100%', ...style,
      }}
    >
      {badge && (
        <div style={{ marginBottom: '14px' }}>
          <Tag tone={badgeTone}>{badge}</Tag>
        </div>
      )}
      <h3 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '22px',
        letterSpacing: '-0.01em', color: 'var(--ink)', lineHeight: 1.15,
        display: 'flex', alignItems: 'center', gap: '9px',
      }}>
        {icon && <span style={{ fontSize: '0.9em' }}>{icon}</span>}
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.6,
        color: 'var(--ink-muted)', marginTop: '10px', flex: 1,
      }}>
        {blurb}
      </p>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
          {tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
        </div>
      )}
      {(links.length > 0 || repo) && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px', marginTop: '16px',
          paddingTop: '14px', borderTop: '1px solid var(--hairline)', flexWrap: 'wrap',
        }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 500,
              color: 'var(--clay)', textDecoration: 'none', letterSpacing: '0.01em',
            }}>
              {l.label} ↗
            </a>
          ))}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              style={{
                marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '7px',
                fontFamily: 'var(--font-sans)', fontSize: '12.5px', fontWeight: 600,
                color: hover ? 'var(--paper)' : 'var(--ink)',
                background: hover ? 'var(--ink)' : 'transparent',
                border: '1px solid ' + (hover ? 'var(--ink)' : 'var(--hairline-strong)'),
                borderRadius: 'var(--radius-sm)', padding: '6px 11px', textDecoration: 'none',
                transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
              }}
            >
              <GitHubMark size={14} /> View code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
