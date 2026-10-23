import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { visibleProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const pages = [
    "",
    "/projects",
    "/experience",
    "/about",
    "/resume",
    "/contact",
    "/blog",
    "/certifications",
    "/design-entrepreneur-kathmandu-nepal",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const projects = visibleProjects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...projects];
}
