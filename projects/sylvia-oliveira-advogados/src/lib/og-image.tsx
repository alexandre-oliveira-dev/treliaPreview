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
          background: "#2a2130",
          padding: "80px 88px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 6,
            color: "#b06478",
            textTransform: "uppercase",
          }}
        >
          Direito de Família &amp; Cível — Santos/SP
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            fontSize: 64,
            lineHeight: 1.15,
            color: "#edeee6",
            fontStyle: "italic",
          }}
        >
          Sylvia Oliveira Advogados
        </div>
        <svg
          width="360"
          height="24"
          viewBox="0 0 340 24"
          fill="none"
          style={{ marginTop: 8 }}
        >
          <path
            d="M4 16 C 70 22, 130 6, 170 12 S 280 20, 336 9"
            stroke="#8b4058"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#c9bfb2",
          }}
        >
          Atendimento próximo em divórcio, inventário e partilha
        </div>
      </div>
    ),
    { ...size }
  );
}
