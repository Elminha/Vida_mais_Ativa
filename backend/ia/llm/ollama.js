import ollama from "ollama";

export async function gerarResposta(prompt) {
  try {
    const response = await ollama.chat({
      model: "llama3.2",
      messages: [
        { role: "user", content: prompt }
      ]
    });

    return response.message.content;

  } catch (error) {
    console.error("Erro no Ollama:", error);
    throw error;
  }
}
