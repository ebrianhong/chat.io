import React from 'react';
import { socket } from './ChatContainer'

class ChatMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  onClickMessageHandler = () => {
    this.props.messageGrabber(
      this.props.title,
      this.props.message
    )
  }
  onClickDeleteHandler = () => {
    console.log('id', this.props.id)
    this.props.onDeleteHandler(
      this.props.id
    )
  }

  render() {
    return(
      <div className="messageBox">
        <div className="messageTitle">
          {this.props.title}
        </div>
        <div className="messageMessage" onClick={this.onClickMessageHandler}>
          {this.props.message}
        </div>        
        <div className="messageButtonBox">
          <button className="messageButton" type="button">edit</button>
          <button className="messageButton" type="button" onClick={this.onClickDeleteHandler}>delete</button>
          <button className="messageButton" type="button">blah</button>
        </div>
      </div>
    )
  }  
}

export default ChatMessage;