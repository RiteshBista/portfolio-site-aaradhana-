import type { Metadata } from "next";
import { roles } from "@/content/experience";
import { Container, PageHeader } from "@/components/ui";
import { RoleEntry } from "@/components/role-entry";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Aaradhana Ojha's experience: co-founder of Amplify Digital, Array Codes and Koili, STEAM Head & Design Teacher at Himalayan Whitehouse, and research assistant at ACEM.",
  alternates: { canonical: "/experience" },
};

const groups = [
  {
    id: "business",
    title: "Business",
    note: "Running companies: clients, strategy and the team.",
    kinds: ["business"],
  },
  {
    id: "education",
    title: "Teaching & mentorship",
    note: "STEAM, Design and entrepreneurship education.",
    kinds: ["education"],
  },
  {
    id: "research",
    title: "Research",
    note: "Academic research work.",
    kinds: ["research"],
  },
  {
    id: "engineering",
    title: "Engineering",
    note: "Hands-on software work.",
    kinds: ["engineering"],
  },
] as const;

export default function ExperiencePage() {
  return (
    <Container>
      <PageHeader
        title="Experience"
        intro="Business and engineering work are listed separately, so it's clear which experience is hands-on software and which is running a company."
      />
      {groups.map((g) => {
        const items = roles.filter((r) => (g.kinds as readonly string[]).includes(r.kind));
        if (items.length === 0) return null;
        return (
          <section key={g.id} id={g.id} className="scroll-mt-24 pb-14" aria-labelledby={`${g.id}-heading`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink pb-3">
              <h2 id={`${g.id}-heading`} className="text-2xl font-semibold tracking-[-0.015em]">
                {g.title}
              </h2>
              <p className="text-[0.9375rem] text-muted">{g.note}</p>
            </div>
            <div className="[&>article:first-child]:border-t-0">
              {items.map((r) => (
                <RoleEntry key={`${r.org}-${r.title}`} role={r} />
              ))}
            </div>
          </section>
        );
      })}
    </Container>
  );
}
