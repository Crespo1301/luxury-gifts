type ConceptWatermarkProps = {
  compact?: boolean;
};

export function ConceptWatermark({ compact = false }: ConceptWatermarkProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 whitespace-nowrap rounded-full border border-white/55 bg-ink-900/34 font-semibold uppercase text-white shadow-[0_14px_34px_rgba(26,19,16,0.18)] backdrop-blur-[2px] ${
          compact
            ? "px-3 py-1 text-[8px] tracking-[0.22em]"
            : "px-5 py-2 text-[10px] tracking-[0.26em] sm:text-[11px]"
        }`}
      >
        CSolutions Template
      </div>
      {!compact && (
        <div className="absolute bottom-3 left-3 rounded-full border border-white/50 bg-white/78 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-800 backdrop-blur">
          Example Image
        </div>
      )}
    </div>
  );
}
