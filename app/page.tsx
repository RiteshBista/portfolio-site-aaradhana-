import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { visibleProjects } from "@/content/projects";
import { roles, skills } from "@/content/experience";
import { ButtonLink, Container, ExternalLink, Section } from "@/components/ui";
import { ProjectCarousel } from "@/components/project-carousel";
import { StackSection } from "@/components/stack-section";
import { LocalTime } from "@/components/local-time";
import { PersonJsonLd } from "@/components/json-ld";
import { FaqSection, FaqJsonLd, type FaqItem } from "@/components/faq";

const faq: FaqItem[] = [
  {
    q: "What do you do?",
    a: "I'm an entrepreneur and design leader building human-centered, technology-enabled solutions for small businesses and sustainable mobility in Nepal — co-founder of Amplify Digital, Array Codes and Koili.",
  },
  {
    q: "Are you available for freelance, contract or collaboration work?",
    a: "Yes — I'm open to design, research and digital transformation work, as well as collaborations on education and entrepreneurship programmes.",
  },
  {
    q: "What is Amplify Digital?",
    a: "Amplify Digital is a 360° digital marketing and IT agency I co-founded in Nepal in 2022. It helps small and medium-sized businesses grow through SEO, paid media, funnels, CRM systems and automation.",
  },
  {
    q: "What is Koili?",
    a: "Koili is an AI receptionist for small businesses, available 24/7 to answer calls, book appointments and qualify leads. It's in live beta today.",
  },
  {
    q: "Do you also teach?",
    a: "Yes. I lead STEAM and Design learning at Himalayan Whitehouse IB World School, mentoring students through robotics, prototyping and human-centered innovation.",
  },
];

