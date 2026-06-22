import { ImageResponse } from "next/og";
import { CLINIC } from "@/lib/clinic";

export const runtime = "edge";
export const alt = `${CLINIC.name} - Multi-specialty clinic in Deoria`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0e7c66 0%, #0a5b4b 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "white",
              color: "#0e7c66",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>{CLINIC.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
            Trusted Multi-Specialty Care
          </div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>
            Salempur-Mairwa, Deoria · UP-Bihar Border
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 22, opacity: 0.85 }}>
            In-Clinic & Video Consultation · 24x7 Emergency
          </div>
          <div
            style={{
              background: "#f59e0b",
              color: "#111",
              padding: "10px 22px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Friday: Free Consultation
          </div>
        </div>
      </div>
    ),
    size
  );
}
