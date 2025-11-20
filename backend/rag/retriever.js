const { generateEmbedding } = require("./embeddings");
const { loadVectorStore, cosineSimilarity } = require("./vectorStore");

/**
 * Retorna os documentos mais similares ao texto perguntado
 * @param {string} query - texto da pergunta
 * @param {number} topK - número de documentos parecidos
 */
async function retrieveRelevantDocs(query, topK = 3) {
    const store = loadVectorStore();

    if (store.length === 0) {
        return [];
    }

    // embedding da pergunta
    const queryEmbedding = await generateEmbedding(query);

    // calcula similaridade com tudo no vector store
    const scoredDocs = store.map((doc) => {
        const score = cosineSimilarity(queryEmbedding, doc.embedding);
        return { ...doc, score };
    });

    // ordena do mais parecido para o menos
    scoredDocs.sort((a, b) => b.score - a.score);

    // devolve somente os topK
    return scoredDocs.slice(0, topK);
}

module.exports = { retrieveRelevantDocs };