export default function HomePage() {
  const featured = visibleProjects.filter((p) => p.featured);
  const amplify = roles.find((r) => r.org === "Amplify Digital Pvt. Ltd.");
  const resumeHref = site.resumePdf ?? "/resume";

  // The "Now" ledger: the hero's single bold element. Plain facts only.
  const ledger: { label: string; content: React.ReactNode }[] = [
    {
      label: "Building",
      content: (
        <>
          <Link href="/projects/koili" className="link">
            Koili
          </Link>
          , an AI receptionist for small businesses. In live beta.
        </>
      ),
    },
    {
      label: "Running",
      content: (
        <>
          <ExternalLink href={site.amplify}>Amplify Digital</ExternalLink> and{" "}
          <Link href="/projects/array-codes" className="link">
            Array Codes
          </Link>
          , digital agencies I co-founded in Nepal.
        </>
      ),
    },
    { label: "Teaching", content: "STEAM Head & Design Teacher at Himalayan Whitehouse IB World School." },
    { label: "Studied", content: "Electronics, Communication and Information Engineering, Advanced College of Engineering and Management." },
  ];

  return (
    <>
      <PersonJsonLd />
      <FaqJsonLd items={faq} />
      <Container>
        {/* Hero */}
        <section className="grid gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:pb-24">
          <div className="min-w-0">
            <h1 className="rise text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[5.5rem]" style={{ "--i": 0 } as React.CSSProperties}>
              Aaradhana Ojha
            </h1>
            <p className="rise mt-6 max-w-2xl text-2xl leading-snug tracking-[-0.01em] sm:text-[1.75rem]" style={{ "--i": 1 } as React.CSSProperties}>
              I build human-centered, technology-enabled solutions for small businesses and sustainable mobility.
            </p>
            <p className="rise mt-5 max-w-xl text-muted" style={{ "--i": 2 } as React.CSSProperties}>
              I&apos;m an entrepreneur and aspiring design leader based in Nepal, co-founder of Amplify Digital, Array Codes
              and Koili. Working with small businesses has taught me to start with the problem, understand who it&apos;s for,
              ship something practical and improve it from feedback.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
              <ButtonLink href="/projects">Explore my work</ButtonLink>
              <ButtonLink href={resumeHref} variant="secondary" download={Boolean(site.resumePdf)}>
                {site.resumePdf ? "Download my resume" : "View my resume"}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact me
              </ButtonLink>
            </div>
          </div>

          <figure className="rise order-first max-w-[16rem] lg:order-none lg:max-w-none" style={{ "--i": 1 } as React.CSSProperties}>
            <Image
              src={site.portrait}
              alt="Portrait of Aaradhana Ojha"
              width={1050}
              height={1400}
              priority
              sizes="(min-width: 1024px) 20rem, 16rem"
              className="aspect-[4/5] w-full rounded-md object-cover object-[40%_22%]"
            />
          </figure>
        </section>

        {/* Hero status bar */}
        <div
          className="rise -mt-10 mb-10 flex items-center justify-between border-t border-rule pt-4 text-sm text-muted"
          style={{ "--i": 4 } as React.CSSProperties}
        >
          <LocalTime />
          <span className="[writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">Scroll for more</span>
        </div>

        {/* Now ledger */}
        <section aria-labelledby="now-heading" className="rise border-t border-ink pb-6" style={{ "--i": 5 } as React.CSSProperties}>
          <h2 id="now-heading" className="sr-only">
            Right now
          </h2>
          <dl className="[&>div:last-child]:border-b-0">
            {ledger.map((row) => (
              <div key={row.label} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-5">
                <dt className="text-muted">{row.label}</dt>
                <dd className="text-lg leading-snug sm:text-xl">{row.content}</dd>
              </div>
            ))}
          </dl>
        </section>

        <StackSection />

        {/* Selected work */}
        <section aria-labelledby="work-heading" className="border-t border-rule py-12 sm:py-16">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="work-heading" className="text-xl font-semibold tracking-[-0.01em]">
              Selected work
            </h2>
            <Link href="/projects" className="link">
              All projects
            </Link>
          </div>
          <ProjectCarousel projects={featured} />
        </section>

        {/* Skills */}
        <Section title="Skills" aside="Grouped by how I've used them, so you can tell production work from what I'm learning.">
          <dl className="grid gap-8 sm:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group}>
                <dt className="font-medium">{g.group}</dt>
                <dd className="mt-2 text-muted">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 sm:block sm:space-y-1">
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Amplify */}
        {amplify ? (
          <Section title="Amplify Digital" aside={`${amplify.title}, ${amplify.period}`}>
            <p className="max-w-2xl text-lg">{amplify.summary}</p>
            <p className="mt-4 max-w-2xl text-muted">
              Running a client business alongside design and research work shapes how I build: scope comes from what the
              business actually needs, and a solution only counts once someone uses it.
            </p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/experience" className="link">
                Full experience
              </Link>
              <ExternalLink href={site.amplify}>amplify.com.np</ExternalLink>
            </p>
          </Section>
        ) : null}

        {/* About */}
        <Section title="About">
          <p className="max-w-2xl text-lg">
            I trained as an engineer at the Advanced College of Engineering and Management and learned most of what I know
            about building for people in practice: developing a mini electric scooter, running digital agencies for small
            businesses, and teaching STEAM and Design. I&apos;m pursuing further study in Design, to go deeper on
            human-centered research, prototyping and systems thinking.
          </p>
          <p className="mt-6">
            <Link href="/about" className="link">
              More about me
            </Link>
          </p>
        </Section>

        <FaqSection items={faq} />

        {/* Contact */}
        <Section title="Contact">
          <p className="max-w-2xl text-lg">
            Open to design, research and digital transformation work, and collaborations on education and entrepreneurship
            programmes.
          </p>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="link text-2xl tracking-[-0.01em] sm:text-3xl">
              {site.email}
            </a>
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
            {site.github ? <ExternalLink href={site.github}>GitHub</ExternalLink> : null}
            <Link href="/contact" className="link">
              Other ways to get in touch
            </Link>
          </p>
        </Section>
      </Container>
    </>
  );
}
