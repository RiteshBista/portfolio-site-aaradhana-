import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, visibleProjects } from "@/content/projects";
import type { Block } from "@/lib/types";
import { Blocks, Container, ExternalLink, TextOrTodo, TodoNote } from "@/components/ui";
import { StatusMark } from "@/components/project-row";
import { Workflow } from "@/components/workflow";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return visibleProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, type: "article", url: `/projects/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const sections: { id: string; title: string; blocks: Block[] }[] = [
    { id: "problem", title: "The problem", blocks: cs.problem },
    { id: "users", title: "Who it's for", blocks: cs.users },
    { id: "role", title: "My role", blocks: cs.role },
  ];
  const laterSections: { id: string; title: string; blocks: Block[] }[] = [
    { id: "implementation", title: "How it's built", blocks: cs.implementation },
    { id: "decisions", title: "Challenges and decisions", blocks: cs.decisions },
    { id: "testing", title: "Testing and validation", blocks: cs.testing },
    { id: "results", title: "Results and progress", blocks: cs.results },
    { id: "limitations", title: "Limitations and next steps", blocks: cs.limitations },
  ];

  const index = visibleProjects.findIndex((p) => p.slug === project.slug);
  const next = visibleProjects[(index + 1) % visibleProjects.length];

  return (
    <Container>
      <article>
        <header className="pb-10 pt-10 sm:pt-14">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-[0.9375rem] text-muted hover:text-ink">
            <ArrowLeft className="size-4" aria-hidden />
            All work
          </Link>
          <p className="mt-10 text-muted">{project.category}</p>
          <h1 className="mt-2 max-w-4xl text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-snug text-muted sm:text-2xl">{project.summary}</p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-rule py-6 text-[0.9375rem] sm:grid-cols-4">
            <Fact label="Status">
              <StatusMark status={project.status} />
            </Fact>
            <Fact label="Context">{project.context}</Fact>
            <Fact label="My role">
              <TextOrTodo value={project.role} />
            </Fact>
            <Fact label="When">{project.period ?? <span className="text-muted">Ongoing</span>}</Fact>
            <div className="col-span-2 sm:col-span-4">
              <dt className="text-muted">Technologies</dt>
              <dd className="mt-1">
                {project.tech.length > 0 ? project.tech.join(", ") : <TodoNote todo="the technologies used" inline />}
              </dd>
            </div>
            {project.links.length > 0 || project.github ? (
              <div className="col-span-2 sm:col-span-4">
                <dt className="text-muted">Links</dt>
                <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                  {project.links.map((l) => (
                    <ExternalLink key={l.href} href={l.href}>
                      {l.label}
                    </ExternalLink>
                  ))}
                  {project.github ? <ExternalLink href={project.github}>Source on GitHub</ExternalLink> : null}
                </dd>
              </div>
            ) : null}
          </dl>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_14rem] lg:gap-16">
          <div className="min-w-0 max-w-[42rem]">
            <CaseSection id="overview" title="Overview">
              <Blocks blocks={cs.overview} className="prose-serif" />
            </CaseSection>

            {sections.map((s) => (
              <CaseSection key={s.id} id={s.id} title={s.title}>
                <Blocks blocks={s.blocks} className="prose-serif" />
              </CaseSection>
            ))}

            <CaseSection id="contribution" title="Who did what">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-medium">My work</h3>
                  <Blocks blocks={cs.contribution.mine} className="mt-3 text-[0.9375rem]" />
                </div>
                <div>
                  <h3 className="font-medium">Team, services and tools</h3>
                  <Blocks blocks={cs.contribution.others} className="mt-3 text-[0.9375rem]" />
                </div>
              </div>
            </CaseSection>

            {cs.workflow ? (
              <CaseSection id="workflow" title="Workflow" wide>
                <Workflow steps={cs.workflow.steps} caption={cs.workflow.caption} />
              </CaseSection>
            ) : null}

            {cs.sites && cs.sites.length > 0 ? (
              <CaseSection id="sites" title="Live sites">
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {cs.sites.map((s) => (
                    <li key={s.href}>
                      <ExternalLink href={s.href}>{s.label}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            ) : null}

            {laterSections.map((s) => (
              <CaseSection key={s.id} id={s.id} title={s.title}>
                <Blocks blocks={s.blocks} className="prose-serif" />
              </CaseSection>
            ))}

            <CaseSection id="screenshots" title="Screenshots">
              {cs.screenshots.length > 0 ? (
                <div className="space-y-8">
                  {cs.screenshots.map((shot) => (
                    <figure key={shot.src}>
                      <Image src={shot.src} alt={shot.alt} width={1600} height={1000} className="h-auto w-full rounded-md border border-rule" sizes="(min-width: 1024px) 42rem, 100vw" />
                      {shot.caption ? <figcaption className="mt-2 text-sm text-muted">{shot.caption}</figcaption> : null}
                    </figure>
                  ))}
                </div>
              ) : (
                <TodoNote todo="Real screenshots of this work, saved in /public/images/projects/ and listed in content/projects.ts. Only use images you have permission to publish." />
              )}
            </CaseSection>
          </div>

          <aside className="hidden lg:block" aria-label="On this page">
            <nav className="sticky top-24 text-sm">
              <p className="font-medium">On this page</p>
              <ul className="mt-3 space-y-2 text-muted">
                {[
                  { id: "overview", title: "Overview" },
                  ...sections,
                  { id: "contribution", title: "Who did what" },
                  ...(cs.workflow ? [{ id: "workflow", title: "Workflow" }] : []),
                  ...(cs.sites?.length ? [{ id: "sites", title: "Live sites" }] : []),
                  ...laterSections,
                  { id: "screenshots", title: "Screenshots" },
                ].map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-ink">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </article>

      {next && next.slug !== project.slug ? (
        <nav aria-label="Next project" className="mt-20 border-t border-ink pt-8">
          <p className="text-muted">Next project</p>
          <Link href={`/projects/${next.slug}`} className="link mt-2 inline-block text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">
            {next.title}
          </Link>
        </nav>
      ) : null}
    </Container>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

function CaseSection({ id, title, children, wide = false }: { id: string; title: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-rule py-10 first:border-t-0 first:pt-0 ${wide ? "lg:-mr-[16rem]" : ""}`}>
      <h2 className="mb-5 text-xl font-semibold tracking-[-0.01em]">{title}</h2>
      {children}
    </section>
  );
}
