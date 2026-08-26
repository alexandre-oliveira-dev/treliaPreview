import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/flavia-retrato.jpg")),
    readFile(join(process.cwd(), "src/assets/oswald-700.ttf")),
    readFile(join(process.cwd(), "src/assets/manrope-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b2626",
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
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#b5713b",
            }}
          >
            Nutrição Esportiva
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontFamily: "Oswald",
              fontSize: 62,
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: "#f2ede4",
            }}
          >
            <span>Flavia Godoy</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: 22,
              color: "#e2dacb",
            }}
          >
            Há 20 anos transformando vidas · Belo Horizonte
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
            style={{ objectFit: "cover", objectPosition: "50% 25%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #0b2626 0%, rgba(11,38,38,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Oswald",
          data: displayFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Manrope",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
