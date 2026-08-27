import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/simone-retrato.png")),
    readFile(join(process.cwd(), "src/assets/bricolage-700.ttf")),
    readFile(join(process.cwd(), "src/assets/karla-700.ttf")),
  ]);
  const photoSrc = `data:image/png;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#efe7da",
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
              fontFamily: "Karla",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#1f5f58",
            }}
          >
            Barretos · SP
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Bricolage",
              fontWeight: 700,
              fontSize: 50,
              lineHeight: 1.1,
              color: "#211e19",
            }}
          >
            Simone Donadeli
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontFamily: "Karla",
              fontSize: 24,
              color: "#464036",
            }}
          >
            Odontologia · Harmonização facial
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
                "linear-gradient(90deg, #efe7da 0%, rgba(239,231,218,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bricolage",
          data: displayFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Karla",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
