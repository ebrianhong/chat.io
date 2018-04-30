import React from 'react';
import ChatInputBox from './ChatInputBox';
import ChatInputButtons from './ChatInputButtons'

class ChatInterface extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div id="chatInterface">
        <ChatInputBox />
      </div>
    )
  }
}

export default ChatInterface;
