import http from 'http';
import SocketIo from 'socket.io';
// import { each } from 'lodash';

import { success, log } from './lib/log';

const server = http.createServer();
const io = SocketIo(server);

const PORT = process.env.PORT || 4155;

io.on('connection', client => {
  client.removeAllListeners();
  log('Client', client.id, 'connected to socket server');
});

server.listen(PORT, () => {
  success('Socket server listening on port:', PORT);
});
