import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { MANUAL_STRUCTURE } from "@/lib/manual";
import { routing, type Locale } from "@/i18n/routing";
import { hreflangFor, SITE_URL } from "@/lib/site";
import { ChevronRight } from "lucide-react";

interface PageProps {
  readonly params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "manual" });
  const pathSuffix = "/manual";
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[hreflangFor(loc)] = `${SITE_URL}/${loc}${pathSuffix}`;
  }
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${pathSuffix}`;
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `${SITE_URL}/${locale}${pathSuffix}`,
      languages,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${locale}${pathSuffix}`,
      title: t("title"),
      description: t("subtitle"),
    },
  };
}

export default async function ManualIndexPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="border-b border-rule pb-8 mb-12">
        <p className="mono stencil text-[11px] text-accent">§ INDEX</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
          {t("manual.title")}
        </h1>
        <p className="mt-3 text-fg-2 max-w-3xl">{t("manual.subtitle")}</p>
      </div>

      <div className="space-y-16">
        {MANUAL_STRUCTURE.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="mono stencil text-[11px] text-accent">
                  SECTION {section.number}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {t(`sections.${section.id}.title`)}
                </h2>
                <p className="mt-3 text-fg-2 text-sm leading-relaxed">
                  {t(`sections.${section.id}.intro`)}
                </p>
              </div>

              <ol className="lg:col-span-8 border-t border-rule">
                {section.chapters.map((chapter, index) => (
                  <li key={chapter.slug}>
                    <Link
                      href={`/manual/${section.id}/${chapter.slug}`}
                      className="group flex items-center gap-6 border-b border-rule py-4 px-1 hover:bg-bg-2 transition-colors"
                    >
                      <span className="mono text-[11px] text-fg-3 stencil tabular-nums w-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-fg group-hover:text-accent-strong transition-colors">
                        {t(`chapters.${section.id}.${chapter.slug}`)}
                      </span>
                      <span
                        className={
                          "mono stencil text-[10px] px-2 py-0.5 border " +
                          (chapter.hasContent
                            ? "border-accent text-accent"
                            : "border-rule text-fg-3")
                        }
                      >
                        {chapter.hasContent
                          ? t("manual.available")
                          : t("manual.draft")}
                      </span>
                      <ChevronRight
                        className="size-4 text-fg-3 group-hover:text-accent transition-colors"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
