// src/components/Monitoramento.jsx
import React, { useEffect, useState } from "react";
import { getMonitoramento } from "../services/api";

export default function Monitoramento() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        const result = await getMonitoramento();
        if (mounted) setDados(result);
      } catch (err) {
        if (mounted) setErro(err.message);
      } finally {
        if (mounted) setCarregando(false);
      }
    }
    fetchData();
    return () => { mounted = false; };
  }, []);

  if (carregando) return <p>Carregando dados...</p>;
  if (erro) return <p>Erro: {erro}</p>;
  if (!dados) return <p>Nenhum dado disponível</p>;

  return (
    <div style={{ background: "#f9fafb", padding: 16, borderRadius: 8 }}>
      <h2>Monitoramento</h2>
      <p><strong>Batimentos:</strong> {dados.batimentos} bpm</p>
      <p><strong>Passos:</strong> {dados.passos}</p>
      <p><strong>Horas de sono:</strong> {dados.horasSono}</p>
      <p><strong>Humor:</strong> {dados.humor}</p>
      <p><strong>Oxigenação:</strong> {dados.oxigenacao}%</p>
      <p><strong>Temperatura:</strong> {dados.temperatura} °C</p>
      <p><strong>Status:</strong> {dados.status}</p>
    </div>
  );
}