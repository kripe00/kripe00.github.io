import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
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
          background: "#0B0D10",
          border: "1px solid #323B49",
          color: "#F59E0B",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "monospace",
        }}
      >
        KS
      </div>
    ),
    {
      ...size,
    }
  );
}
