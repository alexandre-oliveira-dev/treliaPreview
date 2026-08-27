import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/consultorio.jpeg")),
    readFile(join(process.cwd(), "src/assets/petrona-700.ttf")),
    readFile(join(process.cwd(), "src/assets/publicsans-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f4ef",
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
              fontFamily: "PublicSans",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#294438",
            }}
          >
            Barretos · SP
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Petrona",
              fontWeight: 700,
              fontSize: 48,
              lineHeight: 1.1,
              color: "#211f1c",
            }}
          >
            Fernanda Teixeira
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "PublicSans",
              fontSize: 22,
              color: "#4a463f",
            }}
          >
            Cirurgiã-Dentista · Bairro Fortaleza
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
            style={{ objectFit: "cover", objectPosition: "50% 40%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #f7f4ef 0%, rgba(247,244,239,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Petrona",
          data: displayFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "PublicSans",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
