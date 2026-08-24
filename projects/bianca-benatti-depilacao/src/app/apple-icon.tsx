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
          background: "#2c2016",
        }}
      >
        <span
          style={{
            fontSize: 78,
            fontWeight: 600,
            fontFamily: "serif",
            lineHeight: 1,
            display: "flex",
            color: "#cfab6f",
          }}
        >
          BB
        </span>
      </div>
    ),
    { ...size }
  );
}
