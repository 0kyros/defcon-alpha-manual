import { cache } from "react";
import type { Locale } from "@/i18n/routing";
import type { SectionId } from "./manual";

export interface ChapterContent {
  readonly intro: string;
  readonly body: React.ReactNode;
}

type Loader = () => Promise<{ default: (locale: Locale) => ChapterContent }>;

const REGISTRY: Partial<Record<`${SectionId}/${string}`, Loader>> = {
  // Foundation
  "foundation/mindset": () => import("@/content/foundation/mindset"),
  "foundation/structure": () => import("@/content/foundation/structure"),
  "foundation/ranks-nato": () => import("@/content/foundation/ranks-nato"),
  "foundation/terminology": () => import("@/content/foundation/terminology"),
  "foundation/opsec": () => import("@/content/foundation/opsec"),
  "foundation/equipment": () => import("@/content/foundation/equipment"),
  "foundation/firearm-safety": () =>
    import("@/content/foundation/firearm-safety"),
  "foundation/tta-150-tir": () => import("@/content/foundation/tta-150-tir"),
  "foundation/phonetic-alphabet": () =>
    import("@/content/foundation/phonetic-alphabet"),
  "foundation/brevity-codes": () =>
    import("@/content/foundation/brevity-codes"),
  "foundation/military-time": () =>
    import("@/content/foundation/military-time"),
  "foundation/map-reading": () => import("@/content/foundation/map-reading"),
  "foundation/mgrs": () => import("@/content/foundation/mgrs"),
  "foundation/nato-symbols": () => import("@/content/foundation/nato-symbols"),

  // Infantry
  "infantry/tactical-movement": () =>
    import("@/content/infantry/tactical-movement"),
  "infantry/camouflage": () => import("@/content/infantry/camouflage"),
  "infantry/patrolling": () => import("@/content/infantry/patrolling"),
  "infantry/urban-warfare": () => import("@/content/infantry/urban-warfare"),
  "infantry/trench-warfare": () => import("@/content/infantry/trench-warfare"),
  "infantry/cqb-fundamentals": () =>
    import("@/content/infantry/cqb-fundamentals"),
  "infantry/observation-posts": () =>
    import("@/content/infantry/observation-posts"),
  "infantry/recon-basics": () => import("@/content/infantry/recon-basics"),
  "infantry/anti-drone-awareness": () =>
    import("@/content/infantry/anti-drone-awareness"),
  "infantry/night-combat": () => import("@/content/infantry/night-combat"),
  "infantry/nato-vs-post-soviet": () =>
    import("@/content/infantry/nato-vs-post-soviet"),
  "infantry/common-mistakes": () =>
    import("@/content/infantry/common-mistakes"),

  // Modern warfare
  "modern-warfare/fpv-drones": () =>
    import("@/content/modern-warfare/fpv-drones"),
  "modern-warfare/electronic-warfare": () =>
    import("@/content/modern-warfare/electronic-warfare"),
  "modern-warfare/sigint": () => import("@/content/modern-warfare/sigint"),
  "modern-warfare/thermal-warfare": () =>
    import("@/content/modern-warfare/thermal-warfare"),
  "modern-warfare/artillery-survival": () =>
    import("@/content/modern-warfare/artillery-survival"),
  "modern-warfare/anti-fpv-behavior": () =>
    import("@/content/modern-warfare/anti-fpv-behavior"),
  "modern-warfare/vehicle-camouflage": () =>
    import("@/content/modern-warfare/vehicle-camouflage"),
  "modern-warfare/comms-discipline": () =>
    import("@/content/modern-warfare/comms-discipline"),
  "modern-warfare/battlefield-awareness": () =>
    import("@/content/modern-warfare/battlefield-awareness"),
  "modern-warfare/kill-chain": () =>
    import("@/content/modern-warfare/kill-chain"),
  "modern-warfare/osint-battlefield": () =>
    import("@/content/modern-warfare/osint-battlefield"),
  "modern-warfare/black-sea-ops": () =>
    import("@/content/modern-warfare/black-sea-ops"),
  "modern-warfare/defcon-alpha": () =>
    import("@/content/modern-warfare/defcon-alpha"),

  // Operator mindset
  "operator-mindset/decision-making": () =>
    import("@/content/operator-mindset/decision-making"),
  "operator-mindset/small-unit-leadership": () =>
    import("@/content/operator-mindset/small-unit-leadership"),
  "operator-mindset/mental-discipline": () =>
    import("@/content/operator-mindset/mental-discipline"),
  "operator-mindset/cold-blood": () =>
    import("@/content/operator-mindset/cold-blood"),
  "operator-mindset/resilience": () =>
    import("@/content/operator-mindset/resilience"),
  "operator-mindset/team-cohesion": () =>
    import("@/content/operator-mindset/team-cohesion"),
  "operator-mindset/adaptive-thinking": () =>
    import("@/content/operator-mindset/adaptive-thinking"),
  "operator-mindset/combat-psychology": () =>
    import("@/content/operator-mindset/combat-psychology"),
  "operator-mindset/professional-conduct": () =>
    import("@/content/operator-mindset/professional-conduct"),
  "operator-mindset/mission-planning": () =>
    import("@/content/operator-mindset/mission-planning"),
  "operator-mindset/after-action-review": () =>
    import("@/content/operator-mindset/after-action-review"),

  // Weapons
  "weapons/ak-platform": () => import("@/content/weapons/ak-platform"),
  "weapons/ar-platform": () => import("@/content/weapons/ar-platform"),
  "weapons/pkm": () => import("@/content/weapons/pkm"),
  "weapons/svd": () => import("@/content/weapons/svd"),
  "weapons/rpg-series": () => import("@/content/weapons/rpg-series"),
  "weapons/atgm": () => import("@/content/weapons/atgm"),
  "weapons/manpads": () => import("@/content/weapons/manpads"),
  "weapons/mortars": () => import("@/content/weapons/mortars"),
  "weapons/machine-guns": () => import("@/content/weapons/machine-guns"),
  "weapons/optics-thermals": () => import("@/content/weapons/optics-thermals"),
  "weapons/nvg": () => import("@/content/weapons/nvg"),
  "weapons/radios": () => import("@/content/weapons/radios"),
  "weapons/drones-overview": () => import("@/content/weapons/drones-overview"),

  // Comms
  "comms/salute": () => import("@/content/comms/salute"),
  "comms/medevac-9line": () => import("@/content/comms/medevac-9line"),
  "comms/radio-discipline": () => import("@/content/comms/radio-discipline"),
  "comms/authentication": () => import("@/content/comms/authentication"),
  "comms/callsigns": () => import("@/content/comms/callsigns"),
  "comms/contact-report": () => import("@/content/comms/contact-report"),
  "comms/sitrep": () => import("@/content/comms/sitrep"),
  "comms/prowords": () => import("@/content/comms/prowords"),

  // Linguistic
  "linguistic/glossary-infantry": () =>
    import("@/content/linguistic/glossary-infantry"),
  "linguistic/glossary-radio": () =>
    import("@/content/linguistic/glossary-radio"),
  "linguistic/glossary-drones": () =>
    import("@/content/linguistic/glossary-drones"),
  "linguistic/glossary-medical": () =>
    import("@/content/linguistic/glossary-medical"),
  "linguistic/glossary-intel": () =>
    import("@/content/linguistic/glossary-intel"),
  "linguistic/glossary-urban": () =>
    import("@/content/linguistic/glossary-urban"),
  "linguistic/glossary-artillery": () =>
    import("@/content/linguistic/glossary-artillery"),
};

export const loadChapterContent = cache(
  async (
    section: SectionId,
    slug: string,
    locale: Locale,
  ): Promise<ChapterContent | null> => {
    const key = `${section}/${slug}` as const;
    const loader = REGISTRY[key];
    if (!loader) return null;
    const mod = await loader();
    return mod.default(locale);
  },
);
