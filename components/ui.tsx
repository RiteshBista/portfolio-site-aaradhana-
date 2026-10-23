import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Block, Todo } from "@/lib/types";
import { isTodo } from "@/lib/types";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** Marks content that still needs real information. Visible on purpose. */
export function TodoNote({ todo, inline = false }: { todo: string; inline?: boolean }) {
  if (inline) {
    return (
      <span className="rounded-sm bg-todo-bg px-1.5 py-0.5 font-sans text-[0.8125rem] text-todo" title="Placeholder: replace before publishing">
        To add: {todo}
      </span>
    );
  }
  return (
    <div className="rounded-md border border-dashed border-todo/50 bg-todo-bg px-4 py-3 font-sans text-[0.9375rem] leading-snug text-todo" role="note">
      <span className="font-semibold">To add.</span> {todo}
    </div>
  );
}

export function TextOrTodo({ value }: { value: string | Todo }) {
  return isTodo(value) ? <TodoNote todo={value.todo} inline /> : <>{value}</>;
}

/** Renders a list of content blocks: paragraphs, bullet lists and todos. */
export function Blocks({ blocks, className = "" }: { blocks: Block[]; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((b, i) => {
        if (typeof b === "string") return <p key={i}>{b}</p>;
        if (isTodo(b)) return <TodoNote key={i} todo={b.todo} />;
        return (
          <ul key={i} className="list-disc space-y-2 pl-5 marker:text-muted">
            {b.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`link inline-flex items-baseline gap-0.5 ${className}`}>
      {children}
      <ArrowUpRight aria-hidden className="size-[0.85em] translate-y-[0.1em] self-start" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", download }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.9375rem] font-medium transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent hover:text-on-accent"
      : "border border-rule text-ink hover:border-ink";
  const content = (
    <>
      {children}
      {variant === "primary" ? (
        <ArrowRight aria-hidden className="size-[0.9em] transition-transform duration-150 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  if (isExternal || download) {
    return (
      <a href={href} className={`${base} ${styles}`} download={download || undefined}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {content}
    </Link>
  );
}

export function PageHeader({ title, intro }: { title: string; intro?: ReactNode }) {
  return (
    <header className="pb-12 pt-14 sm:pt-20">
      <h1 className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-6xl">{title}</h1>
      {intro ? <div className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">{intro}</div> : null}
    </header>
  );
}

/** Two-column section: a short heading on the left, content on the right. */
export function Section({ title, id, children, aside }: { title: string; id?: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section id={id} className="grid gap-6 border-t border-rule py-12 sm:py-16 lg:grid-cols-[14rem_1fr] lg:gap-12">
      <div>
        <h2 className="text-xl font-semibold tracking-[-0.01em]">{title}</h2>
        {aside ? <div className="mt-2 text-[0.9375rem] text-muted">{aside}</div> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
