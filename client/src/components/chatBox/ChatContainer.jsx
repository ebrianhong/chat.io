import React from 'react';
import io from 'socket.io-client'

import url from '../../config';

import ChatNav from './ChatNav';
import ChatView from './Chatview';
import ChatInputBox from './ChatInputBox';

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
        <ChatInputBox />
        <ChatNav />
        <ChatView />
      </div>
    )
  }
};

// export default ChatContainer;