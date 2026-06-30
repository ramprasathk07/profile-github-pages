import * as React from 'react';

/** A large serif figure with a mono label — "2+ years", "#1", etc. */
export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  /** Render the figure in clay. @default false */
  accent?: boolean;
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
