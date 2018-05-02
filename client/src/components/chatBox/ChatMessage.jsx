import React from 'react';

class ChatMessage extends React.Component {
  constructor(props) {
    super(props)    
    console.log(this.props.message.length)
  }

  onClickHandler = () => {
    console.log('hey')
    this.props.messageGrabber(
      this.props.title,
      this.props.message
    )
  }



  render() {
    return(
      <div 
        className="messageBox"           
        onClick={this.onClickHandler}
      >
        <div className="messageTitle">
          {this.props.title}
        </div>
        <div 
          className="messageMessage"
        >
          {this.props.message}
        </div>

        {/* {
          this.props.message.length > 25
          ? <div className="messageMessage-wrap">
              {this.props.message}
            </div>
          : <div className="messageMessage-nowrap">
              {this.props.message}
            </div>
        } */}

        
        <div className="messageButtonBox">
          <button className="messageButton" type="button">edit</button>
          <button className="messageButton" type="button">delete</button>
          <button className="messageButton" type="button">blah</button>
        </div>
      </div>
    )
  }  
}

export default ChatMessage;