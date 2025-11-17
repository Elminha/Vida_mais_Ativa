const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const healthMockRoutes = require("./routes/healthMock");
const monitoramentoRoutes = require("./routes/monitoramento");


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

// ➜ Aqui devemos registrar as rotas ANTES do listen
app.use("/", healthMockRoutes);

//nova rota de monitoramento
app.use("/api/monitoramento", monitoramentoRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
