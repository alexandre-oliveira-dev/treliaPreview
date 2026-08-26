import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2E4B3C",
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24" fill="#FF7A45">
          <path d="M12 21s-7.5-4.6-10.2-9.3C.4 8.9 1.6 5 5.2 4.1c2-.5 4 .3 5.2 2 .3.4.9.4 1.2 0 1.2-1.7 3.2-2.5 5.2-2 3.6.9 4.8 4.8 3.4 7.6C19.5 16.4 12 21 12 21z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
