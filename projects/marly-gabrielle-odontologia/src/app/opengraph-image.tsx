import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Sem foto: não há fotografia profissional real disponível para este lead
// (ver AGENTS.md). Preview 100% tipográfico/gráfico, no mesmo vocabulário
// "diagrama técnico" do site.
export default async function OpengraphImage() {
  const [displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/space-grotesk-700.ttf")),
    readFile(join(process.cwd(), "src/assets/plex-sans-500.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f7f4ee",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Plex",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c24327",
          }}
        >
          Barretos · SP
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontFamily: "Grotesk",
            fontWeight: 700,
            fontSize: 58,
            lineHeight: 1.15,
            color: "#16213a",
          }}
        >
          Marly Cital &amp; Gabrielle Brianêz
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontFamily: "Plex",
            fontSize: 26,
            color: "#33415e",
          }}
        >
          Odontologia · Endodontia
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            width: 140,
            height: 4,
            background: "#e8593a",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Grotesk", data: displayFontData, style: "normal", weight: 700 },
        { name: "Plex", data: bodyFontData, style: "normal", weight: 500 },
      ],
    }
  );
}
