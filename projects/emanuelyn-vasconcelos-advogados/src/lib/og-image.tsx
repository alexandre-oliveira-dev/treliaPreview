import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function renderShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b0f0e",
          padding: "80px 88px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 6,
            color: "#d9b976",
            textTransform: "uppercase",
          }}
        >
          Direito Bancário &amp; Defesa do Consumidor
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            fontSize: 60,
            lineHeight: 1.15,
            color: "#f3f1ea",
            fontStyle: "italic",
          }}
        >
          Emanuelyn Vasconcelos Advogados
        </div>
        <div
          style={{
            marginTop: 16,
            width: 120,
            height: 4,
            background: "#b6903f",
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#c9c4b6",
          }}
        >
          Defesa estratégica contra práticas abusivas de bancos e financeiras
        </div>
      </div>
    ),
    { ...size }
  );
}
