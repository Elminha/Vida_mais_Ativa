const express = require("express");
const router = express.Router();

// Função para gerar valores aleatórios dentro de um intervalo
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Simula dados do smartwatch
router.get("/mock-health", (req, res) => {
  const fakeData = {
    sleep: random(4, 9),           // horas de sono
    mood: random(1, 10),           // humor de 1 a 10
    heartRate: random(60, 110),     // bpm
    steps: random(1000, 9000),      // passos do dia
    activity: random(10, 120),      // minutos de atividade física
    timestamp: new Date().toISOString()
  };

  res.json(fakeData);
});

module.exports = router;
