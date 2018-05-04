import mongoose from 'mongoose';
import { success, log, error } from '../../lib/log';

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

export const storeChat = async (title, message) => {
  try {
    await new Chat({
      title: title,
      message: message
    }).save()
    const lastMessage = await Chat.findOne().sort({ _id: -1 }).limit(1)
    log('last message: ', lastMessage)
    return lastMessage
  } catch(err) {
    error(err)
  }
}

export const getChat = async () => {
  try {
    const data = await Chat.find()
    return data
  } catch(err) {
    error(err)
  }
}

export const deleteMessage = async (id) => {
  try {
    log('deleted message: ', id)
    await Chat.findByIdAndRemove({_id: id});
    const data = await Chat.find();
    log('data', data)
    return data
  } catch(err) {
    error(err)
  }
}