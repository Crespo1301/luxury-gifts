"use client";

import { Icon } from "./Icon";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { t } = useT();

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-stretch">
          <div className="glass rounded-[32px] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="eyebrow">{t.contact.eyebrow}</span>
              <h2 className="section-title mt-4">
                {t.contact.titleA}
                <br />
                <span className="italic text-rose-500">{t.contact.titleB}</span>
              </h2>
              <p className="mt-5 text-ink-700 leading-relaxed">{t.contact.body}</p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <Icon name="whatsapp" size={16} />
                {t.contact.whatsapp} {site.phone}
              </a>
              <a
                href={`sms:+1${site.phoneRaw}`}
                className="btn-ghost w-full justify-center"
              >
                <Icon name="phone" size={15} />
                {t.contact.sms} {site.phone}
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="glass-warm rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                  <Icon name="pin" size={18} />
                </div>
                <h3 className="font-display text-xl text-ink-900">{t.contact.serviceTitle}</h3>
              </div>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">{t.contact.serviceBody}</p>
            </div>

            <div className="glass-warm rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-300/40 text-gold-600">
                  <Icon name="check" size={18} />
                </div>
                <h3 className="font-display text-xl text-ink-900">{t.contact.paymentsTitle}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {site.payments.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-3 border border-rose-100/70"
                  >
                    <span className="text-sm text-ink-700">{p.label}</span>
                    <span className="text-sm font-semibold text-ink-900">{p.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-700">
                {t.contact.accountHolder}: {site.founder}. {t.contact.reservedNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
