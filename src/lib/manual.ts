import type { Locale } from "@/i18n/routing";

export type SectionId =
  | "foundation"
  | "infantry"
  | "modern-warfare"
  | "operator-mindset"
  | "weapons"
  | "comms"
  | "linguistic";

export interface ChapterRef {
  slug: string;
  hasContent: boolean;
}

export interface Section {
  id: SectionId;
  number: string;
  chapters: ChapterRef[];
}

export const MANUAL_STRUCTURE: readonly Section[] = [
  {
    id: "foundation",
    number: "I",
    chapters: [
      { slug: "mindset", hasContent: true },
      { slug: "structure", hasContent: true },
      { slug: "ranks-nato", hasContent: true },
      { slug: "terminology", hasContent: true },
      { slug: "opsec", hasContent: true },
      { slug: "equipment", hasContent: true },
      { slug: "firearm-safety", hasContent: true },
      { slug: "tta-150-tir", hasContent: true },
      { slug: "phonetic-alphabet", hasContent: true },
      { slug: "brevity-codes", hasContent: true },
      { slug: "military-time", hasContent: true },
      { slug: "map-reading", hasContent: true },
      { slug: "mgrs", hasContent: true },
      { slug: "nato-symbols", hasContent: true },
    ],
  },
  {
    id: "infantry",
    number: "II",
    chapters: [
      { slug: "tactical-movement", hasContent: true },
      { slug: "camouflage", hasContent: true },
      { slug: "patrolling", hasContent: true },
      { slug: "urban-warfare", hasContent: true },
      { slug: "trench-warfare", hasContent: true },
      { slug: "cqb-fundamentals", hasContent: true },
      { slug: "observation-posts", hasContent: true },
      { slug: "recon-basics", hasContent: true },
      { slug: "anti-drone-awareness", hasContent: true },
      { slug: "night-combat", hasContent: true },
      { slug: "nato-vs-post-soviet", hasContent: true },
      { slug: "common-mistakes", hasContent: true },
    ],
  },
  {
    id: "modern-warfare",
    number: "III",
    chapters: [
      { slug: "fpv-drones", hasContent: true },
      { slug: "electronic-warfare", hasContent: true },
      { slug: "sigint", hasContent: true },
      { slug: "thermal-warfare", hasContent: true },
      { slug: "artillery-survival", hasContent: true },
      { slug: "anti-fpv-behavior", hasContent: true },
      { slug: "vehicle-camouflage", hasContent: true },
      { slug: "comms-discipline", hasContent: true },
      { slug: "battlefield-awareness", hasContent: true },
      { slug: "kill-chain", hasContent: true },
      { slug: "osint-battlefield", hasContent: true },
      { slug: "black-sea-ops", hasContent: true },
      { slug: "defcon-alpha", hasContent: true },
    ],
  },
  {
    id: "operator-mindset",
    number: "IV",
    chapters: [
      { slug: "decision-making", hasContent: true },
      { slug: "small-unit-leadership", hasContent: true },
      { slug: "mental-discipline", hasContent: true },
      { slug: "cold-blood", hasContent: true },
      { slug: "resilience", hasContent: true },
      { slug: "team-cohesion", hasContent: true },
      { slug: "adaptive-thinking", hasContent: true },
      { slug: "combat-psychology", hasContent: true },
      { slug: "professional-conduct", hasContent: true },
      { slug: "mission-planning", hasContent: true },
      { slug: "after-action-review", hasContent: true },
    ],
  },
  {
    id: "weapons",
    number: "V",
    chapters: [
      { slug: "ak-platform", hasContent: true },
      { slug: "ar-platform", hasContent: true },
      { slug: "pkm", hasContent: true },
      { slug: "svd", hasContent: true },
      { slug: "rpg-series", hasContent: true },
      { slug: "atgm", hasContent: true },
      { slug: "manpads", hasContent: true },
      { slug: "mortars", hasContent: true },
      { slug: "machine-guns", hasContent: true },
      { slug: "optics-thermals", hasContent: true },
      { slug: "nvg", hasContent: true },
      { slug: "radios", hasContent: true },
      { slug: "drones-overview", hasContent: true },
    ],
  },
  {
    id: "comms",
    number: "VI",
    chapters: [
      { slug: "radio-discipline", hasContent: true },
      { slug: "authentication", hasContent: true },
      { slug: "callsigns", hasContent: true },
      { slug: "contact-report", hasContent: true },
      { slug: "sitrep", hasContent: true },
      { slug: "salute", hasContent: true },
      { slug: "medevac-9line", hasContent: true },
      { slug: "prowords", hasContent: true },
    ],
  },
  {
    id: "linguistic",
    number: "VII",
    chapters: [
      { slug: "glossary-infantry", hasContent: true },
      { slug: "glossary-radio", hasContent: true },
      { slug: "glossary-drones", hasContent: true },
      { slug: "glossary-medical", hasContent: true },
      { slug: "glossary-intel", hasContent: true },
      { slug: "glossary-urban", hasContent: true },
      { slug: "glossary-artillery", hasContent: true },
    ],
  },
] as const;

export function getSection(id: SectionId): Section | undefined {
  return MANUAL_STRUCTURE.find((s) => s.id === id);
}

export function getAllChapters(): Array<{
  sectionId: SectionId;
  chapter: ChapterRef;
}> {
  return MANUAL_STRUCTURE.flatMap((s) =>
    s.chapters.map((chapter) => ({ sectionId: s.id, chapter })),
  );
}

export function findChapter(
  sectionId: string,
  chapterSlug: string,
): { section: Section; chapter: ChapterRef } | null {
  const section = MANUAL_STRUCTURE.find((s) => s.id === sectionId);
  if (!section) return null;
  const chapter = section.chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return null;
  return { section, chapter };
}

export const LOCALE_NAMES: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  "pt-br": "Português (BR)",
  fr: "Français",
};
