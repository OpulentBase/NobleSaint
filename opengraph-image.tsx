import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Landscapes, Hardscapes and Pools in Orange County and Los Angeles`;

// Social card generated at build time. No image files ship with this project.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101c18",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#fbf9f5", fontSize: 28, letterSpacing: 14 }}>
          NOBLE SAINT
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", flexDirection: "column", color: "#fbf9f5", fontSize: 92, lineHeight: 1.02 }}>
            <div style={{ display: "flex" }}>Landscapes. Hardscapes.</div>
            <div style={{ display: "flex" }}>Pools.</div>
          </div>
          <div style={{ display: "flex", width: 220, height: 2, background: "#a67c3d" }} />
          <div style={{ display: "flex", color: "#93a89f", fontSize: 27, letterSpacing: 1 }}>
            A father-and-son build team · Orange County & Los Angeles
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#93a89f", fontSize: 24, letterSpacing: 4 }}>
          <div style={{ display: "flex" }}>FAMILY OWNED SINCE 2004</div>
          <div style={{ display: "flex", color: "#a67c3d" }}>CALL OR TEXT {site.contact.phone}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
