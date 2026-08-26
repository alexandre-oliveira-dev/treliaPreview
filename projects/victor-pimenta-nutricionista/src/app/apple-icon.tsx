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
          background: "#17181c",
        }}
      >
        <span
          style={{
            fontFamily: "Arial Black, sans-serif",
            fontWeight: 900,
            fontSize: 88,
            color: "#ff5a1f",
          }}
        >
          V
        </span>
      </div>
    ),
    { ...size }
  );
}
