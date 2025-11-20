import React from "react";

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#4CAF50",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Vida+Ativa — Monitoramento</h1>
      </header>

      <main>{children}</main>

      <footer
        style={{
          marginTop: "30px",
          padding: "10px",
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
        }}
      >
        © 2025 — Projeto Vida+Ativa
      </footer>
    </div>
  );
}
