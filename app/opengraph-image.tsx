import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f5f4",
          color: "#1d191d",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", width: 72, height: 6, background: "#3e4336" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 40, marginTop: 28, color: "#7a6b5e", maxWidth: 900 }}>
            Human-centered, technology-enabled solutions for SMEs and sustainable mobility.
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#7a6b5e" }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
