import { ImageResponse } from "next/og";

export const alt = "Dariiarts — Independent Art Director & Graphic Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          backgroundColor: "#f8f7f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000000",
            }}
          >
            DARIIART
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.08em",
              color: "#666666",
              textTransform: "uppercase",
            }}
          >
            UK · GLOBAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#000000",
              letterSpacing: "-0.02em",
            }}
          >
            Dariia Chervoniak
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#333333",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Independent Art Director & Graphic Designer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(0, 0, 0, 0.15)",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.05em",
              color: "#555555",
            }}
          >
            Brand Identity · Art Direction · Digital Experiences
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#000000",
            }}
          >
            dariiart.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
