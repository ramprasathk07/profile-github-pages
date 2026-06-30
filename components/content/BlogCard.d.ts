import * as React from 'react';

/**
 * A single entry in the blog index — minimal Thinking-Machines style:
 * topic kicker, serif title, dek, and a date · reading-time meta line.
 *
 * @startingPoint section="Content" subtitle="Minimal blog index row" viewport="700x220"
 */
export interface BlogCardProps {
  title: React.ReactNode;
  dek?: React.ReactNode;
  topic?: React.ReactNode;
  date: React.ReactNode;
  readingTime?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function BlogCard(props: BlogCardProps): JSX.Element;
