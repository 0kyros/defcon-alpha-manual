import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  MANUAL_STRUCTURE,
  findChapter,
  type SectionId,
} from "@/lib/manual";
import { loadChapterContent } from "@/lib/chapter-content";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { hreflangFor, SITE_URL } from "@/lib/site";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  readonly params: Promise<{
    locale: Locale;
    section: string;
    chapter: string;
  }>;
}

export function generateStaticParams(): Array<{
  locale: string;
  section: string;
  chapter: string;
}> {
  const out: Array<{ locale: string; section: string; chapter: string }> = [];
  for (const locale of routing.locales) {
    for (const section of MANUAL_STRUCTURE) {
      for (const chapter of section.chapters) {
        out.push({ locale, section: section.id, chapter: chapter.slug });
      }
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, section, chapter } = await params;
  const found = findChapter(section, chapter);
  if (!found) return {};

  const t = await getTranslations({ locale });
  const sectionTitle = t(`sections.${found.section.id}.title`);
  const chapterTitle = t(`chapters.${found.section.id}.${chapter}`);

  const pathSuffix = `/manual/${section}/${chapter}`;
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[hreflangFor(loc)] = `${SITE_URL}/${loc}${pathSuffix}`;
  }
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${pathSuffix}`;

  const description = `${sectionTitle} — ${chapterTitle}`;
  return {
    title: chapterTitle,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}${pathSuffix}`,
      languages,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/${locale}${pathSuffix}`,
      title: chapterTitle,
      description,
    },
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { locale, section, chapter } = await params;
  setRequestLocale(locale);

  const found = findChapter(section, chapter);
  if (!found) notFound();

  const t = await getTranslations();
  const sectionId = found.section.id;

  const flat = MANUAL_STRUCTURE.flatMap((s) =>
    s.chapters.map((c) => ({ sectionId: s.id, slug: c.slug })),
  );
  const idx = flat.findIndex(
    (item) => item.sectionId === sectionId && item.slug === chapter,
  );
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx < flat.length - 1 ? flat[idx + 1] : null;

  const content = found.chapter.hasContent
    ? await loadChapterContent(sectionId as SectionId, chapter, locale)
    : null;

  const sectionTitle = t(`sections.${sectionId}.title`);
  const chapterTitle = t(`chapters.${sectionId}.${chapter}`);

  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-10 py-12">
      <nav className="mb-8 flex items-center gap-2 mono stencil text-[11px] text-fg-3">
        <Link href="/manual" className="hover:text-accent transition-colors">
          {t("manual.title")}
        </Link>
        <span>/</span>
        <Link
          href={`/manual#${sectionId}`}
          className="hover:text-accent transition-colors"
        >
          {sectionTitle}
        </Link>
      </nav>

      <header className="border-b border-rule pb-6 mb-10">
        <p className="mono stencil text-[11px] text-accent">
          {t("manual.section")} {found.section.number}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          {chapterTitle}
        </h1>
        {!found.chapter.hasContent && (
          <p className="mt-4 mono stencil text-[11px] text-warn inline-block border border-warn px-2 py-1">
            {t("manual.draft")}
          </p>
        )}
      </header>

      <article className="prose-mil">
        {content ? (
          <>
            <p className="text-fg-2 text-lg leading-relaxed mb-8 italic border-l-2 border-accent pl-4">
              {content.intro}
            </p>
            {content.body}
          </>
        ) : (
          <DraftPlaceholder
            locale={locale}
            section={sectionTitle}
            chapter={chapterTitle}
          />
        )}
      </article>

      <nav className="mt-16 pt-6 border-t border-rule flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/manual/${prev.sectionId}/${prev.slug}`}
            className="group flex items-center gap-3 text-fg-2 hover:text-accent transition-colors"
          >
            <ArrowLeft
              className="size-4 transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            />
            <span className="text-left">
              <span className="block mono stencil text-[10px] text-fg-3">
                {t("manual.prev")}
              </span>
              <span className="text-sm">
                {t(`chapters.${prev.sectionId}.${prev.slug}`)}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/manual/${next.sectionId}/${next.slug}`}
            className="group flex items-center gap-3 text-fg-2 hover:text-accent transition-colors text-right"
          >
            <span>
              <span className="block mono stencil text-[10px] text-fg-3">
                {t("manual.next")}
              </span>
              <span className="text-sm">
                {t(`chapters.${next.sectionId}.${next.slug}`)}
              </span>
            </span>
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}

interface DraftPlaceholderProps {
  readonly locale: Locale;
  readonly section: string;
  readonly chapter: string;
}

function DraftPlaceholder({
  locale,
  section,
  chapter,
}: DraftPlaceholderProps) {
  const copy: Record<Locale, { title: string; body: string; bullet: string }> =
    {
      it: {
        title: "Capitolo in stesura",
        body: "Questo capitolo è un placeholder strutturale. Il contenuto definitivo è in fase di redazione e seguirà il formato standard del manuale.",
        bullet: "Sezioni previste",
      },
      en: {
        title: "Chapter in drafting",
        body: "This chapter is a structural placeholder. Definitive content is being drafted and will follow the manual's standard format.",
        bullet: "Planned sections",
      },
      "pt-br": {
        title: "Capítulo em redação",
        body: "Este capítulo é um placeholder estrutural. O conteúdo definitivo está sendo redigido e seguirá o formato padrão do manual.",
        bullet: "Seções previstas",
      },
      fr: {
        title: "Chapitre en cours de rédaction",
        body: "Ce chapitre est un emplacement structurel. Le contenu définitif est en cours de rédaction et suivra le format standard du manuel.",
        bullet: "Sections prévues",
      },
    };

  const c = copy[locale];

  return (
    <>
      <p className="text-fg-2 text-lg leading-relaxed mb-8 italic border-l-2 border-warn pl-4">
        {c.body}
      </p>
      <h2>{c.title}</h2>
      <p>
        <code>{section}</code> / <code>{chapter}</code>
      </p>
      <h3>{c.bullet}</h3>
      <ul>
        <li>Overview</li>
        <li>Terminology</li>
        <li>SOP</li>
        <li>Lessons learned Ukraine</li>
        <li>Common mistakes</li>
        <li>Checklist</li>
      </ul>
    </>
  );
}
