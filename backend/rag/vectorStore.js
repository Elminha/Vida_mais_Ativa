const fs = require("fs");
const path = require("path");

const VECTOR_FILE = path.join(__dirname, "vectors.json");

/**
 * Carrega vetor já salvo
 */
function loadVectorStore() {
    if (!fs.existsSync(VECTOR_FILE)) {
        fs.writeFileSync(VECTOR_FILE, JSON.stringify([]));
    }

    const data = fs.readFileSync(VECTOR_FILE);
    return JSON.parse(data);
}

/**
 * Salva novos vetores no arquivo
 */
function saveVectorStore(store) {
    fs.writeFileSync(VECTOR_FILE, JSON.stringify(store, null, 2));
}

/**
 * Adiciona um documento com embedding
 */
function addDocument(text, embedding) {
    const store = loadVectorStore();

    store.push({
        text,
        embedding,
    });

    saveVectorStore(store);
}

/**
 * Calcula similaridade coseno entre dois vetores
 */
function cosineSimilarity(a, b) {
    const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dot / (magA * magB);
}

module.exports = {
    loadVectorStore,
    saveVectorStore,
    addDocument,
    cosineSimilarity,
};
