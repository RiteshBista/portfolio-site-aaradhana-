import Image from "next/image";
import type { Project } from "@/lib/types";

/**
 * Fills its parent with a project's real cover image, or a plain
 * category/title placeholder when there isn't one. Never invents an image.
 */
export function CoverImage({ project, sizes }: { project: Project; sizes?: string }) {
  if (project.coverImage) {
    return (
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
        className="object-cover"
      />
    );
  }
  return (
    <div className="flex size-full flex-col justify-between bg-ink p-5 text-paper">
      <span className="text-sm text-paper/70">{project.category}</span>
      <span className="text-xl font-semibold leading-tight tracking-[-0.015em]">{project.title}</span>
    </div>
  );
}
