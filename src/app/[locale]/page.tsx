import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, BookText } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { Gallery } from "@/components/gallery";

const OSINT_IMAGES = [
  {
    src: "/images/defcon/ml-006.jpg",
    width: 1600,
    height: 1599,
  },
  {
    src: "/images/defcon/ml-243.jpg",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/defcon/ml-104409.jpg",
    width: 1116,
    height: 1400,
  },
  {
    src: "/images/defcon/ml-104643.jpg",
    width: 1241,
    height: 1400,
  },
] as const;

interface PageProps {
  readonly params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("landing");

  const levels = [
    { key: "level1", href: "/manual#foundation" },
    { key: "level2", href: "/manual#infantry" },
    { key: "level3", href: "/manual#modern-warfare" },
    { key: "level4", href: "/manual#operator-mindset" },
    { key: "weapons", href: "/manual#weapons" },
    { key: "comms", href: "/manual#comms" },
    { key: "linguistic", href: "/manual#linguistic" },
  ] as const;

  return (
    <div>
      {/* Hero */}
      <section className="relative border-b border-rule bg-bg-2 bg-grid bg-scan">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-8 bg-accent" />
            <span className="mono stencil text-[11px] text-accent">
              {t("tag")}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {t("hero.title")}
          </h1>

          <p className="mt-8 max-w-2xl text-fg-2 text-lg leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href="/manual"
              className="group inline-flex items-center gap-3 bg-accent text-bg px-5 h-11 mono stencil text-[12px] hover:bg-accent-strong transition-colors"
            >
              <BookText className="size-4" aria-hidden />
              {t("hero.cta")}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            <Link
              href="/manual"
              className="inline-flex items-center gap-3 border border-rule text-fg-2 px-5 h-11 mono stencil text-[12px] hover:border-accent hover:text-accent transition-colors"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Public OSINT references */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="mb-8">
            <p className="mono stencil text-[11px] text-accent">
              {t("osint.label")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {t("osint.title")}
            </h2>
            <p className="mt-2 text-fg-2 max-w-2xl">{t("osint.subtitle")}</p>
          </div>
          <Gallery
            items={OSINT_IMAGES.map((img, i) => ({
              ...img,
              alt: t(`osint.alts.${i}`),
              caption: t(`osint.captions.${i}`),
            }))}
            note={t("osint.note")}
            columns={2}
          />
        </div>
      </section>

      {/* Scope */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="mono stencil text-[11px] text-accent">§ 00 / SCOPE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {t("scope.title")}
            </h2>
          </div>
          <div className="lg:col-span-8 prose-mil">
            <p>{t("scope.body")}</p>
            <ul>
              {t.raw("scope.items").map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Levels grid */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="mono stencil text-[11px] text-accent">
                § 01 / STRUCTURE
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {t("levels.title")}
              </h2>
              <p className="mt-2 text-fg-2 max-w-2xl">
                {t("levels.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {levels.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="group bg-bg p-6 hover:bg-bg-2 transition-colors block"
              >
                <p className="mono stencil text-[11px] text-accent">
                  {t(`levels.${key}.label`)}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {t(`levels.${key}.title`)}
                </h3>
                <p className="mt-3 text-fg-2 text-sm leading-relaxed">
                  {t(`levels.${key}.body`)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 mono stencil text-[11px] text-fg-3 group-hover:text-accent transition-colors">
                  OPEN
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="mono stencil text-[11px] text-warn">
              § 99 / DISCLAIMER
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              {t("disclaimer.title")}
            </h2>
          </div>
          <div className="lg:col-span-8 border-l border-rule pl-6 lg:pl-10">
            <p className="text-fg-2 leading-relaxed">{t("disclaimer.body")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
