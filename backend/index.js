// backend/index.js
const express = require("express");
const cors = require("cors");
const dadosRouter = require("./routes/dados");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor Vida+Ativa funcionando! 🚀");
});

// rotas
app.use("/api/dados", dadosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
