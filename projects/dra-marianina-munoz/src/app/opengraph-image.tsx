import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/portrait.jpg")),
    readFile(join(process.cwd(), "src/assets/cormorant-italic.ttf")),
    readFile(join(process.cwd(), "src/assets/montserrat-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbf6f0",
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
              fontFamily: "Montserrat",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#b8894f",
            }}
          >
            Capão Raso · Curitiba, PR
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Cormorant",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 60,
              lineHeight: 1.1,
              color: "#1b1712",
            }}
          >
            Marianina Muñoz
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "Montserrat",
              fontSize: 24,
              color: "#5a4f3f",
            }}
          >
            Odontologia 24h · 23 anos de experiência
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
            style={{ objectFit: "cover", objectPosition: "50% 15%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #fbf6f0 0%, rgba(251,246,240,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant",
          data: displayFontData,
          style: "italic",
          weight: 400,
        },
        {
          name: "Montserrat",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
