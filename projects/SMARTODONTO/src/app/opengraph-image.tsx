import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Smartodonto - A sua clínica odontológica em Goiânia";

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
          background: "#16232f",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(244,121,29,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 30,
            fontWeight: 700,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Goiânia · GO
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 800,
            fontFamily: "sans-serif",
            lineHeight: 1,
            marginTop: 18,
          }}
        >
          <span style={{ color: "#ffffff" }}>Smart</span>
          <span style={{ color: "#f4791d" }}>odonto</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 36,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 780,
          }}
        >
          A sua clínica odontológica em Goiânia
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 46,
            fontSize: 26,
            fontWeight: 600,
            color: "#16232f",
            background: "#f4791d",
            padding: "16px 34px",
            borderRadius: 999,
          }}
        >
          Agende sua avaliação pelo WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}
