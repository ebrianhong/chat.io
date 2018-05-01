import React from 'react';

import { socket } from './ChatContainer';
import ChatMessage from './ChatMessage';

class ChatView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {

    socket.on('server-client message', data => {
      console.log('data', data)
      const messages = this.state.messages
      if (Array.isArray(data)) {
        data.forEach(message => {
          messages.push(message)
        })
      } else {
        messages.push(data)
      }      
      this.setState({
        messages: messages
      })
    })
    
  }

  render() {
    return (
      <div id="chatView">  
        {
          this.state.messages.map((message, i) => {
            return(
              <ChatMessage 
                key={i}
                title={message.title}
                message={message.message}
              />
            )
          })
        }
      </div>
    )
  }
}

export default ChatView;