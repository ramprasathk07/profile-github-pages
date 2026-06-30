import React from 'react';

/**
 * Tabs — text-style navigation tabs with a clay underline on the active tab.
 * Matches the portfolio's top nav. Controlled via `value` / `onChange`.
 */
export function Tabs({ items = [], value, onChange = () => {}, style = {} }) {
  return (
    <div
      role="tablist"
      style={{
        display: 'flex', alignItems: 'center', gap: '4px',
        borderBottom: '1px solid var(--hairline)', ...style,
      }}
    >
      {items.map((it) => {
        const key = typeof it === 'string' ? it : it.value;
        const label = typeof it === 'string' ? it : it.label;
        const active = key === value;
        return (
          <TabButton key={key} active={active} label={label} onClick={() => onChange(key)} />
        );
      })}
    </div>
  );
}

function TabButton({ active, label, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none', background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: '14px',
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--ink)' : hover ? 'var(--ink-muted)' : 'var(--ink-faint)',
        padding: '11px 13px 12px', position: 'relative',
        transition: 'color var(--dur-fast) var(--ease-out)',
      }}
    >
      {label}
      <span
        style={{
          position: 'absolute', left: '13px', right: '13px', bottom: '-1px', height: '2px',
          background: 'var(--clay)',
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left', transition: 'transform var(--dur-base) var(--ease-out)',
        }}
      />
    </button>
  );
}
