import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/lorena-retrato.jpg")),
    readFile(join(process.cwd(), "src/assets/bodoni-moda-700.ttf")),
    readFile(join(process.cwd(), "src/assets/urbanist-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#15161a",
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
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#c9974f",
            }}
          >
            Nutrição Clínica &amp; Bariátrica
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontFamily: "Bodoni Moda",
              fontSize: 68,
              lineHeight: 1.05,
              color: "#f4efe6",
            }}
          >
            <span>Lorena Rosa</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: 22,
              color: "#d9d2c3",
            }}
          >
            Emagrecer comendo o básico · Belo Horizonte
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
            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #15161a 0%, rgba(21,22,26,0) 18%)",
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
          style: "normal",
          weight: 700,
        },
        {
          name: "Urbanist",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
