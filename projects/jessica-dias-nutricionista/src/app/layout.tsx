import type { Metadata, Viewport } from "next";
import { Gloock, Onest } from "next/font/google";
import "./globals.css";

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: ["400"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://jessica-dias-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jéssica Dias | Nutricionista em Curitiba",
    template: "%s | Jéssica Dias Nutricionista",
  },
  description:
    "Nutricionista em Curitiba - PR. Emagrecimento saudável, reeducação alimentar e saúde digestiva com acompanhamento próximo. Atendimento presencial no Centro de Curitiba e online.",
  keywords: [
    "nutricionista Curitiba",
    "nutricionista Centro Curitiba",
    "emagrecimento Curitiba",
    "reeducação alimentar",
    "Jéssica Dias nutricionista",
    "nutrição online",
  ],
  authors: [{ name: "Jéssica Dias" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jéssica Dias | Nutricionista em Curitiba",
    description:
      "Emagrecimento saudável, reeducação alimentar e saúde digestiva conduzidos com acompanhamento próximo. Atendimento presencial no Centro de Curitiba e online.",
    url: SITE_URL,
    siteName: "Jéssica Dias Nutrição",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jéssica Dias | Nutricionista em Curitiba",
    description:
      "Emagrecimento saudável, reeducação alimentar e saúde digestiva com acompanhamento próximo, presencial ou online.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#251d15",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${gloock.variable} ${onest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-bark">
        {children}
      </body>
    </html>
  );
}
