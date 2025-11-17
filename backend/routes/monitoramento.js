const express = require("express");
const router = express.Router();
const { getMonitoramento } = require("../controllers/monitoramentoController");

router.get("/", getMonitoramento);

module.exports = router;
