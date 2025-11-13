const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota inicial de teste
app.get("/", (req, res) => {
  res.send("API Vida+Ativa funcionando!");
});

// Simulação de recebimento de dados do smartwatch
app.post("/api/dados", (req, res) => {
  const dados = req.body;
  console.log("Dados recebidos:", dados);
  res.json({ message: "Dados recebidos com sucesso!" });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
