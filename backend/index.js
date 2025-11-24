import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import iaRoutes from "./routes/iaRoutes.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Rotas da IA
app.use("/api", iaRoutes);

app.get("/", (req, res) => {
  res.send("Backend da IA está rodando ✔️");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

