"use client";

import { Icon } from "./Icon";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function CatalogCTA() {
  const { t } = useT();

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[36px] p-10 sm:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, #fbeae3 0%, #f6c5d2 50%, #e3c884 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
            style={{
              background:
                "radial-gradient(600px 300px at 50% -20%, rgba(255,255,255,0.6), transparent 60%)",
            }}
          />
          <div className="relative">
            <span className="eyebrow bg-white/80">{t.catalog.eyebrow}</span>
            <h2 className="section-title mt-4 text-balance">
              {t.catalog.titleA} <span className="italic text-rose-500">{t.catalog.titleB}</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-ink-700 leading-relaxed">{t.catalog.body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={site.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.catalog.ctaPrimary}
                <Icon name="arrow" size={15} />
              </a>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost bg-white/80"
              >
                <Icon name="whatsapp" size={15} />
                {t.catalog.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
