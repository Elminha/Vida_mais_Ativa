function analisarSono(sonhoHoras) {
  if (sonhoHoras < 5) return "Sono muito baixo. Risco aumentado de fadiga.";
  if (sonhoHoras < 7) return "Sono abaixo do ideal.";
  if (sonhoHoras > 9) return "Sono acima do esperado para maioria dos adultos.";
  return "Sono dentro da faixa saudável.";
}

function analisarHumor(humor) {
  if (humor <= 2) return "Humor muito baixo, possível sinal de tristeza ou desânimo.";
  if (humor <= 4) return "Humor levemente reduzido.";
  if (humor >= 8) return "Humor ótimo!";
  return "Humor estável.";
}

function analisarBatimentos(bpm) {
  if (bpm < 50) return "Batimentos muito baixos (bradicardia).";
  if (bpm > 100) return "Batimentos elevados (taquicardia).";
  return "Batimentos dentro do normal.";
}

function analisarAtividade(minutos) {
  if (minutos < 30) return "Pouca atividade física hoje.";
  if (minutos < 60) return "Atividade física moderada.";
  return "Ótimo nível de atividade física!";
}

module.exports = {
  analisarSono,
  analisarHumor,
  analisarBatimentos,
  analisarAtividade
};
