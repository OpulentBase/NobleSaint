import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon drawn in code: brass halo over a horizon, on cypress.
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
          background: "#0f1f1a",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            border: "3px solid #a8874d",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 17,
            width: 44,
            height: 3,
            background: "#a8874d",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
