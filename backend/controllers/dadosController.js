// backend/controllers/dadosController.js
// No início, vamos apenas logar e retornar uma resposta.
const path = require("path");

exports.receiveData = (req, res) => {
  const payload = req.body;
  console.log("📥 Dados recebidos:", payload);
  // resposta temporária
  res.json({ message: "Dados recebidos com sucesso!", received: payload });
};

exports.getLatest = (req, res) => {
  res.json({ message: "Ainda não há dados salvos. Em breve implementamos o DB." });
};
