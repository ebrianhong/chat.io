import React from 'react'

import { socket } from './ChatContainer';

class ChatView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    socket.on('server-client message', data => {
      const messages = this.state.messages
      messages.push(data)
      this.setState({
        messages: messages
      })
    })
    
  }

  render() {
    return (
      <div id="chatView">
      {
        
        console.log(this.state.messages)
      }
        {
          this.state.messages.map((message, i) => {
            return (
              <div key={i}>
                <div>
                  user: {message.user}
                  <br/>
                  message: {message.message}
                </div>

              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ChatView;