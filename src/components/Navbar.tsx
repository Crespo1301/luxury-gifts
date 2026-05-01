"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Navbar() {
  const { t, lang, toggle } = useT();
  const links = [
    { href: "#collection", label: t.nav.collection },
    { href: "#categories", label: t.nav.categories },
    { href: "#process", label: t.nav.process },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled ? "glass" : "bg-white/55 backdrop-blur-md border border-white/50"
        }`}
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5 group"
          aria-label={`${site.brand} home`}
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/80 ring-1 ring-gold-400/40">
            <Image
              src="/images/template-placeholder.svg"
              alt=""
              width={36}
              height={36}
              className="h-7 w-7 object-contain"
              priority
            />
          </span>
          <span className="hidden min-[430px]:flex flex-col leading-none">
            <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink-900">
              Luxury Gifts Template
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-600">
              Placeholder Brand
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.82rem] font-medium tracking-wide text-ink-700 hover:text-rose-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-gold-400/40 bg-white/70 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-800 transition-colors hover:border-gold-400 hover:bg-white cursor-pointer"
            aria-label={`Switch to ${t.nav.langSwitch}`}
          >
            <span>{lang === "en" ? "ES" : "EN"}</span>
          </button>

          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-rose-500 px-2.5 text-[0.68rem] font-medium text-white transition-colors hover:bg-rose-400 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[0.78rem]"
          >
            <Icon name="whatsapp" size={15} />
            <span className="hidden min-[430px]:inline">{t.nav.orderWhatsApp}</span>
            <span className="min-[430px]:hidden">Chat</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 border border-white/80 text-ink-800 cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 top-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(253, 246, 243, 0.96)", backdropFilter: "blur(18px)" }}
      >
        <div className="flex h-full flex-col gap-1.5 overflow-y-auto px-7 pt-24 text-center">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rose-200/60 py-4 font-display text-3xl text-ink-900"
              style={{
                animation: open ? `fadeUp 0.5s ${0.05 * i + 0.1}s both` : "none",
              }}
            >
              {l.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              toggle();
            }}
            className="mt-6 inline-flex self-center items-center rounded-full border border-gold-400/40 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-800 cursor-pointer"
          >
            {t.nav.langSwitch}
          </button>

          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 self-center"
          >
            <Icon name="whatsapp" size={16} />
            {t.nav.orderWhatsApp}
          </a>
          <a
            href={`tel:+1${site.phoneRaw}`}
            onClick={() => setOpen(false)}
            className="btn-ghost mt-3 self-center"
          >
            <Icon name="phone" size={15} />
            {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
