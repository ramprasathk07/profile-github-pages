import * as React from 'react';

interface ProjectLink { label: string; href: string; }

/**
 * A repository / project entry: optional badge, title, blurb, tags, links,
 * and a primary "View code" GitHub button.
 *
 * @startingPoint section="Content" subtitle="Project / repo card with tags + GitHub button" viewport="420x340"
 */
export interface ProjectCardProps {
  title: React.ReactNode;
  blurb: React.ReactNode;
  tags?: React.ReactNode[];
  /** Badge text, e.g. "★ featured" or "🏆 WINNER". */
  badge?: React.ReactNode;
  badgeTone?: 'accent' | 'solid' | 'cobalt' | 'neutral';
  links?: ProjectLink[];
  /** Repository URL — renders a "View code" GitHub button. */
  repo?: string;
  /** Optional leading glyph/emoji before the title. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ProjectCard(props: ProjectCardProps): JSX.Element;
