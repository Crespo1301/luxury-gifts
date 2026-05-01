"use client";

import { Icon } from "./Icon";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="relative mt-20 border-t border-rose-200/50 bg-gradient-to-b from-transparent to-blush-100/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 rounded-[28px] border border-gold-400/30 bg-white/70 px-6 py-8 text-center sm:px-8 sm:py-10 lg:text-left">
          <p className="text-[10px] uppercase tracking-[0.28em] text-gold-600">CSolutions Template</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl text-ink-900">
                This design and others are available at carloscrespo.info.
              </h3>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                If this style fits your business, reach out and get a custom version built around your brand,
                products, and service area.
              </p>
            </div>
            <a
              href="https://carloscrespo.info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-center lg:self-center"
            >
              <Icon name="sparkle" size={16} />
              Reach Out
            </a>
          </div>
        </div>

        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <div className="font-display text-2xl text-ink-900">{site.brand}</div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-600 mt-1">
              {t.footer.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-ink-700 md:mx-0">
              {t.footer.blurb}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-600 mb-4">
              {t.footer.reach}
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-800">
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 transition-colors hover:text-rose-500 md:justify-start"
                >
                  <Icon name="whatsapp" size={16} />
                  WhatsApp {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+1${site.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 transition-colors hover:text-rose-500 md:justify-start"
                >
                  <Icon name="phone" size={16} />
                  {t.footer.callPrefix} {site.phone}
                </a>
              </li>
              <li className="inline-flex items-center justify-center gap-2 md:justify-start">
                <Icon name="pin" size={16} />
                {t.about.servingArea}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-600 mb-4">
              {t.footer.payments}
            </h4>
            <ul className="space-y-2 text-sm text-ink-800">
              {site.payments.map((p) => (
                <li key={p.label} className="mx-auto flex max-w-xs items-center justify-between gap-4 md:mx-0">
                  <span className="text-ink-700">{p.label}</span>
                  <span className="font-medium text-ink-900">{p.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-divider h-px my-10 opacity-50" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
          <p className="text-xs text-ink-700">
            © {new Date().getFullYear()} {site.brand}. {t.footer.studioPrefix} {site.alt}.
          </p>
          <p className="text-xs text-ink-700">
            {t.footer.siteBy}{" "}
            <a
              href="https://carloscrespo.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-600 hover:text-rose-500 transition-colors"
            >
              CSolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
