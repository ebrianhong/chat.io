import http from 'http';
import SocketIo from 'socket.io';
import db from './config/database'
import { storeChat, getChat } from './config/database'

// import { each } from 'lodash';

import { success, log } from './lib/log';

const server = http.createServer();
const io = SocketIo(server);

const PORT = process.env.PORT || 4155;

io.on('connection', socket => {
  socket.removeAllListeners();
  log('User', socket.id, 'has connected to socket server');
  socket.on('client-server message', async data => {
    log(data.user, ':', data.message)
    try {
      await storeChat(data.user, data.message, data => {
        // console.log(data)
      })
      const test = await getChat()
      console.log(test)
      io.emit('server-client message', test)
    
    } catch(err) {
      console.log(err)
    }
  })

});

server.listen(PORT, () => {
  success('Socket server listening on port:', PORT);
});
