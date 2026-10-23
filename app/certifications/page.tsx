import type { Metadata } from "next";
import Link from "next/link";
import { certifications } from "@/content/experience";
import { Container, PageHeader, TodoNote } from "@/components/ui";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Courses and certifications completed by Aaradhana Ojha.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <Container>
      <PageHeader title="Certifications" intro="Courses and certifications I've completed." />

      {certifications.length > 0 ? (
        <ul className="max-w-2xl divide-y divide-rule border-y border-rule">
          {certifications.map((c) => (
            <li key={c} className="py-4 text-lg">
              {c}
            </li>
          ))}
        </ul>
      ) : (
        <TodoNote todo="No certifications listed yet. Add any courses or certifications you've completed, with the year and issuing organisation." />
      )}

      <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-lg">
        <Link href="/resume" className="link">
          Full resume
        </Link>
        <Link href="/about" className="link">
          About
        </Link>
        <Link href="/experience" className="link">
          Experience
        </Link>
      </p>
    </Container>
  );
}
