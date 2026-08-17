import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Text mark only: the initials, in brass on cypress.
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
          background: "#101c18",
          color: "#a67c3d",
          fontSize: 34,
          letterSpacing: 1,
          fontWeight: 600,
        }}
      >
        NS
      </div>
    ),
    { ...size },
  );
}
