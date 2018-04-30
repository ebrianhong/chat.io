import React from 'react';

class ChatMessage extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return(
      <div className="message">
        <div className="messageTitle">
          {this.props.title}
        </div>
        <div className="messageMessage">
          {this.props.message}
        </div>
      </div>
    )
  }
  
}

export default ChatMessage;