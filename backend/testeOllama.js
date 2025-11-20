const { Ollama } = require('ollama');

const ollama = new Ollama();

async function testar() {
    try {
        const resposta = await ollama.chat({
            model: 'phi3',
            messages: [
                { role: 'user', content: 'Olá, Ollama! Me responde em poucas palavras.' }
            ]
        });
        console.log(resposta[0].content); // aqui pegamos o texto da resposta
    } catch (error) {
        console.error('Erro ao usar o modelo:', error);
    }
}

testar();
