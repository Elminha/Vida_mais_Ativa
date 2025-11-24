import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import iaRoutes from './routes/iaRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rotas da IA
app.use('/ia', iaRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
