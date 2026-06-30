import * as React from 'react';

/** A full-width hairline with an optional mono label ("// 01 — about"). */
export interface SectionDividerProps {
  label?: React.ReactNode;
  index?: number | string | null;
  style?: React.CSSProperties;
}

export function SectionDivider(props: SectionDividerProps): JSX.Element;
