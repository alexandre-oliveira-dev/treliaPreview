import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/escritorio-skyline.jpg")),
    readFile(join(process.cwd(), "src/assets/bebas-neue-700.ttf")),
    readFile(join(process.cwd(), "src/assets/plus-jakarta-sans-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#17181c",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
          }}
        >
          <img
            src={photoSrc}
            width={1200}
            height={630}
            alt=""
            style={{ objectFit: "cover", opacity: 0.55 }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, #17181c 0%, #17181c 38%, rgba(23,24,28,0.35) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: "0 60px",
            maxWidth: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#ff5a1f",
            }}
          >
            Nutricionista Esportivo
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 16,
              fontFamily: "Bebas Neue",
              fontSize: 84,
              lineHeight: 0.98,
              letterSpacing: 1,
              color: "#f5f5f2",
            }}
          >
            <span>VICTOR PIMENTA</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              fontSize: 22,
              color: "#d3d4d6",
            }}
          >
            Dietas simples, sem frescura · Belo Horizonte
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bebas Neue",
          data: displayFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Plus Jakarta Sans",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
