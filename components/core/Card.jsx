import React from 'react';

/**
 * Card — paper surface with a hairline border. The base container for
 * content blocks. `interactive` adds a subtle lift + clay border on hover.
 */
export function Card({
  children,
  interactive = false,
  surface = 'page',
  padding = '24px',
  style = {},
  as = 'div',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const SURFACES = {
    page: 'var(--surface-page)',
    raised: 'var(--paper-raised)',
    pure: 'var(--paper-pure)',
  };
  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: SURFACES[surface] || SURFACES.page,
        border: '1px solid var(--hairline)',
        borderColor: interactive && hover ? 'var(--clay)' : 'var(--hairline)',
        borderRadius: 'var(--radius-md)',
        padding,
        transition: 'border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
