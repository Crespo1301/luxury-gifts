"use client";

import { Icon } from "./Icon";
import { categoryIcons } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Categories() {
  const { t } = useT();

  return (
    <section id="categories" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <span className="eyebrow">{t.categories.eyebrow}</span>
          <h2 className="section-title mt-4">
            {t.categories.titleA} <span className="italic text-rose-500">{t.categories.titleB}</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.categories.items.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl glass p-7 text-center transition-transform duration-500 hover:-translate-y-1.5 sm:text-left"
              style={{ animation: `fadeUp 0.9s ${0.05 * i + 0.1}s both` }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-blush-200 text-rose-500 ring-1 ring-white/80 sm:mx-0">
                <Icon name={categoryIcons[i] as "flower"} size={22} />
              </div>
              <h3 className="font-display text-2xl text-ink-900 mt-5">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.blurb}</p>
              <div className="gold-divider h-px mt-6 opacity-50" />
              <div className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-600 sm:justify-start">
                {t.categories.madeToOrder}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
