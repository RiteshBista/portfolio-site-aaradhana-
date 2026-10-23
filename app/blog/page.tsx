import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader, TodoNote } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing from Aaradhana Ojha on design, entrepreneurship and building for small businesses in Nepal.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <Container>
      <PageHeader
        title="Blog"
        intro="Notes on design, entrepreneurship, and what I'm learning building Amplify Digital, Array Codes and Koili."
      />

      <div className="max-w-2xl pb-16">
        <TodoNote todo="No posts yet. Write the first one about something you shipped, a decision you made, or what you learned building Koili, Amplify Digital or Ray Rentals." />
        <p className="mt-6 text-muted">
          In the meantime, see{" "}
          <Link href="/projects" className="link">
            what I&apos;ve built
          </Link>{" "}
          or{" "}
          <Link href="/about" className="link">
            more about me
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
