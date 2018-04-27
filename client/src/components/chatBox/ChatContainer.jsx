import React from 'react';
import io from 'socket.io-client'

import url from '../../config';

import ChatNav from './ChatNav';
import ChatView from './Chatview';
import ChatInterface from './ChatInterface';

export const socket = io(`${url}:4155`);
export class ChatContainer extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    socket.on('connect', () => {
      console.log('connected to socket server');

    });
  }



  render() {
    return (
      <div id="chatContainer">
        <ChatInterface />
        <ChatNav />
        <ChatView />
      </div>
    )
  }
};

// export default ChatContainer;