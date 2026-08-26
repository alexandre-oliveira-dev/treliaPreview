import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Murilo Trofino | Nutricionista Esportivo em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photoData, fontBold, fontSemibold] = await Promise.all([
    readFile(join(process.cwd(), "public/images/murilo-trofino.jpeg")),
    readFile(join(process.cwd(), "src/app/fonts/SpaceGrotesk-700.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/SpaceGrotesk-600.ttf")),
  ]);
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "#17181C",
          position: "relative",
        }}
      >
        {/* Anéis decorativos */}
        <svg
          width="620"
          height="620"
          viewBox="0 0 400 400"
          style={{ position: "absolute", left: -80, top: -60 }}
        >
          <circle
            cx="200"
            cy="200"
            r="170"
            stroke="#FF6A3D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="760 1200"
            fill="none"
            transform="rotate(-40 200 200)"
          />
          <circle
            cx="200"
            cy="200"
            r="130"
            stroke="#7FA69B"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="560 900"
            fill="none"
            transform="rotate(120 200 200)"
          />
        </svg>

        {/* Texto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 80px",
            width: "62%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontFamily: "SpaceGrotesk600",
              color: "#FF6A3D",
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Nutrição Esportiva · Curitiba
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontFamily: "SpaceGrotesk700",
              color: "#F4F2EC",
              lineHeight: 1.08,
              letterSpacing: -1,
            }}
          >
            <span>Comida de verdade,</span>
            <span style={{ color: "#FF6A3D" }}>performance real.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontFamily: "SpaceGrotesk600",
              color: "#9B9CA6",
              marginTop: 28,
            }}
          >
            Murilo Trofino, Nutricionista
          </div>
        </div>

        {/* Foto */}
        <div
          style={{
            display: "flex",
            width: "38%",
            height: "100%",
            position: "relative",
          }}
        >
          <img
            src={photoBase64}
            alt=""
            width={456}
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
                "linear-gradient(90deg, rgba(23,24,28,0.85) 0%, rgba(23,24,28,0) 30%)",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "SpaceGrotesk700", data: fontBold, weight: 700, style: "normal" },
        {
          name: "SpaceGrotesk600",
          data: fontSemibold,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
