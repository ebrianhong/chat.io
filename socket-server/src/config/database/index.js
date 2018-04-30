import mongoose from 'mongoose';
import { success, error } from '../../lib/log';

mongoose.connect('mongodb://localhost/chat-io');

const db = mongoose.connection;
// db.dropDatabase()
db.on('open', () => {
  success('Mongoose database connected');
});

const ChatSchema = mongoose.Schema({
  title: String,
  message: String,
},
{
  timestamps: true
});

const Chat = mongoose.model('Chat', ChatSchema);

export const storeChat = (title, message) => {
  new Chat({
    title: title,
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