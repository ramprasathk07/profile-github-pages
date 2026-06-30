import * as React from 'react';

type TabItem = string | { value: string; label: React.ReactNode };

/**
 * Text-style navigation tabs with a clay underline on the active tab.
 *
 * @startingPoint section="Navigation" subtitle="Underlined section tabs" viewport="700x120"
 */
export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
