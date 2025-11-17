import React from "react";

export default function MainLayout({ children }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "20px" }}>
        <h2>Vida+Ativa - Monitoramento</h2>
      </header>

      {/* Aqui entram as telas (páginas) */}
      <main>{children}</main>

      <footer style={{ marginTop: "30px", fontSize: "12px", color: "#666" }}>
        © 2025 Vida+Ativa
      </footer>
    </div>
  );
}
