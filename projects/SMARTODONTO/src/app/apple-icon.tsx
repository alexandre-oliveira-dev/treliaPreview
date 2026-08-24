import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16232f",
        }}
      >
        <span
          style={{
            fontSize: 92,
            fontWeight: 800,
            fontFamily: "sans-serif",
            lineHeight: 1,
            display: "flex",
          }}
        >
          <span style={{ color: "#ffffff" }}>S</span>
          <span style={{ color: "#f4791d" }}>o</span>
        </span>
      </div>
    ),
    { ...size }
  );
}
