import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { Container, ExternalLink, PageHeader, Section, TodoNote } from "@/components/ui";
import { CopyEmail } from "@/components/actions";
import { FaqSection, FaqJsonLd, type FaqItem } from "@/components/faq";

const faq: FaqItem[] = [
  {
    q: "Is email the best way to reach you?",
    a: "Yes. Email is the best way to reach me, and I'm based in Nepal (UTC+5:45) if you're working out the timezone overlap.",
  },
  {
    q: "What should I include when I reach out?",
    a: "For a project: what you'd like built, who it's for, and your timeline and budget. For a collaboration: what you have in mind and the team involved. Anything else, just say hello.",
  },
  {
    q: "Do you take on work through Amplify Digital, or directly?",
    a: "Agency-style work — websites, SEO, growth — goes through Amplify Digital or Array Codes, the agencies I co-founded in Nepal. Design, research, teaching and entrepreneurship collaborations come to me directly.",
  },
  {
    q: "Can we work together remotely?",
    a: "Yes, I'm open to remote collaboration across timezones.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Aaradhana Ojha about design and research work, digital transformation projects, or collaborations on education and entrepreneurship.",
  alternates: { canonical: "/contact" },
};

/** Each option opens the visitor's own email app with a subject and a short outline to fill in. */
const enquiries = [
  {
    title: "A project",
    detail: "A digital transformation, design or research project you'd like help with.",
    subject: "Project enquiry",
    body: "Hi Aaradhana,\n\nWhat I'd like to build:\n\nWho it's for:\n\nTimeline and budget:\n\n",
  },
  {
    title: "A collaboration",
    detail: "A partnership, speaking engagement, or education/entrepreneurship programme.",
    subject: "Collaboration",
    body: "Hi Aaradhana,\n\nWhat I have in mind:\n\nThe team or organisation:\n\n",
  },
  {
    title: "Something else",
    detail: "A question about my work, or just to say hello.",
    subject: "Hello",
    body: "Hi Aaradhana,\n\n",
  },
];

function mailto(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactPage() {
  return (
    <Container>
      <FaqJsonLd items={faq} />
      <PageHeader
        title="Contact"
        intro="Email is the best way to reach me. I'm based in Nepal (UTC+5:45)."
      />

      <section className="pb-12">
        <a href={`mailto:${site.email}`} className="link break-all text-3xl font-medium tracking-[-0.02em] sm:text-5xl">
          {site.email}
        </a>
        <div className="mt-6">
          <CopyEmail email={site.email} />
        </div>
      </section>

      <Section title="What it's about" aside="Each option opens your email app with a short outline to fill in.">
        <ul className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-3">
          {enquiries.map((e) => (
            <li key={e.subject} className="bg-paper">
              <a href={mailto(e.subject, e.body)} className="group flex h-full flex-col gap-2 p-5 transition-colors hover:bg-raised">
                <span className="inline-flex items-center gap-2 text-lg font-semibold group-hover:text-accent">
                  <Mail className="size-4" aria-hidden />
                  {e.title}
                </span>
                <span className="text-[0.9375rem] text-muted">{e.detail}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <FaqSection items={faq} />

      <Section title="Elsewhere">
        <ul className="space-y-3 text-lg">
          <li>
            <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            {site.github ? <ExternalLink href={site.github}>GitHub</ExternalLink> : <TodoNote todo="your GitHub profile URL in content/site.ts" inline />}
          </li>
          <li>
            <ExternalLink href={site.amplify}>Amplify Digital</ExternalLink>
            <span className="text-muted">, for agency work in Nepal</span>
          </li>
        </ul>
      </Section>
    </Container>
  );
}
