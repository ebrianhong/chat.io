import http from 'http';

import App from './config/express';
import { success } from './lib/log'

export const app = App.express

const server = http.createServer(app)


server.listen(3396, () => {
  success('Rest server listening on port: 3396');
})