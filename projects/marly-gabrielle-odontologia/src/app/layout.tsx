import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import { CONTACT } from "@/lib/contact";
import "./globals.css";

// Direção visual: ver AGENTS.md — paleta papel/índigo-marinho + coral,
// Space Grotesk + IBM Plex Sans, motivo de assinatura "diagrama técnico"
// (sem fotografia: não há foto profissional real disponível para este lead).

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.siteUrl),
  title: "Marly Cital & Gabrielle Brianêz | Odontologia em Barretos-SP",
  description:
    "Consultório odontológico das Dras. Marly Caroline P.Z.Cital e Gabrielle Taveira Brianêz (Endodontia, CROSP 119.595), no bairro Aeroporto, Barretos-SP.",
  openGraph: {
    title: "Marly Cital & Gabrielle Brianêz | Odontologia em Barretos-SP",
    description:
      "Consultório odontológico das Dras. Marly Caroline P.Z.Cital e Gabrielle Taveira Brianêz (Endodontia, CROSP 119.595), no bairro Aeroporto, Barretos-SP.",
    url: CONTACT.siteUrl,
    siteName: CONTACT.clinicName,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
