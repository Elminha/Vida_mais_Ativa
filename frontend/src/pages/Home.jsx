import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/mock-health")
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <MainLayout>
      <h3>Dados simulados do smartwatch</h3>

      {dados ? (
        <div>
          <p>❤️ Frequência cardíaca: {dados.heartRate}</p>
          <p>👣 Passos: {dados.steps}</p>
          <p>🌡️ Temperatura: {dados.temperature}°C</p>
          <p>🩸 Oxigenação: {dados.spo2}%</p>
          <p>🕒 Última atualização: {dados.timestamp}</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </MainLayout>
  );
}
