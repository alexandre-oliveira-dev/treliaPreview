import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/debora-retrato.jpg")),
    readFile(join(process.cwd(), "src/assets/anton-400.ttf")),
    readFile(join(process.cwd(), "src/assets/inter-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8f0da",
        }}
      >
        <div
          style={{
            width: "54%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#b23f1f",
            }}
          >
            Nutrição Clínica &amp; Metabólica
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontFamily: "Anton",
              fontSize: 72,
              lineHeight: 0.95,
              textTransform: "uppercase",
              color: "#241c13",
            }}
          >
            <span>Débora</span>
            <span>Mocelin</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: 22,
              color: "#453722",
            }}
          >
            Campeã Brasileira de Fisiculturismo Natural · Curitiba
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "46%",
            height: "100%",
            display: "flex",
          }}
        >
          <img
            src={photoSrc}
            width={552}
            height={630}
            alt=""
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #f8f0da 0%, rgba(248,240,218,0) 16%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Anton",
          data: displayFontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
