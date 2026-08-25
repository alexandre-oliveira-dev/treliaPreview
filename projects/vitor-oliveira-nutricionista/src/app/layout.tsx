import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://vitor-oliveira-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vitor Oliveira | Nutricionista Clínico em São Paulo",
    template: "%s | Vitor Oliveira Nutricionista",
  },
  description:
    "Vitor Oliveira, nutricionista clínico (CRN-3 94088/P) na Bela Vista, São Paulo - SP. Consultas para metabolismo e emagrecimento, cardápios sob medida e marmitas Nutrichef. Agende pelo WhatsApp.",
  keywords: [
    "nutricionista São Paulo",
    "nutricionista Bela Vista",
    "emagrecimento saudável",
    "Vitor Oliveira nutricionista",
    "Nutrichef",
    "marmitas fit São Paulo",
    "consulta nutricional online",
  ],
  authors: [{ name: "Vitor Oliveira" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vitor Oliveira | Nutricionista Clínico em São Paulo",
    description:
      "Nutrição com ciência, técnica culinária e afeto: consultas para metabolismo e emagrecimento, cardápios sob medida e marmitas Nutrichef na Bela Vista, SP.",
    url: SITE_URL,
    siteName: "Vitor Oliveira Nutricionista",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitor Oliveira | Nutricionista Clínico em São Paulo",
    description:
      "Nutrição com ciência, técnica culinária e afeto: consultas para metabolismo e emagrecimento, cardápios sob medida e marmitas Nutrichef na Bela Vista, SP.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink-950">
        {children}
      </body>
    </html>
  );
}
