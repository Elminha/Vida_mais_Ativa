// src/components/Layout.jsx
import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "#4CAF50", padding: 12, color: "#fff", borderRadius: 6 }}>
        <h1 style={{ margin: 0 }}>Vida+Ativa</h1>
      </header>

      <main style={{ marginTop: 20 }}>
        {children}
      </main>

      <footer style={{ marginTop: 30, textAlign: "center", opacity: 0.7 }}>
        Protótipo - dados simulados
      </footer>
    </div>
  );
}
