// backend/routes/dados.js
const express = require("express");
const router = express.Router();
const dadosController = require("../controllers/dadosController");

// POST /api/dados  (recebe leitura)
router.post("/", dadosController.receiveData);

// GET /api/dados/latest?userId=...
router.get("/latest", dadosController.getLatest);

module.exports = router;
