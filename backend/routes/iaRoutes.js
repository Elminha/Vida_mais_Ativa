// backend/routes/iaRoutes.js
import express from "express";
import { handleQuestion } from "../ia/rag/chat.js";

const router = express.Router();

router.post("/perguntar", async (req, res) => {
  try {
    const { pergunta } = req.body;

    if (!pergunta) {
      return res.status(400).json({ erro: "Campo 'pergunta' é obrigatório" });
    }

    const result = await handleQuestion(pergunta);

    if (!result.ok) {
      return res.status(500).json({ erro: result.erro || "Erro ao processar pergunta" });
    }

    return res.json({ resposta: result.resposta });
  } catch (err) {
    console.error("Erro na rota /api/ia/perguntar:", err);
    return res.status(500).json({ erro: "Erro interno" });
  }
});

export default router;
