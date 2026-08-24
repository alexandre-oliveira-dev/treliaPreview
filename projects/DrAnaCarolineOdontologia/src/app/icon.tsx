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
          background:
            "linear-gradient(135deg, #f7e9e3 0%, #edd3c7 60%, #d8bfa0 100%)",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 20,
            color: "#6b463a",
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
