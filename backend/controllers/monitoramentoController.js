// Controller responsável por enviar dados simulados do smartwatch

const getMonitoramento = (req, res) => {
  const dados = {
    batimentos: 78,
    passos: 3500,
    horasSono: 6.2,
    humor: "neutro",
    oxigenacao: 97,
    temperatura: 36.5,
    status: "ok",
    alerta: false,
    timestamp: new Date().toISOString()
  };

  res.json(dados);
};

module.exports = { getMonitoramento };
