"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { DragRow } from "@/components/drag-row";
import { ProjectCard } from "@/components/project-card";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function readReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * A pinned, scroll-driven circle of featured projects: scrolling through the
 * section's extra height rotates a ring of numbered markers and swaps the
 * project shown in the centre stage. Falls back to the plain drag gallery
 * when the visitor prefers reduced motion, since pinning the scroll is
 * exactly the kind of motion that preference exists to turn off.
 */
export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, readReducedMotion, () => true);

  useEffect(() => {
    if (reducedMotion) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? -rect.top / total : 0;
        setProgress(Math.min(1, Math.max(0, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  if (projects.length === 0) return null;

  if (reducedMotion) {
    return (
      <DragRow>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </DragRow>
    );
  }

  const count = projects.length;
  const activeIndex = Math.min(count - 1, Math.floor(progress * count));
  const active = projects[activeIndex];
  const ringRotation = progress * 360;

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${100 + count * 55}vh` }}
      className="relative left-1/2 right-1/2 w-screen -mx-[50vw]"
    >
      <div className="sticky top-24 flex h-[calc(100vh-7rem)] max-h-[40rem] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10">
        {active.coverImage ? (
          <div key={active.slug} className="absolute inset-0 z-0">
            <Image
              src={active.coverImage.src}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="scale-105 object-cover opacity-45 blur-none"
            />
            <div className="absolute inset-0 bg-paper/35" />
          </div>
        ) : null}

        <span className="pointer-events-none absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 text-sm text-muted lg:block">
          Selected work
        </span>

        <div className="relative z-10 size-[18rem] shrink-0 sm:size-[22rem]">
          <div className="absolute inset-0 rounded-full border border-rule" style={{ transform: `rotate(${ringRotation}deg)` }}>
            {projects.map((p, i) => {
              const angle = (360 / count) * i - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + 50 * Math.cos(rad);
              const y = 50 + 50 * Math.sin(rad);
              const isActive = i === activeIndex;
              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  aria-current={isActive ? "true" : undefined}
                  style={{ left: `${x}%`, top: `${y}%`, transform: `translate(-50%, -50%) rotate(${-ringRotation}deg)` }}
                  className={`absolute flex size-9 items-center justify-center rounded-full border text-sm transition-colors ${
                    isActive ? "border-ink bg-ink text-paper" : "border-rule bg-paper text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {i + 1}
                </Link>
              );
            })}
          </div>

          <Link
            href={`/projects/${active.slug}`}
            className="absolute inset-[13%] overflow-hidden rounded-full border border-rule bg-raised shadow-lg"
          >
            {active.coverImage ? (
              <Image
                key={active.slug}
                src={active.coverImage.src}
                alt={active.coverImage.alt}
                fill
                sizes="(min-width: 640px) 22rem, 18rem"
                className="object-cover"
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-1 bg-ink p-6 text-center text-paper">
                <span className="text-xs text-paper/70">{active.category}</span>
                <span className="line-clamp-3 text-base font-semibold leading-tight">{active.title}</span>
              </div>
            )}
          </Link>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden max-w-[14rem] -translate-y-1/2 text-right lg:block">
          <p className="text-2xl font-semibold leading-tight tracking-[-0.02em] xl:text-3xl">{active.title}</p>
          <p className="mt-1 text-sm text-muted">{active.category}</p>
        </div>

        <div className="absolute -bottom-2 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 lg:hidden">
          <p className="text-lg font-semibold tracking-[-0.015em]">{active.title}</p>
          <p className="text-sm text-muted">{active.category}</p>
        </div>
      </div>
    </div>
  );
}
