import React from 'react';

import { socket } from './ChatContainer';

class ChatInputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
      title: '',
      message: '',
    }
    // this.sendChatHandler = this.sendChatHandler.bind(this)
    // this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  sendChatHandler = e => {
    e.preventDefault()
    if (this.state.title.length && this.state.message.length) {
      socket.emit('client-server message', {
        title: this.state.title, 
        message: this.state.message
      })
      e.target.reset()
      this.setState({
        title: '',
        message: ''
      })
    }
  }

  onChangeHandler = e => {
    console.log(e.target.id)
    console.log(e.target.value)

    this.setState({
      [`${e.target.id}`]: e.target.value
    })
  }

  render() {
    return (
      <div id="chatInputBoxContainer">
        <form className="form" onSubmit={this.sendChatHandler}>
          <input 
            onChange={this.onChangeHandler} 
            type="text" 
            className="chatInputBox" 
            id="title" 
            autoComplete="off"
            placeholder="Enter a title..."
          />
          <button 
            id="submitButton" 
            type="submit" />
          <input 
            onChange={this.onChangeHandler} 
            type="text" 
            className="chatInputBox" 
            id="message" 
            autoComplete="off"
            placeholder="Enter a note..."
          />
        </form>
      </div>
    )
  }
}

export default ChatInputBox;