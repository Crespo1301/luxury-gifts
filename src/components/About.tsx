"use client";

import Image from "next/image";
import { Icon } from "./Icon";
import { useT } from "@/i18n/LanguageProvider";

export default function About() {
  const { t } = useT();

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[36px] glass-warm p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center relative">
            <div className="text-center lg:text-left">
              <span className="eyebrow">{t.about.eyebrow}</span>
              <h2 className="section-title mt-4">
                {t.about.titleA} <span className="italic text-rose-500">{t.about.titleB}</span>
              </h2>
              <p className="mt-5 text-ink-700 leading-relaxed">{t.about.body1}</p>
              <p className="mt-4 text-ink-700 leading-relaxed">{t.about.body2}</p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {t.about.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full bg-white/70 border border-rose-200/60 px-3.5 py-2 text-xs text-ink-800 text-center"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div
                className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-white/80"
                style={{ boxShadow: "0 40px 70px -35px rgba(174, 84, 70, 0.4)" }}
              >
                <Image
                  src="/images/generated/birthday-pastel-bouquet.png"
                  alt="Generated concept image of a birthday bouquet and gift box"
                  fill
                  sizes="(max-width: 1024px) 90vw, 22rem"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 max-w-[14rem] -translate-x-1/2 glass rounded-2xl p-4 sm:-left-8 sm:translate-x-0">
                <div className="flex items-center gap-2">
                  <Icon name="pin" size={16} className="text-rose-500" />
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-600">
                    {t.about.studioTag}
                  </span>
                </div>
                <div className="mt-1 font-display text-lg text-ink-900 leading-tight">
                  {t.about.studioCity}
                </div>
                <div className="text-xs text-ink-700 mt-1">
                  {t.about.servingPrefix} {t.about.servingArea}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
