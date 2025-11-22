// backend/ia/iaController.js

const fs = require("fs");
const path = require("path");

// Caminho para armazenar os dados do usuário
const dataPath = path.join(__dirname, "../data/historico.json");

// Garante que o arquivo existe
function inicializarArquivo() {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify([]));
  }
}

// Salva um novo registro de dados (sono, humor, bpm, passos, atividade)
function salvarDados(dados) {
  inicializarArquivo();

  const historico = JSON.parse(fs.readFileSync(dataPath));

  historico.push({
    ...dados,
    registradoEm: new Date().toISOString(),
  });

  fs.writeFileSync(dataPath, JSON.stringify(historico, null, 2));
  return historico;
}

// Carrega os dados para análise pela IA
function carregarHistorico() {
  inicializarArquivo();
  return JSON.parse(fs.readFileSync(dataPath));
}

module.exports = { salvarDados, carregarHistorico };
