import mongoose from 'mongoose';
import { success, error } from '../../lib/log';

mongoose.connect('mongodb://localhost/chat-io');

const db = mongoose.connection;
// db.dropDatabase()
db.on('open', () => {
  success('Mongoose database connected');
});

const ChatSchema = mongoose.Schema({
  user: String,
  message: String,
},
{
  timestamps: true
});

const Chat = mongoose.model('Chat', ChatSchema);

export const storeChat = (username, message) => {
  new Chat({
    user: username,
    message: message
  }).save()
}

export const getChat = async () => {
  try {
    const data = await Chat.find()
    return data
  } catch(err) {
    error(err)
  }

}