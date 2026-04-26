"use client";

import { useT } from "@/i18n/LanguageProvider";
import { Icon } from "./Icon";

const CELL = "425-591-5136";
const CELL_RAW = "4255915136";

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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] font-semibold text-white border border-white/25">
            <Icon name="sparkle" size={11} className="text-gold-300" />
            {m.tag}
          </span>
          <p className="text-[12px] sm:text-[13px] leading-snug">
            <span className="font-medium">{m.message}</span>{" "}
            <span className="text-white/80">{m.cta}</span>
          </p>
        </div>
        <a
          href={`tel:+1${CELL_RAW}`}
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-ink-900 hover:bg-gold-300 transition-colors px-3.5 py-1.5 text-[12px] sm:text-[13px] font-semibold cursor-pointer"
        >
          <Icon name="phone" size={13} />
          {m.callPrefix} {CELL}
        </a>
      </div>
    </div>
  );
}
