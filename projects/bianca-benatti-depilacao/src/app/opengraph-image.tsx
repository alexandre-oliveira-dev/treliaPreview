import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bianca Benatti Depilação - Estúdio de Depilação";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 90px",
          background: "#fbf6ef",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(173,138,83,0.18)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            fontWeight: 600,
            color: "#8a6c3f",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Sapopemba · São Paulo
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            fontFamily: "serif",
            lineHeight: 1.05,
            marginTop: 20,
            color: "#2c2016",
          }}
        >
          Bianca Benatti
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontFamily: "serif",
            fontStyle: "italic",
            color: "#ad8a53",
            marginTop: 4,
          }}
        >
          Depilação
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "rgba(44,32,22,0.75)",
            maxWidth: 820,
          }}
        >
          Depilação a cera com cuidado, técnica e acolhimento
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 26,
            fontWeight: 600,
            color: "#fbf6ef",
            background: "#2c2016",
            padding: "16px 34px",
            borderRadius: 999,
          }}
        >
          Agende pelo WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}
