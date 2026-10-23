import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { awards } from "@/content/experience";
import { gallery } from "@/content/gallery";
import { media } from "@/content/media";
import { Container, ExternalLink, PageHeader, Section, TodoNote } from "@/components/ui";
import { MediaSection } from "@/components/media-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aaradhana Ojha: entrepreneur and aspiring design leader, co-founder of Amplify Digital, Array Codes and Koili, and STEAM & Design teacher in Nepal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container>
      <PageHeader title="About" />

      <div className="grid gap-12 pb-8 lg:grid-cols-[1fr_18rem] lg:gap-16">
        <div className="prose-serif max-w-[40rem] space-y-5">
          <p>
            I&apos;m Aaradhana Ojha, an entrepreneur and aspiring design leader based in Nepal. I studied Electronics,
            Communication and Information Engineering at the Advanced College of Engineering and Management, but most of
            what I know about building for people I learned by building for them directly.
          </p>
          <p>
            That started with Ray Rentals, where a co-founder and I developed Nepal&apos;s first mini electric scooter —
            hardware and software both — for first- and last-mile mobility. The venture was pitched at IdeaStudio, College
            Idea Hunt and National Idea Hunt, and earned a Golden Ticket at Nabil SSE.
          </p>
          <p>
            In 2022 I co-founded Amplify Digital, a 360° digital marketing and IT agency that now serves 100+ small and
            medium-sized businesses in Nepal with SEO, paid media, funnels, CRM systems and automation. Alongside it, Array
            Codes delivers websites, apps and social media management to SMEs, and Koili, our newest venture, is an AI
            receptionist available 24/7 for small businesses.
          </p>
          <p>
            Teaching runs alongside the entrepreneurship. As a Python instructor at Smart Cheli and now as STEAM Head &amp;
            Design Teacher at Himalayan Whitehouse IB World School, I&apos;ve seen students become more confident when
            they&apos;re allowed to ask questions, build prototypes, and learn from failure — and that&apos;s shaped how I
            think about design itself: it should start with the people it&apos;s for, not be brought in from outside.
          </p>
        </div>

        <figure className="max-w-[18rem]">
          <Image
            src={site.portrait}
            alt="Portrait of Aaradhana Ojha"
            width={1050}
            height={1400}
            sizes="18rem"
            className="aspect-[4/5] w-full rounded-md object-cover object-[40%_22%]"
          />
        </figure>
      </div>

      <Section title="How I work">
        <ul className="max-w-2xl space-y-4 text-lg">
          <li>Start with the problem, not the technology.</li>
          <li>Understand who will use it before deciding what to build.</li>
          <li>Ship something practical, then improve it from real feedback.</li>
        </ul>
      </Section>

      <Section title="What's next">
        <div className="max-w-2xl space-y-4 text-lg">
          <p>
            I&apos;m pursuing graduate study in Design, to deepen my ability in human-centered research, prototyping and
            multidisciplinary collaboration, and to build a design-led innovation practice that helps Nepali communities,
            young innovators and SMEs create solutions that last.
          </p>
          <TodoNote todo="The specific programme and intake, once you're ready to share it publicly." />
        </div>
      </Section>

      <Section title="Recognition">
        <ul className="max-w-2xl space-y-2 text-lg">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>

      {media.length > 0 ? (
        <Section title="Press & Media">
          <MediaSection items={media} />
        </Section>
      ) : null}

      {gallery.length > 0 ? (
        <Section title="Gallery">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.src}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={800}
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="aspect-square w-full rounded-md object-cover"
                />
                <figcaption className="mt-1.5 text-sm text-muted">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      <Section title="Elsewhere">
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
          <Link href="/experience" className="link">
            Experience
          </Link>
          <Link href="/projects" className="link">
            Work
          </Link>
          <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={site.amplify}>Amplify Digital</ExternalLink>
        </p>
      </Section>
    </Container>
  );
}
