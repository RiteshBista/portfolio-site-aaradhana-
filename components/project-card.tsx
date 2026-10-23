import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusMark } from "@/components/project-row";
import { CoverImage } from "@/components/cover-image";

/**
 * A project as a drag-gallery card for the homepage teaser. The full
 * showcase list (ProjectsExplorer) lives on /projects.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative w-[19rem] shrink-0 snap-start sm:w-[22rem]">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 rounded-md focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <span className="sr-only">{project.title}</span>
      </Link>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-rule bg-raised transition-transform duration-300 group-hover:scale-[1.02]">
        <CoverImage project={project} sizes="(min-width: 640px) 22rem, 19rem" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold leading-tight tracking-[-0.015em] group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[0.9375rem] text-muted">{project.summary}</p>
        <div className="mt-2">
          <StatusMark status={project.status} />
        </div>
      </div>
    </article>
  );
}
