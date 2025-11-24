// backend/ia/rag/chat.js
import { responderComRAG } from "./rag.js";

/**
 * handleQuestion
 * Recebe uma pergunta (string), valida e chama o responderComRAG.
 * Retorna um objeto { ok: boolean, resposta?: string, erro?: string }
 */
export async function handleQuestion(pergunta) {
  try {
    if (!pergunta || typeof pergunta !== "string" || pergunta.trim().length === 0) {
      return { ok: false, erro: "Pergunta inválida" };
    }

    const cleaned = pergunta.trim();

    // chama o RAG (que por sua vez chama o Ollama)
    const resposta = await responderComRAG(cleaned);

    if (!resposta) {
      return { ok: false, erro: "IA retornou resposta vazia" };
    }

    return { ok: true, resposta };
  } catch (err) {
    console.error("Erro em handleQuestion:", err);
    return { ok: false, erro: "Erro interno ao processar a pergunta" };
  }
}
