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
          background: "#17150f",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 900,
            fontSize: 18,
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
