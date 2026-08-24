import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/portrait-hero-v2.jpg")),
    readFile(join(process.cwd(), "src/assets/bodoni-italic.ttf")),
    readFile(join(process.cwd(), "src/assets/jakarta-600.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbf8f0",
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
              fontFamily: "Jakarta",
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#ea6a43",
            }}
          >
            Boqueirão · Santos, SP
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Bodoni Moda",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 60,
              lineHeight: 1.15,
              color: "#1a3733",
            }}
          >
            Emanuelle Morais
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "Jakarta",
              fontSize: 28,
              color: "#43746a",
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={648}
            height={630}
            alt=""
            style={{ objectFit: "cover", objectPosition: "62% 18%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #fbf8f0 0%, rgba(251,248,240,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bodoni Moda",
          data: displayFontData,
          style: "italic",
          weight: 400,
        },
        {
          name: "Jakarta",
          data: bodyFontData,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
