"use client";
import React, { useState } from "react";

const QUEUE = [
  { id: "VID-001", name: "พัดลมพกพา Turbo เจ็ท", net: "TikTok Shop (15%)", hook: "ลมแรงเหมือนพายุ พกตัวเดียวจบ!", status: "READY", gate: "PASSED", rev: "฿4,850" },
  { id: "VID-002", name: "ขาตั้งแม่เหล็ก MagSafe 360°", net: "Shopee Extra (18%)", hook: "สายถ่ายคลิปคนเดียวต้องมี ติดแน่น!", status: "READY", gate: "PASSED", rev: "฿3,420" },
  { id: "VID-003", name: "ไมค์ไร้สายตัดเสียงรบกวน", net: "TikTok Shop (20%)", hook: "ไลฟ์สดกลางตลาดเสียงยังใสกิ๊ง!", status: "RENDERING", gate: "VALIDATING", rev: "฿2,190" },
  { id: "VID-004", name: "ไฟสตูดิโอพกพา RGB", net: "Shopee Extra (16%)", hook: "เปลี่ยนห้องมืดเป็นสตูดิโอใน 3 วิ!", status: "SCRIPTING", gate: "PENDING", rev: "฿1,640" }
];

export default function QueenCommandCenter() {
  const [msg, setMsg] = useState("");
  const testGate = async () => {
    setMsg("⏳ กำลังตรวจ PublishGate...");
    try {
      const r = await fetch("/api/publish-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: "VID-001", productName: "พัดลมพกพา Turbo",
          affiliateUrl: "https://vt.tiktok.com/sample", videoUrl: "https://cdn.flashprom.studio/v1.mp4",
          hookText: "ลมแรงเหมือนพายุ พกตัวเดียวจบ!", platforms: ["TIKTOK", "SHOPEE_VIDEO", "FACEBOOK"]
        })
      });
      const d = await r.json();
      setMsg(d.status === "SUCCESS" ? "✅ ผ่าน PublishGate พร้อมโพสต์ 3 แพลตฟอร์ม!" : "⚠️ ติด Gate: " + d.reason);
    } catch { setMsg("ℹ️ บันทึกคำสั่งแล้ว (รอรันเซิร์ฟเวอร์ Next.js)"); }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0b0f19", color: "#f8fafc", padding: 28, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1e293b", paddingBottom: 16, marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, color: "#fbbf24" }}>👑 QUEEN COMMAND CENTER 3.8</h1>
          <p style={{ color: "#94a3b8", margin: "4px 0 0", fontSize: 14 }}>FlashProm-Studio-2 • Content → Data → Learning → Revenue</p>
        </div>
        <div style={{ background: "#064e3b", color: "#34d399", padding: "8px 16px", borderRadius: 99, fontWeight: "bold", height: "fit-content", fontSize: 13 }}>
          ● FULL AUTOMATION (คุณโอ)
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
        <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: 16 }}>
          <div style={{ color: "#94a3b8", fontSize: 13 }}>💰 รายได้ Affiliate วันนี้</div>
          <div style={{ fontSize: 24, fontWeight: "bold", color: "#4ade80", marginTop: 4 }}>฿12,100 (+24.5%)</div>
        </div>
        <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: 16 }}>
          <div style={{ color: "#94a3b8", fontSize: 13 }}>🎬 คลิปผ่าน PublishGate</div>
          <div style={{ fontSize: 24, fontWeight: "bold", color: "#38bdf8", marginTop: 4 }}>48 / 50 คลิป</div>
        </div>
        <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: 16 }}>
          <div style={{ color: "#94a3b8", fontSize: 13 }}>🔥 Winning Hook CTR</div>
          <div style={{ fontSize: 24, fontWeight: "bold", color: "#fbbf24", marginTop: 4 }}>6.8% (Extra Comm)</div>
        </div>
        <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: 16 }}>
          <div style={{ color: "#94a3b8", fontSize: 13 }}>⚙️ n8n & LINE Alert</div>
          <div style={{ fontSize: 20, fontWeight: "bold", color: "#a78bfa", marginTop: 4 }}>Port 5679 Online</div>
        </div>
      </div>

      <div style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 17, margin: 0 }}>🎬 คิวผลิตวิดีโอ AI & ตรวจสอบคุณภาพ (Video Factory & PublishGate)</h2>
          <button onClick={testGate} style={{ background: "#f97316", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 8, fontWeight: "bold", cursor: "pointer" }}>
            ⚡ ทดสอบ PublishGate
          </button>
        </div>
        {msg && <div style={{ background: "#1e293b", color: "#38bdf8", padding: 10, borderRadius: 8, marginBottom: 12, fontSize: 13 }}>{msg}</div>}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #1e293b", color: "#94a3b8" }}>
              <th style={{ padding: 10 }}>รหัส</th><th>สินค้า Winning Product</th><th>เครือข่าย</th><th>Winning Hook</th><th>สถานะคลิป</th><th>PublishGate</th><th>รายได้</th>
            </tr>
          </thead>
          <tbody>
            {QUEUE.map((q) => (
              <tr key={q.id} style={{ borderBottom: "1px solid #1e293b" }}>
                <td style={{ padding: 12, fontWeight: "bold" }}>{q.id}</td>
                <td>{q.name}</td>
                <td style={{ color: "#f472b6" }}>{q.net}</td>
                <td style={{ color: "#94a3b8" }}>"{q.hook}"</td>
                <td style={{ color: "#38bdf8", fontWeight: "bold" }}>{q.status}</td>
                <td style={{ color: q.gate === "PASSED" ? "#34d399" : "#fbbf24", fontWeight: "bold" }}>{q.gate}</td>
                <td style={{ color: "#4ade80", fontWeight: "bold" }}>{q.rev}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="http://localhost:5679" target="_blank" style={{ background: "#0284c7", color: "#fff", padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: "bold", fontSize: 13 }}>⚙️ เปิด n8n (Port 5679)</a>
        <a href="https://docs.google.com/spreadsheets/d/10TMyoXAtm3-D0F-c5HgoR63Cc5Hm6CV1/edit?usp=sharing" target="_blank" style={{ background: "#16a34a", color: "#fff", padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: "bold", fontSize: 13 }}>📊 เปิด Google Sheets</a>
        <a href="https://github.com/pramotechu-ops/FlashProm-Studio-2" target="_blank" style={{ background: "#334155", color: "#fff", padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: "bold", fontSize: 13 }}>🐙 เปิด GitHub Repo</a>
      </div>
    </div>
  );
}
