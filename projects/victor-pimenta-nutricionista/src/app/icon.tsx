import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontFamily: "Arial Black, sans-serif",
            fontWeight: 900,
            fontSize: 18,
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
