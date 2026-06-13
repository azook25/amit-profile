import { ImageResponse } from "next/og";

export const alt = "Amit Zuker basketball player profile preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#090b10",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(135deg, #090b10 0%, #111827 48%, #1d2636 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -90,
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "34px solid rgba(245, 158, 11, 0.28)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: -210,
            width: 760,
            height: 760,
            borderRadius: "50%",
            border: "3px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 70,
            bottom: 70,
            width: 1060,
            height: 2,
            background:
              "linear-gradient(90deg, #2563eb 0%, #f59e0b 45%, rgba(255,255,255,0) 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "76px 84px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#fbbf24",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            <span>Israeli National League</span>
          </div>
          <div
            style={{
              marginTop: 34,
              display: "flex",
              fontSize: 108,
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: 0,
            }}
          >
            AMIT ZUKER
          </div>
          <div
            style={{
              marginTop: 30,
              display: "flex",
              color: "#dbeafe",
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            6&apos;4&quot; PG / SG
          </div>
          <div
            style={{
              marginTop: 48,
              display: "flex",
              color: "#e5e7eb",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            Highlights • Stats • Full Games
          </div>
        </div>
      </div>
    ),
    size,
  );
}
