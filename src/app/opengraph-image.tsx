import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Francisco Roque — Senior Quality Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.4em",
            textTransform: "uppercase" as const,
            color: "#3b82f6",
            marginBottom: 32,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: 16,
          }}
        >
          FRANCISCO
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#3b82f6",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: 48,
          }}
        >
          ROQUE
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a3a3a3",
            lineHeight: 1.6,
          }}
        >
          Senior Quality Engineer &bull; Test Automation &bull; Performance Engineering
        </div>
      </div>
    ),
    { ...size },
  );
}
