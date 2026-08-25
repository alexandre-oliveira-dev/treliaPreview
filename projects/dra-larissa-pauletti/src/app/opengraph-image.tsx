import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/procedimento.jpg")),
    readFile(join(process.cwd(), "src/assets/fraunces-600-italic.ttf")),
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
          background: "#faf6f1",
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
              fontFamily: "Inter",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#c1502e",
            }}
          >
            Sorocaba · SP
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 56,
              lineHeight: 1.1,
              color: "#2a211b",
            }}
          >
            Larissa Pauletti
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "Inter",
              fontSize: 24,
              color: "#6b584c",
            }}
          >
            Especialista em extração de siso
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
            style={{ objectFit: "cover", objectPosition: "50% 30%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #faf6f1 0%, rgba(250,246,241,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: displayFontData,
          style: "italic",
          weight: 600,
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
