import * as React from 'react';

/** An inset note for prose / blog body — left clay rule, raised paper. */
export interface CalloutProps {
  children: React.ReactNode;
  label?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'info' | 'positive';
  style?: React.CSSProperties;
}

export function Callout(props: CalloutProps): JSX.Element;
