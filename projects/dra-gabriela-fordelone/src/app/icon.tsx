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
          background: "#ee4f81",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 18,
            color: "#f8f6fb",
          }}
        >
          Gf
        </span>
      </div>
    ),
    { ...size }
  );
}
