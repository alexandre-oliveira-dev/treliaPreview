import type { Metadata } from "next";
import { Bricolage_Grotesque, Karla } from "next/font/google";
import { CONTACT } from "@/lib/contact";
import "./globals.css";

// Direção visual: ver AGENTS.md — paleta pedra/travertino + petróleo,
// Bricolage Grotesque + Karla, motivo facetado autoral.

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.siteUrl),
  title: "Simone Donadeli Camelo | Odontologia em Barretos-SP",
  description:
    "Clínico-geral, implantes dentários, harmonização facial e cirurgias com a Dra. Simone Donadeli Camelo (CRO 109-184), em Barretos-SP.",
  openGraph: {
    title: "Simone Donadeli Camelo | Odontologia em Barretos-SP",
    description:
      "Clínico-geral, implantes dentários, harmonização facial e cirurgias com a Dra. Simone Donadeli Camelo (CRO 109-184), em Barretos-SP.",
    url: CONTACT.siteUrl,
    siteName: "Simone Donadeli Camelo Odontologia",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone text-ink-950">
        {children}
      </body>
    </html>
  );
}
