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
          background: "#0c1b1d",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 120 120" fill="none">
          <path
            d="M22 18 V90 H70"
            stroke="#d98857"
            strokeWidth="12"
            strokeLinecap="square"
          />
          <path
            d="M98 34 V60 A32 32 0 1 1 66 28 H86"
            stroke="#d98857"
            strokeWidth="12"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
