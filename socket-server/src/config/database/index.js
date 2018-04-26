import mongoose from 'mongoose';
import { success, error } from '../../lib/log';

mongoose.connect('mongodb://localhost/chat-io');

const db = mongoose.connection;

db.on('open', () => {
  success('Mongoose database connected');
});

const ChatSchema = mongoose.Schema({
  username: String,
  message: String,
},
{
  timestamps: true
});

const Chat = mongoose.model('Chat', ChatSchema);

export const storeChat = (username, message, cb) => {
  new Chat({
    username: username,
    message: message
  }).save((data) => {
    console.log('saved', data)
  })
}

export const getChat = async () => {
  try {
    const data = await Chat.find()
    return data
  } catch(err) {
    error(err)
  }

}