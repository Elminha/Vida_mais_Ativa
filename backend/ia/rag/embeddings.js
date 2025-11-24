require("dotenv").config();
const axios = require("axios");

/**
 * Gera embeddings usando a API da Groq
 * @param {string} text - Texto de entrada
 */
async function generateEmbedding(text) {
    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/embeddings",
            {
                model: "nomic-embed-text", // modelo gratuito da Groq
                input: text,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                },
            }
        );

        return response.data.data[0].embedding;
    } catch (error) {
        console.error("Erro ao gerar embedding:", error.response?.data || error);
        return null;
    }
}

module.exports = { generateEmbedding };
