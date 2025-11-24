import ollama from 'ollama';

export async function runLLM(prompt) {
  try {
    const response = await ollama.chat({
      model: 'phi3:latest',
      messages: [{ role: 'user', content: prompt }]
    });

    return response.message.content;

  } catch (error) {
    console.error("Erro no Ollama:", error);
    return "Erro ao processar IA.";
  }
}
