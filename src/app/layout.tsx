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
  title: "Luxury Gifts Boston | Hand-Crafted Florals & Gift Boxes",
  description:
    "Boston's boutique studio for luxury florals, eternal roses, gift boxes, and event-specific gifting. Hand-built to order, delivered across Boston and surrounding areas.",
  openGraph: {
    title: "Luxury Gifts Boston",
    description:
      "Hand-crafted florals, eternal roses, and curated gift boxes. A perfect detail for every moment.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/luxury-gifts-logo-removebg-preview.png",
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
