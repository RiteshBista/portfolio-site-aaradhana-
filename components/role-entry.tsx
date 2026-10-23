import type { Role } from "@/lib/types";
import { Blocks, ExternalLink } from "@/components/ui";

export function RoleEntry({ role, compact = false }: { role: Role; compact?: boolean }) {
  return (
    <article className={`grid gap-2 border-t border-rule ${compact ? "py-5" : "py-8"} sm:grid-cols-[11rem_1fr] sm:gap-8`}>
      <p className="text-[0.9375rem] tabular-nums text-muted">{role.period}</p>
      <div className="min-w-0">
        <h3 className={`${compact ? "text-lg" : "text-xl"} font-semibold leading-tight tracking-[-0.01em]`}>
          {role.title},{" "}
          {role.orgUrl ? <ExternalLink href={role.orgUrl}>{role.org}</ExternalLink> : role.org}
        </h3>
        {role.location ? <p className="mt-1 text-[0.9375rem] text-muted">{role.location}</p> : null}
        {role.summary ? <p className="mt-3 max-w-2xl">{role.summary}</p> : null}
        <Blocks blocks={role.points} className={`mt-3 max-w-2xl ${compact ? "text-[0.9375rem]" : ""}`} />
      </div>
    </article>
  );
}
