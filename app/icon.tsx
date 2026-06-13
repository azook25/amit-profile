import { ImageResponse } from "next/og";

export const alt = "Amit Zuker";
export const size = {
  width: 64,
  height: 64,
};

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
          background: "#090b10",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 24,
          fontWeight: 900,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "8px solid #f59e0b",
            opacity: 0.72,
            display: "flex",
          }}
        />
        <span style={{ position: "relative" }}>AZ</span>
      </div>
    ),
    size,
  );
}
