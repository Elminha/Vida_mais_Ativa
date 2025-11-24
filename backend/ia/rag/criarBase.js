import { criarBaseDeConhecimento } from "./rag.js";

console.log("🧠 Gerando embeddings da base de conhecimento...");

criarBaseDeConhecimento().then(() => {
  console.log("✅ Embeddings criados com sucesso!");
  process.exit();
});
