import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "./chapter-template";

interface StubSpec {
  it: { intro: string; sections: ReadonlyArray<{ heading: string; body: string }> };
  en: { intro: string; sections: ReadonlyArray<{ heading: string; body: string }> };
  "pt-br": { intro: string; sections: ReadonlyArray<{ heading: string; body: string }> };
  fr: { intro: string; sections: ReadonlyArray<{ heading: string; body: string }> };
}

export function stub(spec: StubSpec) {
  const build = (
    s: { intro: string; sections: ReadonlyArray<{ heading: string; body: string }> },
  ): StandardChapter => ({
    intro: s.intro,
    sections: s.sections.map((sec) => ({
      heading: sec.heading,
      blocks: [{ type: "p" as const, text: sec.body }],
    })),
  });
  const data: Record<Locale, StandardChapter> = {
    it: build(spec.it),
    en: build(spec.en),
    "pt-br": build(spec["pt-br"]),
    fr: build(spec.fr),
  };
  return fromLocales(data);
}
