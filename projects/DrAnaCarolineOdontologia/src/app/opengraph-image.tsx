import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #fdf6f3 0%, #f7e9e3 45%, #edd3c7 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={220} height={220} alt="" />
        <div
          style={{
            marginTop: 12,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 64,
            color: "#4a342c",
          }}
        >
          Ana Caroline Farias
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8a5f4d",
          }}
        >
          Cirurgiã-Dentista · Goiânia
        </div>
      </div>
    ),
    { ...size }
  );
}
