import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, monoFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/espaco-recepcao.jpg")),
    readFile(join(process.cwd(), "src/assets/archivo-black-400.ttf")),
    readFile(join(process.cwd(), "src/assets/space-mono-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#17150f",
        }}
      >
        <div
          style={{
            width: "48%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 56px",
          }}
        >
          <div
            style={{
              fontFamily: "Space Mono",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#d7ff3d",
            }}
          >
            Curitiba · PR
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontFamily: "Archivo Black",
              fontSize: 52,
              lineHeight: 1.05,
              color: "#f6f1e4",
            }}
          >
            <span>Emagrecimento</span>
            <span>sem firula.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Space Mono",
              fontSize: 20,
              color: "#f6f1e4",
              opacity: 0.7,
            }}
          >
            Jéssica Bressan · Nutricionista
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "52%",
            height: "100%",
            display: "flex",
          }}
        >
          <img
            src={photoSrc}
            width={624}
            height={630}
            alt=""
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #17150f 0%, rgba(23,21,15,0) 22%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Archivo Black",
          data: displayFontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Space Mono",
          data: monoFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
