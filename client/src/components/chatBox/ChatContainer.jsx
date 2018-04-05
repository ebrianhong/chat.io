import React from 'react';
import io from 'socket.io-client'

import url from '../../config';

import ChatNav from './ChatNav';
import ChatView from './Chatview';
import ChatInterface from './ChatInterface';

class ChatContainer extends React.Component {
  constructor() {
    super()
    console.log(url)
  }

  componentDidMount() {
    const socket = io(`${url}:4155`);
    socket.on('connect', () => {
      console.log('connected');
    });
  }

  render() {
    return (
      <div id="chatContainer">
        <ChatNav />
        <ChatView />
        <ChatInterface />
      </div>
    )
  }
};

export default ChatContainer;