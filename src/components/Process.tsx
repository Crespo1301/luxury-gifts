"use client";

import { Icon } from "./Icon";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Process() {
  const { t } = useT();

  return (
    <section id="process" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-center lg:sticky lg:top-32 lg:text-left">
            <span className="eyebrow">{t.process.eyebrow}</span>
            <h2 className="section-title mt-4">
              {t.process.titleA} <span className="italic text-rose-500">{t.process.titleB}</span>
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">{t.process.body}</p>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              <Icon name="whatsapp" size={16} />
              {t.process.cta}
            </a>
          </div>

          <ol className="relative space-y-5">
            {t.process.steps.map((p, i) => (
              <li
                key={p.step}
                className="relative glass rounded-3xl p-6 sm:p-7"
                style={{ animation: `fadeUp 0.9s ${0.06 * i + 0.1}s both` }}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="font-display text-4xl sm:text-5xl text-rose-300/90 leading-none">
                      {p.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink-900">{p.title}</h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-ink-700 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
