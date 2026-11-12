"use client";
import React, { useState } from "react";

export default function QueenCommandCenter() {
  const [status] = useState("ACTIVE");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0b0f19", color: "#f8fafc", padding: "32px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e293b", paddingBottom: "20px", marginBottom: "28px" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px 0", background: "linear-gradient(90deg, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            👑 QUEEN COMMAND CENTER 3.8
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>
            FlashProm-Studio-2 • ระบบควบคุมอัตโนมัติ (n8n + Google Sheets + LINE Messaging API)
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#064e3b", color: "#34d399", padding: "8px 16px", borderRadius: "999px", fontWeight: "bold", fontSize: "14px" }}>
            <span style={{ width: "10px", height: "10px", backgroundColor: "#10b981", borderRadius: "50%", display: "inline-block" }}></span>
            SYSTEM {status}
          </div>
          <p style={{ color: "#64748b", fontSize: "12px", marginTop: "6px" }}>Operator: คุณโอ (pramotechu-ops)</p>
        </div>
      </div>

      {/* Status Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "28px" }}>
        <div style={{ backgroundColor: "#111827", border: "1px solid #1e293b", borderRadius: "12px", padding: "20px" }}>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "8px" }}>⚙️ n8n Automation Engine</div>
          <div style={{ fontSize: "22px", fontWeight: "bold", color: "#38bdf8" }}>Port 5678 / 5679</div>
          <div style={{ color: "#10b981", fontSize: "12px", marginTop: "8px" }}>● Docker Container Online</div>
        </div>

        <div style={{ backgroundColor: "#111827", border: "1px solid #1e293b", borderRadius: "12px", padding: "20px" }}>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "8px" }}>📊 Google Sheets Sync</div>
          <div style={{ fontSize: "18px", fontWeight: "bold", color: "#fbbf24", wordBreak: "break-all" }}>10TMyoXAtm3-D0F...</div>
          <div style={{ color: "#10b981", fontSize: "12px", marginTop: "8px" }}>● Travel Route Connected</div>
        </div>

        <div style={{ backgroundColor: "#111827", border: "1px solid #1e293b", borderRadius: "12px", padding: "20px" }}>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "8px" }}>💬 LINE Messaging API</div>
          <div style={{ fontSize: "22px", fontWeight: "bold", color: "#4ade80" }}>Flex Alert Ready</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>Webhook: /api/sync-travel</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ backgroundColor: "#111827", border: "1px solid #1e293b", borderRadius: "12px", padding: "24px" }}>
        <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "16px", color: "#f8fafc" }}>🚀 แผงควบคุมด่วน (Quick Links)</h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="http://localhost:5678" target="_blank" rel="noreferrer" style={{ backgroundColor: "#ea580c", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>
            เปิด n8n (Port 5678)
          </a>
          <a href="http://localhost:5679" target="_blank" rel="noreferrer" style={{ backgroundColor: "#0284c7", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>
            เปิด n8n (Port 5679)
          </a>
          <a href="https://docs.google.com/spreadsheets/d/10TMyoXAtm3-D0F-c5HgoR63Cc5Hm6CV1/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ backgroundColor: "#16a34a", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>
            เปิด Google Sheets
          </a>
          <a href="https://github.com/pramotechu-ops/FlashProm-Studio-2" target="_blank" rel="noreferrer" style={{ backgroundColor: "#334155", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>
            เปิด GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
