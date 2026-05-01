"use client";

import { useT } from "@/i18n/LanguageProvider";

export default function Marquee() {
  const { t } = useT();
  const items = t.marquee;

  return (
    <section
      aria-hidden="true"
      className="relative py-5 border-y border-rose-200/60 bg-white/40 overflow-hidden"
    >
      <div className="relative flex overflow-hidden">
        <div
          className="flex shrink-0 items-center gap-10 pr-10 whitespace-nowrap"
          style={{ animation: "marquee 38s linear infinite" }}
        >
          {[...items, ...items].map((label, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-xl sm:text-2xl text-ink-800/80 italic">
                {label}
              </span>
              <span className="h-px w-8 bg-gold-400/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
