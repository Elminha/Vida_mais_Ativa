// src/services/api.js
export async function getMonitoramento() {
  const res = await fetch("http://localhost:3001/api/monitoramento");
  if (!res.ok) throw new Error("Falha ao buscar monitoramento");
  return res.json();
}

