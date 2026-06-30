import React from 'react';

const SIZES = {
  sm: { padding: '6px 12px', fontSize: '13px', gap: '6px' },
  md: { padding: '9px 16px', fontSize: '14px', gap: '7px' },
  lg: { padding: '12px 22px', fontSize: '15px', gap: '8px' },
};

const VARIANTS = {
  primary:   { background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' },
  secondary: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--hairline-strong)' },
  accent:    { background: 'var(--clay)', color: '#fff', border: '1px solid var(--clay)' },
  ghost:     { background: 'transparent', color: 'var(--ink-muted)', border: '1px solid transparent' },
};

const HOVER = {
  primary:   { background: 'var(--ink-muted)' },
  secondary: { background: 'var(--paper-raised)', borderColor: 'var(--ink-faint)' },
  accent:    { background: 'var(--clay-hover)', borderColor: 'var(--clay-hover)' },
  ghost:     { background: 'var(--paper-raised)', color: 'var(--ink)' },
};

/**
 * Button — the primary action control. Ink-filled by default; restrained.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const Tag = href ? 'a' : as;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: 1,
    letterSpacing: '0.01em', borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    ...s, ...v,
    gap: s.gap,
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style,
  };

  return (
    <Tag
      style={base}
      href={href}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex', fontSize: '1.05em' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex', fontSize: '1.05em' }}>{iconRight}</span>}
    </Tag>
  );
}
