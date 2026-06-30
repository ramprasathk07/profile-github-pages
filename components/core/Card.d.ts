import * as React from 'react';

/** Paper surface with a hairline border — the base content container. */
export interface CardProps {
  children: React.ReactNode;
  /** Adds lift + clay border on hover. @default false */
  interactive?: boolean;
  /** @default "page" */
  surface?: 'page' | 'raised' | 'pure';
  /** @default "24px" */
  padding?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
