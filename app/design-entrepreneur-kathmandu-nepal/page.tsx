import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { skills } from "@/content/experience";
import { visibleProjects } from "@/content/projects";
import { ButtonLink, Container, ExternalLink } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { DragRow } from "@/components/drag-row";
import { LocalTime } from "@/components/local-time";
import { FaqSection, FaqJsonLd, type FaqItem } from "@/components/faq";

export const metadata: Metadata = {
  title: "Designer & Entrepreneur in Kathmandu, Nepal",
  description:
    "Aaradhana Ojha is an entrepreneur and aspiring design leader based in Kathmandu, Nepal: co-founder of Amplify Digital, Array Codes and Koili, and STEAM & Design teacher.",
  alternates: { canonical: "/design-entrepreneur-kathmandu-nepal" },
};

const faq: FaqItem[] = [
  {
    q: "Are you based in Kathmandu, Nepal?",
    a: "Yes, I live and work in Kathmandu, Nepal.",
  },
  {
    q: "What kind of work do you take on?",
    a: "Design and research, digital transformation for small businesses, and STEAM/Design education. Agency-style work runs through Amplify Digital or Array Codes, the agencies I co-founded; teaching, research and other collaborations come to me directly.",
  },
  {
    q: "Can I work with you remotely?",
    a: "Yes, I'm open to remote collaboration across timezones.",
  },
  {
    q: "What do you work with?",
    a: "Figma, UI/UX design and prototyping, plus Python, Scratch and React/JavaScript from my technical work. Day to day, I also work in SEO, paid media, funnels, CRM systems and marketing automation through Amplify Digital.",
  },
];

export default function DesignEntrepreneurKathmanduPage() {
  const featured = visibleProjects.filter((p) => p.featured);
  const resumeHref = site.resumePdf ?? "/resume";

  return (
    <Container>
      <FaqJsonLd items={faq} />
      <section className="grid gap-6 pb-14 pt-14 sm:pt-20">
        <p className="text-sm text-muted">Based in Kathmandu, Nepal</p>
        <h1 className="max-w-3xl text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.03em] sm:text-7xl">
          Designer and entrepreneur in Kathmandu, Nepal.
        </h1>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">
          I&apos;m Aaradhana Ojha, an entrepreneur and aspiring design leader based in Kathmandu. I build human-centered,
          technology-enabled solutions for small businesses and sustainable mobility, and co-founded{" "}
          <ExternalLink href={site.amplify} className="text-ink">
            Amplify Digital
          </ExternalLink>
          , a digital agency helping small and medium-sized Nepali businesses move online.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Get in touch</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            View my work
          </ButtonLink>
          <ButtonLink href={resumeHref} variant="secondary" download={Boolean(site.resumePdf)}>
            {site.resumePdf ? "Download my resume" : "View my resume"}
          </ButtonLink>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="border-t border-rule py-12 sm:py-16">
        <h2 id="capabilities-heading" className="text-xl font-semibold tracking-[-0.01em]">
          What I work with
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Grouped by how I&apos;ve used them, so you can tell production work from what I&apos;m learning.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="rounded-xl border border-rule p-6">
              <h3 className="font-medium">{g.group}</h3>
              <ul className="mt-3 space-y-1.5 text-muted">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="work-heading" className="border-t border-rule py-12 sm:py-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="work-heading" className="text-xl font-semibold tracking-[-0.01em]">
            Recent work
          </h2>
          <Link href="/projects" className="link">
            All projects
          </Link>
        </div>
        <DragRow>
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </DragRow>
      </section>

      <FaqSection items={faq} />

      <section aria-labelledby="contact-heading" className="border-t border-rule py-12 sm:py-16">
        <h2 id="contact-heading" className="text-xl font-semibold tracking-[-0.01em]">
          Based in Kathmandu, Nepal
        </h2>
        <p className="mt-3 text-muted">
          <LocalTime />
        </p>
        <p className="mt-4">
          <a href={`mailto:${site.email}`} className="link text-2xl tracking-[-0.01em] sm:text-3xl">
            {site.email}
          </a>
        </p>
        <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={site.amplify}>Amplify Digital</ExternalLink>
          <Link href="/contact" className="link">
            Other ways to get in touch
          </Link>
        </p>
      </section>
    </Container>
  );
}
