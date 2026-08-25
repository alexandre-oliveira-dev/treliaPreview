import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/retrato-vitor.png")),
    readFile(join(process.cwd(), "src/assets/bricolage-grotesque-700.ttf")),
    readFile(join(process.cwd(), "src/assets/dm-sans-700.ttf")),
  ]);
  const photoSrc = `data:image/png;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f2e6",
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
              fontFamily: "DM Sans",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#e05a3b",
            }}
          >
            Bela Vista · São Paulo
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Bricolage",
              fontWeight: 700,
              fontSize: 54,
              lineHeight: 1.08,
              color: "#1b1710",
            }}
          >
            Vitor Oliveira
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "DM Sans",
              fontSize: 23,
              color: "#4a4038",
            }}
          >
            Nutricionista · Metabolismo e emagrecimento
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
            style={{ objectFit: "cover", objectPosition: "50% 18%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #f7f2e6 0%, rgba(247,242,230,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bricolage",
          data: displayFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "DM Sans",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
