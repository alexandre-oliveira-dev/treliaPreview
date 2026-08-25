import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/retrato-dra-alessandra.jpg")),
    readFile(join(process.cwd(), "public/fonts/Cormorant-SemiBold.ttf")),
    readFile(join(process.cwd(), "public/fonts/Manrope-Bold.ttf")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbf3f5",
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
              fontFamily: "Manrope",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#8c3a4b",
            }}
          >
            Sorocaba · SP
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Cormorant",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 54,
              lineHeight: 1.1,
              color: "#241b22",
            }}
          >
            Alessandra Todesco
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "Manrope",
              fontSize: 22,
              color: "#5a4a51",
            }}
          >
            Ortodontia · Endodontia
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
                "linear-gradient(90deg, #fbf3f5 0%, rgba(251,243,245,0) 18%)",
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
          weight: 600,
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
