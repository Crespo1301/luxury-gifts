import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-loaded",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Gifts Template | Hand-Crafted Florals & Gift Boxes",
  description:
    "Reusable luxury gifting template for florals, curated boxes, and event-ready presentation.",
  openGraph: {
    title: "Luxury Gifts Template",
    description:
      "Reusable florals and gifting template with premium presentation and bilingual support.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/template-placeholder.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
