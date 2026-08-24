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
              fontSize: 108,
              fontStyle: "italic",
              color: "#edeee6",
              lineHeight: 1,
            }}
          >
            S
          </span>
          <svg width="100" height="20" viewBox="0 0 340 24" fill="none">
            <path
              d="M4 16 C 70 22, 130 6, 170 12 S 280 20, 336 9"
              stroke="#8b4058"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
