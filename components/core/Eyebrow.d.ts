import * as React from 'react';

/** A mono uppercase kicker, optionally numbered like "// 01 — about". */
export interface EyebrowProps {
  children: React.ReactNode;
  /** Section number, zero-padded automatically. */
  index?: number | string | null;
  /** Show the leading "//". @default true */
  slash?: boolean;
  /** @default "muted" */
  tone?: 'muted' | 'accent' | 'strong';
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
