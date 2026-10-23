/**
 * Site-wide facts. Edit this file first.
 * Everything here appears on the public site.
 */

export const site = {
  name: "Aaradhana Ojha",
  /** Short line used in titles, metadata and the Open Graph image. */
  tagline: "Entrepreneur and design leader building for SMEs and sustainable mobility",
  description:
    "Aaradhana Ojha is an entrepreneur and aspiring design leader based in Nepal. Co-founder of Amplify Digital, Array Codes and Koili, and former co-founder of Ray Rentals, building human-centered, technology-enabled solutions for small businesses and sustainable mobility.",
  location: "Kathmandu, Nepal",
  email: "aaradhanaojha123@gmail.com",
  linkedin: "https://www.linkedin.com/in/aaradhanaojha",
  /** Add a GitHub profile URL here. Links to GitHub stay hidden until you do. */
  github: null as string | null,
  amplify: "https://amplify.com.np",
  portrait: "/images/aaradhana-portrait.jpg",
  /**
   * Put a CV at /public/resume/Aaradhana-Ojha-Resume.pdf and set this to
   * "/resume/Aaradhana-Ojha-Resume.pdf". Until then, the resume page offers
   * "Save as PDF" from the browser instead of a download.
   */
  resumePdf: null as string | null,
};

export function siteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return url.replace(/\/$/, "");
}

export const nav = [
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];
