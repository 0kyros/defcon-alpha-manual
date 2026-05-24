import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { MANUAL_STRUCTURE } from "@/lib/manual";
import { hreflangFor, SITE_URL } from "@/lib/site";

interface PathSpec {
  path: string;
  changefreq: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}

const STATIC_PATHS: ReadonlyArray<PathSpec> = [
  { path: "", changefreq: "monthly", priority: 1.0 },
  { path: "/manual", changefreq: "monthly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Build per-locale alternates for each canonical URL
  const buildLanguages = (
    pathSuffix: string,
  ): Record<string, string> => {
    const languages: Record<string, string> = {};
    for (const loc of routing.locales) {
      languages[hreflangFor(loc)] = `${SITE_URL}/${loc}${pathSuffix}`;
    }
    languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${pathSuffix}`;
    return languages;
  };

  // Static paths × locales
  for (const locale of routing.locales) {
    for (const spec of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${spec.path}`,
        lastModified: now,
        changeFrequency: spec.changefreq,
        priority: locale === routing.defaultLocale ? spec.priority : spec.priority * 0.9,
        alternates: { languages: buildLanguages(spec.path) },
      });
    }
  }

  // Chapter paths × locales
  for (const section of MANUAL_STRUCTURE) {
    for (const chapter of section.chapters) {
      const pathSuffix = `/manual/${section.id}/${chapter.slug}`;
      for (const locale of routing.locales as ReadonlyArray<Locale>) {
        entries.push({
          url: `${SITE_URL}/${locale}${pathSuffix}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority:
            locale === routing.defaultLocale
              ? chapter.hasContent
                ? 0.7
                : 0.4
              : chapter.hasContent
                ? 0.6
                : 0.3,
          alternates: { languages: buildLanguages(pathSuffix) },
        });
      }
    }
  }

  return entries;
}
