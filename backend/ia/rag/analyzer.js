require("dotenv").config();
const axios = require("axios");
const { retrieveRelevantDocs } = require("../rag/retriever");

/**
 * Chama o LLM da Groq para gerar recomendações inteligentes
 * @param {object} healthData - dados coletados do smartwatch
 */
async function analyzeHealthWithAI(healthData) {
    const { heartRate, steps, mood, sleepHours } = healthData;

    // 1) Montar pergunta automática baseada nos dados
    const question = `
    O paciente apresentou os seguintes dados:
    - Batimentos cardíacos: ${heartRate}
    - Passos: ${steps}
    - Humor: ${mood}
    - Horas de sono: ${sleepHours}

    Com base nesses dados, forneça:
    • Uma análise geral
    • Possíveis riscos
    • Sugestões práticas para saúde mental e física
    • Recomendações leves para o dia
    `;

    // 2) Pegar textos relevantes do RAG
    const relevantDocs = await retrieveRelevantDocs(question, 3);

    let context = "";
    relevantDocs.forEach((doc, i) => {
        context += `Fonte ${i + 1}: ${doc.text}\n`;
    });

    // 3) Montar prompt final
    const finalPrompt = `
Você é um assistente de saúde para idosos.
Use APENAS as informações abaixo como contexto (RAG):

${context}

Agora responda à pergunta:
${question}
    `;

    // 4) Chamar LLM da Groq (gratuito)
    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama3-8b",
                messages: [
                    { role: "system", content: "Você é um assistente médico amigável e cauteloso." },
                    { role: "user", content: finalPrompt }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                },
            }
        );

        return response.data.choices[0].message.content;

    } catch (error) {
        console.error("Erro no LLM:", error.response?.data || error);
        return "Erro ao processar análise.";
    }
}

module.exports = { analyzeHealthWithAI };
