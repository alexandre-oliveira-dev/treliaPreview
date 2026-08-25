import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/dra-jessica-retrato.jpeg")),
    readFile(join(process.cwd(), "src/assets/fraunces-500italic.ttf")),
    readFile(join(process.cwd(), "src/assets/nunito-sans-700.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#faf3ea",
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
              fontFamily: "Nunito Sans",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#b1552f",
            }}
          >
            Xaxim · Curitiba, PR
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 56,
              lineHeight: 1.1,
              color: "#241d16",
            }}
          >
            Odontologia Rivera
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "Nunito Sans",
              fontWeight: 700,
              fontSize: 22,
              color: "#4d3d2a",
            }}
          >
            Dra. Jessica Rivera de Melo · CRO/PR 25.539
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
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #faf3ea 0%, rgba(250,243,234,0) 18%)",
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
          weight: 500,
        },
        {
          name: "Nunito Sans",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
