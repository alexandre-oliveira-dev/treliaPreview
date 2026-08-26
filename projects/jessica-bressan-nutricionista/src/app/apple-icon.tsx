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
          background: "#17150f",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 900,
            fontSize: 88,
            color: "#d7ff3d",
          }}
        >
          J
        </span>
      </div>
    ),
    { ...size }
  );
}
