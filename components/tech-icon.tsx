import {
  siFlutter,
  siDart,
  siFirebase,
  siGraphql,
  siReact,
  siNextdotjs,
  siTypescript,
  siFigma,
  siPython,
  siScratch,
  siHtml5,
  siCss,
  siJavascript,
  siRedux,
} from "simple-icons";

/**
 * Real brand icons for the skills that have one. Concepts and patterns
 * (BLoC, MVVM, REST APIs, Design thinking, ...) have no official logo, so
 * they're left out rather than given an invented one — the pill still
 * renders with its label alone.
 */
const icons: Record<string, { path: string; hex: string }> = {
  Flutter: siFlutter,
  Dart: siDart,
  Firebase: siFirebase,
  GraphQL: siGraphql,
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  Figma: siFigma,
  Python: siPython,
  Scratch: siScratch,
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  "Redux Toolkit": siRedux,
};

export function TechIcon({ name }: { name: string }) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 shrink-0" fill={`#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}
