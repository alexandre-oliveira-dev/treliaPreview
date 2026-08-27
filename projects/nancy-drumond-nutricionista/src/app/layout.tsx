import type { Metadata, Viewport } from "next";
import { Italiana, Figtree } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://nancy-drumond-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nancy Drumond | Nutricionista Especialista em SOP em Belo Horizonte",
    template: "%s | Nancy Drumond Nutricionista",
  },
  description:
    "Destrave seu emagrecimento mesmo tendo SOP e controle seus sintomas. Nutrição individualizada e acolhedora com Nancy Drumond no Centro de Belo Horizonte.",
  keywords: [
    "nutricionista SOP Belo Horizonte",
    "síndrome dos ovários policísticos nutrição",
    "nutricionista Centro BH",
    "Nancy Drumond nutricionista",
    "nutrição saúde da mulher",
  ],
  authors: [{ name: "Nancy Drumond" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nancy Drumond | Nutrição Especialista em SOP",
    description:
      "Destrave seu emagrecimento mesmo tendo SOP e controle seus sintomas. Nutrição individualizada em Belo Horizonte.",
    url: SITE_URL,
    siteName: "Nancy Drumond Nutrição",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nancy Drumond | Nutrição Especialista em SOP",
    description:
      "Destrave seu emagrecimento mesmo tendo SOP e controle seus sintomas. Nutrição individualizada em Belo Horizonte.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#241726",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${italiana.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-plum text-ivory">
        {children}
      </body>
    </html>
  );
}
