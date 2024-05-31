import express from 'express';
import homeRouter from './routes/homePage.js';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3400;

app.use(express.json());
app.use(express.static(resolve(__dirname, 'public')));

app.get('/home', homeRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})