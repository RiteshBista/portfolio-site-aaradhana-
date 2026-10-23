import Image from "next/image";
import { skills, awards } from "@/content/experience";
import { gallery } from "@/content/gallery";
import { visibleProjects } from "@/content/projects";
import { DragRow } from "@/components/drag-row";
import { TechIcon } from "@/components/tech-icon";

/** Alternate two lists so the row reads as a mix, not two blocks back to back. */
function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) out.push(a[i]);
    if (b[i]) out.push(b[i]);
  }
  return out;
}

export function StackSection() {
  const tools = Array.from(new Set(skills.flatMap((g) => g.items)));
  const toolCount = tools.length;

  const projectShots = visibleProjects
    .filter((p) => p.coverImage)
    .map((p) => ({ src: p.coverImage!.src, alt: p.coverImage!.alt, caption: p.title }));
  const workItems = interleave(projectShots, gallery);

  return (
    <section aria-labelledby="stack-heading" className="rise border-t border-rule py-12 sm:py-16" style={{ "--i": 6 } as React.CSSProperties}>
      <div className="flex flex-col gap-3 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <h2 id="stack-heading" className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-4xl">
          The stack behind
          <br className="hidden sm:block" /> the shipped work.
        </h2>
        <p className="max-w-xs text-sm text-muted">
          {toolCount} tools across {visibleProjects.length}+ projects and {awards.length} awards & recognitions. Drag
          either row to explore.
        </p>
      </div>

      <DragRow className="border-t border-rule pt-5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="inline-flex shrink-0 snap-start items-center gap-2 rounded-full border border-rule px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
          >
            <TechIcon name={tool} />
            {tool}
          </span>
        ))}
      </DragRow>

      <DragRow className="mt-5">
        {workItems.map((item) => (
          <figure key={item.src} className="w-[14rem] shrink-0 snap-start sm:w-[16rem]">
            <div className="aspect-[4/3] overflow-hidden rounded-md border border-rule bg-raised">
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={480}
                draggable={false}
                className="size-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-muted">{item.caption}</figcaption>
          </figure>
        ))}
      </DragRow>
    </section>
  );
}
