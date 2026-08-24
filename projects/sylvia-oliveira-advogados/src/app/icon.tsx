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
          background: "#2a2130",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontStyle: "italic",
              color: "#edeee6",
              lineHeight: 1,
            }}
          >
            S
          </span>
          <svg width="18" height="6" viewBox="0 0 340 24" fill="none">
            <path
              d="M4 16 C 70 22, 130 6, 170 12 S 280 20, 336 9"
              stroke="#8b4058"
              strokeWidth="26"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
