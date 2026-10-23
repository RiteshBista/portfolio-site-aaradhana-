import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { site } from "@/content/site";
import { visibleProjects } from "@/content/projects";
import { awards, certifications, education, languages, roles, skills } from "@/content/experience";
import { Container, ExternalLink } from "@/components/ui";
import { PrintButton } from "@/components/actions";
import { RoleEntry } from "@/components/role-entry";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Aaradhana Ojha: entrepreneur and aspiring design leader, co-founder of Amplify Digital, Array Codes and Koili. Skills, experience, projects and education.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <Container className="max-w-4xl">
      <header className="flex flex-col gap-6 pb-10 pt-14 sm:flex-row sm:items-end sm:justify-between sm:pt-20 print:pt-0">
        <div>
          <h1 className="text-[2.5rem] font-semibold leading-none tracking-[-0.03em] sm:text-5xl">{site.name}</h1>
          <p className="mt-3 text-lg text-muted">{site.tagline}</p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem]">
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <ExternalLink href={site.linkedin}>linkedin.com/in/aaradhanaojha</ExternalLink>
            {site.github ? <ExternalLink href={site.github}>GitHub</ExternalLink> : null}
            <span className="text-muted">{site.location}</span>
          </p>
        </div>
        <div className="no-print flex shrink-0 flex-wrap gap-3">
          {site.resumePdf ? (
            <a
              href={site.resumePdf}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-accent hover:text-on-accent"
            >
              <Download className="size-4" aria-hidden />
              Download resume (PDF)
            </a>
          ) : (
            <PrintButton />
          )}
        </div>
      </header>

      <ResumeSection title="Summary">
        <p>
          Entrepreneur and aspiring design leader focused on human-centered, technology-enabled solutions for SMEs and
          sustainable mobility in Nepal. Co-founder of Amplify Digital and Array Codes, supporting 100+ businesses through
          digital transformation, and Koili, an AI receptionist in live beta. STEAM Head & Design Teacher at Himalayan
          Whitehouse IB World School. Pursuing graduate study in Design.
        </p>
      </ResumeSection>

      <ResumeSection title="Skills">
        <dl className="space-y-2">
          {skills.map((g) => (
            <div key={g.group} className="grid gap-1 sm:grid-cols-[12rem_1fr] sm:gap-4">
              <dt className="text-muted">{g.group}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="[&>article:first-child]:border-t-0 [&>article:first-child]:pt-0">
          {roles.map((r) => (
            <RoleEntry key={`${r.org}-${r.title}`} role={r} compact />
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Projects">
        <ul className="space-y-3">
          {visibleProjects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="link font-medium">
                {p.title}
              </Link>
              <span className="text-muted"> ({p.status}). </span>
              {p.summary}
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Education">
        {education.map((e) => (
          <div key={e.school} className="grid gap-1 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <p className="tabular-nums text-muted">{e.period}</p>
            <p>
              <span className="font-medium">{e.school}</span>
              <br />
              {e.degree}
            </p>
          </div>
        ))}
      </ResumeSection>

      {certifications.length > 0 ? (
        <ResumeSection title="Certifications">
          <ul className="grid gap-1 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </ResumeSection>
      ) : null}

      <ResumeSection title="Awards">
        <ul className="space-y-1">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Languages">
        <p>{languages.join(", ")}</p>
      </ResumeSection>
    </Container>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-rule py-8 sm:grid-cols-[10rem_1fr] sm:gap-8 print:break-inside-avoid-page print:py-4">
      <h2 className="font-semibold">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
