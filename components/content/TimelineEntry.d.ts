import * as React from 'react';

/**
 * One role in the experience timeline — clay node + rail, role/org/dates,
 * summary, bullets, and a tech tag row.
 *
 * @startingPoint section="Content" subtitle="Experience timeline entry" viewport="720x260"
 */
export interface TimelineEntryProps {
  role: React.ReactNode;
  org: React.ReactNode;
  summary?: React.ReactNode;
  dates: React.ReactNode;
  bullets?: React.ReactNode[];
  tags?: React.ReactNode[];
  /** Hide the connecting rail below (last item). @default false */
  last?: boolean;
  style?: React.CSSProperties;
}

export function TimelineEntry(props: TimelineEntryProps): JSX.Element;
