import type { WorkflowStep } from "@/lib/types";

/** A sequential flow. Numbered because the content really is a sequence. */
export function Workflow({ steps, caption }: { steps: WorkflowStep[]; caption: string }) {
  return (
    <figure className="font-sans">
      <ol className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="relative bg-raised p-4">
            <span className="text-sm tabular-nums text-accent">{i + 1}</span>
            <p className="mt-1 font-medium leading-tight">{s.title}</p>
            <p className="mt-1.5 text-sm leading-snug text-muted">{s.detail}</p>
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
