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
          background: "#251d15",
          borderRadius: "6% 94% 92% 8%",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: 18,
            color: "#d7a544",
          }}
        >
          j
        </span>
      </div>
    ),
    { ...size }
  );
}
