import React from 'react';

import { socket } from './ChatContainer';

class ChatInputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
      user: 'default',
      message: '',
    }
    // this.sendChatHandler = this.sendChatHandler.bind(this)
    // this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  sendChatHandler = (e) => {
    e.preventDefault()
    socket.emit('client-server message', {
      user: this.state.user, message: this.state.message
    })
  }

  onChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendChatHandler}>
          <input onChange={this.onChangeHandler} type="text" id="chatInputBox" />
        </form>
      </div>
    )
  }
}

export default ChatInputBox;