import http from 'http';
import SocketIo from 'socket.io';
import db from './config/database'
import { storeChat, getChat } from './config/database'
import { success, error, log } from './lib/log';

const server = http.createServer();
const io = SocketIo(server);

const PORT = process.env.PORT || 4155;

// server.get('/getAllMessages', async (req, res) => {
//   const data = await getChat()
//   res.status(200).send(data)
// })

io.on('connection', async socket => {
  try {

    await socket.removeAllListeners();
    
    log('User', socket.id, 'has connected to socket server');
    
    const data = await getChat()
    console.log(data)
    await io.emit('server-client message', data)
  } catch(err) {
    error(err)
  }
  


  socket.on('client-server message', async data => {
    log(data.title, ':', data.message)
    try {
      await storeChat(data.title, data.message)
      io.emit('server-client message', data)    
    } catch(err) {
      error(err)
    }
  })
});


server.listen(PORT, () => {
  success('Socket server listening on port:', PORT);
});
