import type { MetadataRoute } from "next";

const SITE_URL = "https://babalifecare.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/doctors",
    "/services",
    "/book-appointment",
    "/gallery",
    "/testimonials",
    "/contact",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/book-appointment" ? 0.9 : 0.7,
  }));
}
