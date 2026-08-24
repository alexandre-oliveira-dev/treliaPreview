import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
            "linear-gradient(135deg, #f7f2e6 0%, #efe4cd 55%, #d8ebe4 100%)",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 68,
            color: "#12302c",
          }}
        >
          Emanuelle Morais
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e2572f",
          }}
        >
          Cirurgiã-Dentista · Santos, SP
        </div>
      </div>
    ),
    { ...size }
  );
}
