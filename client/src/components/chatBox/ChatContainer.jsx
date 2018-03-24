import React from 'react';

import ChatNav from './ChatNav';
import ChatView from './Chatview';
import ChatInterface from './ChatInterface';

class ChatContainer extends React.Component {
  constructor() {
    super()
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