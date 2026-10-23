import { ArrowUp } from "lucide-react";
import { nav, site } from "@/content/site";
import { Container, ExternalLink } from "@/components/ui";
import { LocalTime } from "@/components/local-time";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print mt-24 border-t border-rule">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto_auto] sm:gap-16">
          <div>
            <p className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">{site.name}</p>
            <p className="mt-3 text-muted">
              <LocalTime />
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Index</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#main" className="link">
                  Home
                </a>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <a className="link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="link" href="/certifications">
                  Certifications
                </a>
              </li>
              <li>
                <a className="link" href="/design-entrepreneur-kathmandu-nepal">
                  Designer &amp; entrepreneur in Nepal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-muted">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="link" href={`mailto:${site.email}`}>
                  Email
                </a>
              </li>
              <li>
                <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
              </li>
              {site.github ? (
                <li>
                  <ExternalLink href={site.github}>GitHub</ExternalLink>
                </li>
              ) : null}
              <li>
                <ExternalLink href={site.amplify}>Amplify Digital</ExternalLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-rule pt-6 text-[0.9375rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">
            © {year} {site.name}. Based in {site.location}.
          </p>
          <a
            href="#main"
            className="inline-flex items-center gap-1.5 rounded-full border border-rule px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <ArrowUp className="size-3.5" aria-hidden />
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
