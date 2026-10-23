import { site, siteUrl } from "@/content/site";

/** Person structured data. Only facts that appear on the site itself. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: siteUrl(),
    image: `${siteUrl()}${site.portrait}`,
    jobTitle: "Entrepreneur and design leader",
    worksFor: { "@type": "Organization", name: "Amplify Digital Pvt. Ltd.", url: site.amplify },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Advanced College of Engineering and Management" },
    address: { "@type": "PostalAddress", addressCountry: "NP" },
    sameAs: [site.linkedin, site.github].filter(Boolean),
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output contains no user input; escape "<" defensively.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
