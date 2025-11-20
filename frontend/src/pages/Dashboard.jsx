import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [history, setHistory] = useState([]);

  // Busca dados simulados do backend
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3001/mock-health")
        .then((res) => res.json())
        .then((data) => {
          setHistory((prev) => [...prev, data].slice(-20)); // mantém só os últimos 20 pontos
        })
        .catch((err) => console.error("Erro ao buscar dados:", err));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const last = history[history.length - 1];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Dashboard — Monitoramento</h2>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={card}>
          <h3>😴 Sono</h3>
          <p style={valor}>{last?.sleep ?? "--"} h</p>
        </div>

        <div style={card}>
          <h3>😊 Humor</h3>
          <p style={valor}>{last?.mood ?? "--"}/10</p>
        </div>

        <div style={card}>
          <h3>❤️ Batimentos</h3>
          <p style={valor}>{last?.heartRate ?? "--"} bpm</p>
        </div>

        <div style={card}>
          <h3>👣 Passos</h3>
          <p style={valor}>{last?.steps ?? "--"}</p>
        </div>

        <div style={card}>
          <h3>🏃 Atividade física</h3>
          <p style={valor}>{last?.activity ?? "--"} min</p>
        </div>
      </div>

      {/* GRÁFICO PRINCIPAL */}
      <h3>Gráfico — Batimentos Cardíacos</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="heartRate" stroke="#ff4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Estilos
const card = {
  padding: "20px",
  background: "#f4f4f4",
  borderRadius: "12px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const valor = {
  fontSize: "32px",
  margin: 0,
  fontWeight: "bold",
};
