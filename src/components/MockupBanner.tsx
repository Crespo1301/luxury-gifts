"use client";

import { useT } from "@/i18n/LanguageProvider";

export default function MockupBanner() {
  const { t } = useT();
  const m = t.mockup;

  return (
    <div
      role="region"
      aria-label="CSolutions mockup notice"
      className="relative z-[60] text-white"
      style={{
        background:
          "linear-gradient(90deg, #2e2520 0%, #4a3b34 35%, #8a6a36 75%, #b08948 100%)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2 text-center sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:text-left">
        <div className="flex min-w-0 items-center justify-center gap-3 sm:justify-start">
          <span className="hidden sm:inline-flex items-center rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            {m.tag}
          </span>
          <p className="text-[12px] sm:text-[13px] leading-snug">
            <span className="font-medium">This is a CSolutions template.</span>{" "}
            <span className="text-white/80">This design and others are available at carloscrespo.info.</span>
          </p>
        </div>
        <a
          href="https://carloscrespo.info"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-semibold text-ink-900 transition-colors hover:bg-gold-300 sm:text-[13px] cursor-pointer"
        >
          Reach Out
        </a>
      </div>
    </div>
  );
}
