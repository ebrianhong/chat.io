import http from 'http';
import SocketIo from 'socket.io';
// import { each } from 'lodash';

import { success, log } from './lib/log';

const server = http.createServer();
const io = SocketIo(server);

const PORT = process.env.PORT || 4155;

io.on('connection', socket => {
  socket.removeAllListeners();
  log('User', socket.id, 'has connected to socket server');

  socket.on('client-server message', data => {
    console.log(data)
    console.log(data.message)
    io.emit('server-client message', data)
  })

});

server.listen(PORT, () => {
  success('Socket server listening on port:', PORT);
});
