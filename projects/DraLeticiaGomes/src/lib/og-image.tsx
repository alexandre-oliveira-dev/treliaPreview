import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function renderShareImage() {
  const photoData = await readFile(
    join(process.cwd(), "public/leticia-gomes-hero.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c1b1d",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "58%",
            padding: "72px 64px",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 120 120" fill="none">
            <path
              d="M22 18 V90 H70"
              stroke="#d98857"
              strokeWidth="10"
              strokeLinecap="square"
            />
            <path
              d="M98 34 V60 A32 32 0 1 1 66 28 H86"
              stroke="#d98857"
              strokeWidth="10"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              marginTop: 28,
              fontSize: 20,
              letterSpacing: 6,
              color: "#d98857",
              textTransform: "uppercase",
            }}
          >
            Direito de Família &amp; Sucessões
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 58,
              lineHeight: 1.15,
              color: "#faf6ee",
              fontStyle: "italic",
            }}
          >
            Letícia Gomes Advocacia
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              color: "#e6d9c4",
            }}
          >
            Santos/SP — atendimento presencial ou online
          </div>
        </div>

        <div
          style={{
            width: "42%",
            height: "100%",
            display: "flex",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={504}
            height={630}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
