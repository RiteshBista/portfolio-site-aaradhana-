import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

/** A ruled accordion of real questions and answers. Uses native <details> — no client JS needed. */
export function FaqSection({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <section aria-labelledby="faq-heading" className="border-t border-rule py-12 sm:py-16">
      <h2 id="faq-heading" className="text-xl font-semibold tracking-[-0.01em]">
        {title}
      </h2>
      <div className="mt-6 max-w-2xl divide-y divide-rule border-t border-rule">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <p className="mt-3 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** FAQPage structured data for the same items, for search and AI-answer visibility. */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output contains no user input; escape "<" defensively.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
