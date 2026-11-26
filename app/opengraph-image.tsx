import { ImageResponse } from "next/og";
import { PROFILE_CONFIG } from "@/content";

export const dynamic = "force-static";

export const alt =
  "Kristian Sollie Pedersen | Fullstack-utvikler, 3D Web & AI-sikkerhet";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0D10",
          padding: "56px 64px",
          color: "#F3F4F6",
          fontFamily: "sans-serif",
          border: "1px solid #222831",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #222831",
            paddingBottom: "20px",
            fontSize: 18,
            color: "#9CA3AF",
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#F59E0B", fontWeight: 700 }}>
            KRISTIAN SOLLIE PEDERSEN
          </span>
          <span>{PROFILE_CONFIG.coordinates}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              maxWidth: "980px",
            }}
          >
            Fullstack-utvikler i skjæringspunktet mellom web, romlig 3D og
            fysisk håndverk.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#9CA3AF",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            AxisOS & Floorplan Studio · AI-sikkerhet · Three.js · Parametrisk CAD
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #222831",
            paddingTop: "22px",
            fontSize: 18,
            color: "#9CA3AF",
            fontFamily: "monospace",
          }}
        >
          <span>Fullstack-utvikler @ AxisOS</span>
          <span>Eidsvoll, Norge</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
