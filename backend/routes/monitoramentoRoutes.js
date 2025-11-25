import express from "express";

const router = express.Router();

// Dados fixos por enquanto
let dadosMonitoramento = {
  sleep_hours: 7,
  mood: "Bom",
  heart_rate: 72,
  physical_activity: 45,
  steps: 5200
};

router.get("/monitoramento", (req, res) => {
  res.json(dadosMonitoramento);
});

export default router;
