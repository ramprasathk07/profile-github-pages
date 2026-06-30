import * as React from 'react';

/** A text link with a trailing arrow that nudges on hover ("see projects →"). */
export interface ArrowLinkProps {
  children: React.ReactNode;
  href?: string;
  /** @default "accent" */
  tone?: 'accent' | 'ink';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function ArrowLink(props: ArrowLinkProps): JSX.Element;
