import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Nutrindo por Amor | Nutrição e Psicologia Infantil em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, fontBold, fontSemibold] = await Promise.all([
    readFile(join(process.cwd(), "public/images/nutri-fichas-alimentares.jpg")),
    readFile(join(process.cwd(), "src/app/fonts/Baloo2-700.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/Figtree-600.ttf")),
  ]);
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "#FFF3E6",
          position: "relative",
        }}
      >
        <svg
          width="520"
          height="520"
          viewBox="0 0 400 400"
          style={{ position: "absolute", right: -140, top: -140 }}
        >
          <circle cx="200" cy="200" r="180" fill="#2E4B3C" opacity="0.08" />
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 72px",
            width: "56%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontFamily: "Figtree600",
              color: "#2E4B3C",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            Nutrição + Psicologia Infantil
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 46,
              fontFamily: "Baloo700",
              color: "#33201A",
              lineHeight: 1.15,
            }}
          >
            <span>A hora da comida</span>
            <span>vira um momento</span>
            <span style={{ display: "flex" }}>
              <span>de&nbsp;</span>
              <span style={{ color: "#FF7A45" }}>amor</span>
              <span>.</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontFamily: "Figtree600",
              color: "#33201A",
              opacity: 0.65,
              marginTop: 26,
            }}
          >
            Nutrindo por Amor · Curitiba
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "44%",
            height: "100%",
            position: "relative",
          }}
        >
          <img
            src={photoBase64}
            alt=""
            width={528}
            height={630}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(255,243,230,0.9) 0%, rgba(255,243,230,0) 22%)",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Baloo700", data: fontBold, weight: 700, style: "normal" },
        { name: "Figtree600", data: fontSemibold, weight: 600, style: "normal" },
      ],
    }
  );
}
