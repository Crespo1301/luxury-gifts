"use client";

import Image from "next/image";
import { Icon } from "./Icon";
import { products, site, type CategoryKey } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

function placeholderBg(category: CategoryKey) {
  const map: Record<CategoryKey, string> = {
    Roses: "from-rose-200 via-blush-200 to-cream-100",
    "Eternal Roses": "from-rose-300 via-rose-200 to-blush-100",
    "Gift Box": "from-cream-200 via-blush-100 to-rose-100",
    Breakfast: "from-blush-100 via-cream-100 to-gold-300/40",
    Basket: "from-blush-200 via-cream-100 to-rose-100",
  };
  return map[category];
}

export default function Collection() {
  const { t } = useT();

  return (
    <section id="collection" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">{t.collection.eyebrow}</span>
            <h2 className="section-title mt-4">
              {t.collection.titleA} <span className="italic text-rose-500">{t.collection.titleB}</span>
            </h2>
            <p className="mt-4 text-ink-700 text-pretty leading-relaxed">
              {t.collection.body}
            </p>
          </div>
          <a
            href={site.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost shrink-0"
          >
            {t.collection.catalogCta}
            <Icon name="arrow" size={15} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, i) => {
            const copy = t.products[item.id];
            const categoryLabel = t.collection.categoryNames[item.category];
            const orderHref = `${site.whatsappLink.split("?")[0]}?text=${encodeURIComponent(
              t.collection.orderMessage(copy.name, item.price)
            )}`;
            const badge = "badge" in copy ? (copy as { badge?: string }).badge : undefined;

            return (
              <article
                key={item.id}
                className="card-product flex flex-col"
                style={{ animation: `fadeUp 0.9s ${0.04 * i + 0.05}s both` }}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${placeholderBg(
                    item.category
                  )}`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={copy.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <Icon name="flower" size={42} className="mx-auto text-rose-400/70" />
                        <div className="mt-2 font-display text-lg text-ink-800/80 italic">
                          {categoryLabel}
                        </div>
                      </div>
                    </div>
                  )}
                  {badge && (
                    <div className="absolute top-3 left-3 glass-warm text-[10px] uppercase tracking-[0.18em] text-gold-600 font-semibold rounded-full px-3 py-1">
                      {badge}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold text-ink-900">
                    ${item.price}
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold-600">
                    {categoryLabel}
                  </div>
                  <h3 className="font-display text-2xl text-ink-900 mt-1.5 leading-tight">
                    {copy.name}
                  </h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
                    {copy.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Icon name="check" size={14} className="mt-1 text-rose-400 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-rose-100/80 flex items-center justify-between">
                    <span className="text-xs text-ink-700">{t.collection.handBuilt}</span>
                    <a
                      href={orderHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-rose-500 hover:text-rose-400 transition-colors"
                    >
                      {t.collection.orderCta}
                      <Icon name="arrow" size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-ink-700">
          {t.collection.footnote}
        </div>
      </div>
    </section>
  );
}
