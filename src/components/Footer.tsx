"use client";

import { Icon } from "./Icon";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="relative mt-20 border-t border-rose-200/50 bg-gradient-to-b from-transparent to-blush-100/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-ink-900">{site.brand}</div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-600 mt-1">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-ink-700 max-w-xs leading-relaxed">
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
                  className="inline-flex items-center gap-2 hover:text-rose-500 transition-colors"
                >
                  <Icon name="whatsapp" size={16} />
                  WhatsApp {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+1${site.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-rose-500 transition-colors"
                >
                  <Icon name="phone" size={16} />
                  {t.footer.callPrefix} {site.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
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
                <li key={p.label} className="flex items-center justify-between gap-4 max-w-xs">
                  <span className="text-ink-700">{p.label}</span>
                  <span className="font-medium text-ink-900">{p.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-divider h-px my-10 opacity-50" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
