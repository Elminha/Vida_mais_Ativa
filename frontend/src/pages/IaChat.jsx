import React, { useState } from "react";
import axios from "axios";

export default function IaChat() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [loading, setLoading] = useState(false);

  async function enviarPergunta() {
    if (!pergunta.trim()) return;

    setLoading(true);
    setResposta("");

    try {
      const response = await axios.post("http://localhost:3001/api/ia", {
        pergunta,
      });

      setResposta(response.data.resposta);
    } catch (error) {
      setResposta("Erro ao comunicar com a IA.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Assistente IA – Idosos</h1>

      <textarea
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Digite sua pergunta..."
        rows={4}
        style={{ width: "100%" }}
      />

      <button onClick={enviarPergunta} disabled={loading} style={{ marginTop: 10 }}>
        {loading ? "Processando..." : "Enviar"}
      </button>

      {resposta && (
        <div style={{ marginTop: 20 }}>
          <h3>Resposta:</h3>
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
}
