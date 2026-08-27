import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, displayFontData, bodyFontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/nancy-retrato.jpg")),
    readFile(join(process.cwd(), "src/assets/italiana-400.woff")),
    readFile(join(process.cwd(), "src/assets/figtree-700.woff")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#241726",
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
              fontFamily: "Figtree",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#b98a80",
            }}
          >
            Nutrição · Especialista em SOP
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontFamily: "Italiana",
              fontSize: 64,
              lineHeight: 1.1,
              color: "#f7f4f1",
            }}
          >
            <span>Nancy Drumond</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Figtree",
              fontWeight: 700,
              fontSize: 22,
              color: "#ded9e3",
            }}
          >
            Destrave seu emagrecimento com SOP · Belo Horizonte
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
                "linear-gradient(90deg, #241726 0%, rgba(36,23,38,0) 18%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Italiana",
          data: displayFontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Figtree",
          data: bodyFontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
