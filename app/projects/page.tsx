import type { Metadata } from "next";
import { categories, visibleProjects } from "@/content/projects";
import { Container } from "@/components/ui";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects by Aaradhana Ojha: Koili, an AI receptionist in live beta; Ray Rentals, Nepal's first mini electric scooter; and digital growth work at Amplify Digital and Array Codes.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Container>
      <div className="grid gap-8 pb-10 pt-14 sm:pt-20 lg:grid-cols-[1fr_18rem] lg:items-end lg:gap-12">
        <div>
          <p className="text-sm text-muted">Projects &mdash; Aaradhana Ojha&apos;s portfolio</p>
          <h1 className="mt-3 text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl">
            Selected work.
          </h1>
        </div>
        <p className="text-muted lg:text-right">
          {visibleProjects.length} projects across {categories.join(", ")}. Filter by type below.
        </p>
      </div>

      <ProjectsExplorer projects={visibleProjects} />
    </Container>
  );
}
