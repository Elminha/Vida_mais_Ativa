import fs from "fs";
import path from "path";
import ollama from "ollama";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knowledgePath = path.join(__dirname, "base_de_conhecimento");
const embeddingsPath = path.join(__dirname, "embeddings");

// Garantir que a pasta existe
if (!fs.existsSync(embeddingsPath)) {
  fs.mkdirSync(embeddingsPath);
}

// Função para gerar embedding no Ollama
async function gerarEmbedding(texto) {
  const response = await ollama.embeddings({
    model: "mxbai-embed-large",
    prompt: texto,
  });

  return response.embedding;
}

// Criar banco de embeddings
export async function criarBaseDeConhecimento() {
  const files = fs.readdirSync(knowledgePath);

  for (const file of files) {
    const filePath = path.join(knowledgePath, file);
    const content = fs.readFileSync(filePath, "utf8");

    const embedding = await gerarEmbedding(content);

    fs.writeFileSync(
      path.join(embeddingsPath, file + ".json"),
      JSON.stringify({ texto: content, embedding })
    );

    console.log("Embedding criado para:", file);
  }
}

// Buscar texto mais similar
function cosineSimilarity(a, b) {
  const dot = a.reduce((acc, v, i) => acc + v * b[i], 0);
  const normA = Math.sqrt(a.reduce((acc, v) => acc + v * v, 0));
  const normB = Math.sqrt(b.reduce((acc, v) => acc + v * v, 0));
  return dot / (normA * normB);
}

async function buscarContexto(pergunta) {
  const perguntaEmbedding = await gerarEmbedding(pergunta);

  const files = fs.readdirSync(embeddingsPath);
  let melhorMatch = null;
  let melhorSimilaridade = -1;

  for (const file of files) {
    const data = JSON.parse(
      fs.readFileSync(path.join(embeddingsPath, file), "utf8")
    );

    const sim = cosineSimilarity(perguntaEmbedding, data.embedding);

    if (sim > melhorSimilaridade) {
      melhorSimilaridade = sim;
      melhorMatch = data.texto;
    }
  }

  return melhorMatch;
}

// Função principal do RAG
export async function responderComRAG(pergunta) {
  const contexto = await buscarContexto(pergunta);

  const finalPrompt = `
Você é uma IA especializada em saúde do idoso.

Contexto (informações confiáveis do sistema):
${contexto}

Pergunta do usuário:
${pergunta}

Responda de forma clara, humana e segura.
  `;

  const response = await ollama.chat({
    model: "phi3:latest",
    messages: [{ role: "user", content: finalPrompt }],
  });

  return response.message.content;
}
