import React from 'react';

/**
 * BlogCard — a single entry in the blog index. Minimal, Thinking-Machines
 * style: topic kicker, serif title, dek, and a date · reading-time meta line.
 */
export function BlogCard({
  title,
  dek,
  topic = null,
  date,
  readingTime = null,
  href = '#',
  onClick,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', textDecoration: 'none',
        padding: '28px 0', borderBottom: '1px solid var(--hairline)', ...style,
      }}
    >
      {topic && (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--clay)',
          marginBottom: '12px',
        }}>
          {topic}
        </div>
      )}
      <h3 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '28px',
        lineHeight: 1.18, letterSpacing: '-0.015em',
        color: 'var(--ink)',
        textDecoration: hover ? 'underline' : 'none',
        textDecorationColor: 'var(--clay)', textUnderlineOffset: '4px',
        textDecorationThickness: '1px',
      }}>
        {title}
      </h3>
      {dek && (
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: '17px', lineHeight: 1.55,
          color: 'var(--ink-muted)', marginTop: '12px', maxWidth: '60ch',
        }}>
          {dek}
        </p>
      )}
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-faint)',
        marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'center',
        letterSpacing: '0.02em',
      }}>
        <span>{date}</span>
        {readingTime && <><span style={{ color: 'var(--ink-ghost)' }}>·</span><span>{readingTime}</span></>}
      </div>
    </a>
  );
}
