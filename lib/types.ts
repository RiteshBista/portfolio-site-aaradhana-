/**
 * Content types for the portfolio.
 *
 * Anything we don't know yet is written as a `Todo` instead of being made up.
 * Todos render as clearly marked notes on the page (see <TodoNote />), so a
 * missing fact is always visible rather than silently invented.
 */

export type Todo = { todo: string };

/** A block of rich content: a paragraph, a bullet list, or a placeholder. */
export type Block = string | { list: string[] } | Todo;

export type Link = { label: string; href: string };

export type ProjectCategory =
  | "Ventures"
  | "Digital Growth"
  | "Design & Web"
  | "Education & Mentorship";

export type ProjectStatus =
  | "Live beta"
  | "Live"
  | "Completed"
  | "Ongoing"
  | "In progress"
  | "Prototype";

/** Who the work was done for / with. Shown on every card so context is never ambiguous. */
export type ProjectContext = "Co-founded venture" | "Employment";

export type WorkflowStep = { title: string; detail: string };

export type Screenshot = { src: string; alt: string; caption?: string };

export type CaseStudy = {
  overview: Block[];
  problem: Block[];
  users: Block[];
  role: Block[];
  /** Keep the person's own contribution separate from team, vendor and AI-tool work. */
  contribution: { mine: Block[]; others: Block[] };
  workflow?: { caption: string; steps: WorkflowStep[] };
  implementation: Block[];
  decisions: Block[];
  testing: Block[];
  results: Block[];
  limitations: Block[];
  screenshots: Screenshot[];
  /** Optional list of related live sites (used for agency work). */
  sites?: Link[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  context: ProjectContext;
  role: string | Todo;
  period?: string;
  /** Technologies actually used. Empty means "not documented yet". */
  tech: string[];
  links: Link[];
  /** Only real repositories. Leave undefined rather than inventing one. */
  github?: string;
  /** A real cover image for the homepage gallery card. Leave undefined rather than inventing one. */
  coverImage?: { src: string; alt: string };
  featured?: boolean;
  /** Draft projects are kept in the codebase but not shown or indexed. */
  draft?: boolean;
  caseStudy: CaseStudy;
};

export type Role = {
  title: string;
  org: string;
  orgUrl?: string;
  period: string;
  location?: string;
  kind: "engineering" | "business" | "research" | "education";
  summary?: string;
  points: Block[];
};

export function isTodo(value: unknown): value is Todo {
  return typeof value === "object" && value !== null && "todo" in value;
}
