import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/portrait.jpg")),
    readFile(join(process.cwd(), "src/assets/instrument-serif-italic.ttf")),
    readFile(join(process.cwd(), "src/assets/sora-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8f6fb",
        }}
      >
        <div
          style={{
            width: "46%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 56px",
          }}
        >
          <div
            style={{
              fontFamily: "Sora",
              fontSize: 20,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#c93868",
            }}
          >
            Vila Belmiro · Santos, SP
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 58,
              lineHeight: 1.15,
              color: "#241b32",
            }}
          >
            Gabriela Fordelone
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "Sora",
              fontSize: 26,
              color: "#5b4f74",
            }}
          >
            Cirurgiã-Dentista
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "54%",
            height: "100%",
            display: "flex",
          }}
        >
          <img
            src={photoSrc}
            width={648}
            height={630}
            alt=""
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #f8f6fb 0%, rgba(248,246,251,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: displayFontData,
          style: "italic",
          weight: 400,
        },
        {
          name: "Sora",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
