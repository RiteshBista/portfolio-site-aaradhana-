"use client";

import { useState } from "react";
import { Check, Copy, Printer } from "lucide-react";

/** Copies the email address, with a visible confirmation or a clear fallback if copying is blocked. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2500);
  }

  return (
    <span className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 text-[0.9375rem] transition-colors hover:border-ink"
      >
        {state === "copied" ? <Check className="size-4 text-accent" aria-hidden /> : <Copy className="size-4" aria-hidden />}
        {state === "copied" ? "Copied" : "Copy address"}
      </button>
      <span aria-live="polite" className="text-sm text-muted">
        {state === "failed" ? "Couldn't copy. Select the address above instead." : ""}
      </span>
    </span>
  );
}

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-accent hover:text-on-accent"
    >
      <Printer className="size-4" aria-hidden />
      Save as PDF
    </button>
  );
}
