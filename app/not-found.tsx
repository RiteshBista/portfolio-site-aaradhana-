import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container>
      <section className="py-24 sm:py-32">
        <p className="text-muted">404</p>
        <h1 className="mt-2 text-[2.5rem] font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">This page doesn&apos;t exist.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">The link may be out of date, or the page may have moved. Try one of these instead.</p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-lg">
          <li>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="link">
              Work
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}
