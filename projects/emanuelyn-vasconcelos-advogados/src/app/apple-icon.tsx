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
          background: "#0b0f0e",
        }}
      >
        <span
          style={{
            fontSize: 84,
            fontStyle: "italic",
            color: "#d9b976",
            lineHeight: 1,
          }}
        >
          EV
        </span>
      </div>
    ),
    { ...size }
  );
}
