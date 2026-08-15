import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Landscapes, Hardscapes and Pools in Southern California`;

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
          background: "#0f1f1a",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              border: "3px solid #a8874d",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              color: "#efebe1",
              fontSize: 26,
              letterSpacing: 12,
            }}
          >
            NOBLE SAINT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", flexDirection: "column", color: "#efebe1", fontSize: 92, lineHeight: 1.02 }}>
            <div style={{ display: "flex" }}>Landscapes. Hardscapes.</div>
            <div style={{ display: "flex" }}>Pools.</div>
          </div>
          <div style={{ display: "flex", width: 220, height: 2, background: "#a8874d" }} />
          <div style={{ display: "flex", color: "#8ba79b", fontSize: 27, letterSpacing: 1 }}>
            A father-and-son build team · Orange County & Southern California
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#8ba79b", fontSize: 24, letterSpacing: 4 }}>
          <div style={{ display: "flex" }}>FAMILY OWNED SINCE 2004</div>
          <div style={{ display: "flex", color: "#a8874d" }}>{site.contact.phone}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
