"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/types";
import { categories } from "@/content/projects";
import { CoverImage } from "@/components/cover-image";
import { StatusMark } from "@/components/project-row";
import { ExternalLink } from "@/components/ui";

type Filter = "All" | ProjectCategory;

/** Filterable showcase list for /projects: a pill bar plus large image + detail rows. */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const pills: { label: Filter; count: number }[] = [
    { label: "All", count: projects.length },
    ...categories
      .map((c) => ({ label: c as Filter, count: projects.filter((p) => p.category === c).length }))
      .filter((c) => c.count > 0),
  ];

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {pills.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setFilter(p.label)}
            aria-pressed={filter === p.label}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              filter === p.label
                ? "border-ink bg-ink text-paper"
                : "border-rule text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {p.label}
            <span className={`ml-1.5 ${filter === p.label ? "text-paper/70" : "text-muted/80"}`}>{p.count}</span>
          </button>
        ))}
      </div>

      <div>
        {filtered.map((project, i) => (
          <article key={project.slug} className="grid gap-6 border-t border-rule py-10 first:border-t-0 lg:grid-cols-2 lg:gap-12">
            <Link
              href={`/projects/${project.slug}`}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-rule bg-raised"
            >
              <CoverImage project={project} />
            </Link>

            <div className="min-w-0">
              <p className="text-sm text-muted">
                <span className="text-muted/70">{String(i + 1).padStart(2, "0")}</span> &middot; {project.category}
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.015em] sm:text-3xl">
                <Link href={`/projects/${project.slug}`} className="hover:text-accent">
                  {project.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-xl text-muted">{project.summary}</p>

              {project.tech.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full border border-rule px-3 py-1 text-sm text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 font-medium hover:text-accent">
                  View case study
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <StatusMark status={project.status} />
                {project.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href} className="text-muted hover:text-accent">
                    {l.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
