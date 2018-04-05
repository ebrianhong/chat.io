import express from 'express';
import path from 'path';
import { success } from './lib/log';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/public/')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));

app.listen(PORT, () => {
  success('Serving static files on PORT:', PORT);
});