import http from 'http';
import SocketIo from 'socket.io';

import App from './config/express'
import db from './config/database'
import { storeChat, getChat, deleteMessage } from './config/database'
import { success, error, log } from './lib/log';

export const app = App.express
const server = http.createServer(app);
const io = SocketIo(server);
const PORT = process.env.PORT || 4155;

io.on('connection', async socket => {
  try {
    log('User', socket.id, 'has connected to socket server');
    const data = await getChat()
    await socket.emit('server-client message', data)
  } catch(err) {
    error(err)
  }

  socket.on('client-server message', async data => {
    log(data.title, ':', data.message)
    try {
      const insertedData = await storeChat(data.title, data.message)
      io.emit('server-client message', insertedData)
    } catch(err) {
      error(err)
    }
  })

  socket.on('message delete', async data => {
    try {
      const newData = await deleteMessage(data.id)
      io.emit('server-client message', newData)
    } catch(err) {
      error(err)
    }
  })
});

server.listen(PORT, () => {
  success('Socket server listening on port:', PORT);
});
