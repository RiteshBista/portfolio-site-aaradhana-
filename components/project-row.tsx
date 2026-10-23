import type { Project } from "@/lib/types";

const liveStatuses = new Set(["Live", "Live beta", "Ongoing"]);

export function StatusMark({ status }: { status: Project["status"] }) {
  const live = liveStatuses.has(status);
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm ${live ? "text-accent" : "text-muted"}`}>
      <span aria-hidden className={`size-1.5 rounded-full ${live ? "bg-accent" : "bg-muted/60"}`} />
      {status}
    </span>
  );
}
