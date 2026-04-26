"use client";

import Image from "next/image";
import { Icon } from "./Icon";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useT();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-20 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-rose-200/50 blur-3xl" />
        <div className="absolute top-20 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-gold-300/30 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-blush-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="text-center lg:text-left" style={{ animation: "fadeUp 1s 0.05s both" }}>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-5 font-display text-[2.7rem] leading-[1.02] sm:text-[3.6rem] md:text-[4.4rem] text-ink-900 text-balance">
            {t.hero.titleA}
            <br />
            <span className="italic text-rose-500">{t.hero.titleB}</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-[1.02rem] leading-relaxed text-ink-700 text-pretty">
            {t.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Icon name="whatsapp" size={16} />
              {t.hero.ctaPrimary}
            </a>
            <a href="#collection" className="btn-ghost">
              {t.hero.ctaSecondary}
              <Icon name="arrow" size={15} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {t.trust.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display text-2xl sm:text-3xl text-ink-900">{stat.stat}</div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-700 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative" style={{ animation: "fadeUp 1.1s 0.2s both" }}>
          <div className="relative mx-auto w-full max-w-[28rem] aspect-[4/5]">
            <div
              className="absolute inset-0 rounded-[36px] overflow-hidden border border-white/70"
              style={{ boxShadow: "0 50px 80px -40px rgba(174, 84, 70, 0.45)" }}
            >
              <Image
                src="/images/flower-bouqets/rose-1.jpg"
                alt="Hand-tied luxury rose arrangement"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26,19,16,0) 55%, rgba(26,19,16,0.45) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div className="text-white">
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-90">{t.hero.cardLabel}</div>
                  <div className="font-display text-xl leading-tight">{t.hero.cardName}</div>
                </div>
                <div className="glass-warm rounded-full px-3 py-1.5 text-xs text-ink-900 font-semibold">
                  $195
                </div>
              </div>
            </div>

            <div
              className="hidden sm:block absolute -top-8 -left-10 h-32 w-32 rounded-full glass overflow-hidden"
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              <Image
                src="/images/gift baskets/gift-basket-1.jpg"
                alt="Curated gift basket detail"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>

            <div
              className="hidden sm:block absolute -bottom-10 -right-8 h-36 w-36 rounded-[28px] glass overflow-hidden"
              style={{ animation: "float 10s ease-in-out infinite", animationDelay: "1.2s" }}
            >
              <Image
                src="/images/gift baskets/gift-basket-2.jpg"
                alt="Hand-styled luxury gift box"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>

            <div className="hidden md:flex absolute top-1/2 -right-16 -translate-y-1/2 glass rounded-2xl px-4 py-3 items-center gap-3">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={14} className="text-gold-400" />
                ))}
              </div>
              <div className="text-xs">
                <div className="font-semibold text-ink-900">{t.hero.ratingStrong}</div>
                <div className="text-ink-700">{t.hero.ratingSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
