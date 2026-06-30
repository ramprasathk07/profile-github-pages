import * as React from 'react';

/**
 * The primary action control — ink-filled by default, restrained and editorial.
 *
 * @startingPoint section="Core" subtitle="Action button — ink / outline / clay / ghost" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  /** Render as an anchor by passing href. */
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
