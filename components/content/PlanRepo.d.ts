import * as React from 'react';

/**
 * A roadmap entry for the Work-in-Progress tab — rank, repo name, status
 * pill, timeline, the working signal, and domain tags. Started repos show
 * a progress bar; not-yet-started ones blur their description.
 *
 * @startingPoint section="Content" subtitle="Roadmap / priority-stack entry" viewport="720x180"
 */
export interface PlanRepoProps {
  rank: number | string;
  name: React.ReactNode;
  status?: 'flagship' | 'active' | 'research' | 'next' | 'planned';
  timeline: React.ReactNode;
  signal: React.ReactNode;
  /** Domain tags (e.g. "mlops", "llm", "lora") — replaces company targets. */
  domains?: React.ReactNode[];
  /** 0–100 completion bar (shown only when not blurred). */
  progress?: number | null;
  /** Repository URL — renders a compact GitHub "code" button. */
  repo?: string;
  /** Blur the description for a name-only "coming soon" treatment. */
  blurred?: boolean;
  style?: React.CSSProperties;
}

export function PlanRepo(props: PlanRepoProps): JSX.Element;
