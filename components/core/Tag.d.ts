import * as React from 'react';

/** A small technical chip for stacks, tools, and topics (e.g. "vLLM", "GRPO"). */
export interface TagProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'accent' | 'cobalt' | 'solid' | 'outline';
  /** Use the mono typeface (technical). @default true */
  mono?: boolean;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
