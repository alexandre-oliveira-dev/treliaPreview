import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/jessica-retrato.jpg")),
    readFile(join(process.cwd(), "src/assets/gloock-400.ttf")),
    readFile(join(process.cwd(), "src/assets/onest-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f5efe2",
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
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a97b23",
            }}
          >
            Nutrição · Curitiba
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontFamily: "Gloock",
              fontSize: 66,
              lineHeight: 1.05,
              color: "#251d15",
            }}
          >
            <span>Jéssica Dias</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Onest",
              fontWeight: 700,
              fontSize: 21,
              color: "#453626",
            }}
          >
            Transformando vidas através da alimentação
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
            style={{ objectFit: "cover", objectPosition: "55% 12%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #f5efe2 0%, rgba(245,239,226,0) 16%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Gloock",
          data: displayFontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Onest",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
