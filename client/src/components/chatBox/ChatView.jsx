import React from 'react';

import { socket } from './ChatContainer';
import ChatMessage from './ChatMessage';
import ChatPopup from './ChatPopup';

class ChatView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      popup: false,
      popupTitle: '',
      popupMsg: '',
    }    
  }

  componentDidMount() {
    socket.on('server-client message', data => {
      console.log('data', data)      
      const messages = []
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

    document.onkeydown = e => {
      e = e || window.event;
      if (e.keyCode == 27) {
        this.closePopup()
      }
    };
  }

  closePopup = () => {
    this.setState({
      popup: false
    })
  }

  messageGrabber = (title, message) => {    
    this.setState({
      popup: true,
      popupTitle: title,
      popupMsg: message,
    })
  }

  onDeleteHandler = (id) => {
    socket.emit('message delete', {
      id
    })
  }

  // escPress = () => {
  //   document.onkeydown = function(evt) {
  //     evt = evt || window.event;
  //     if (evt.keyCode == 27) {
  //       console.log('esc')
  //       this.setState({
  //         popup: false
  //       })
  //     }
  //   };
  // }
  // document.onkeydown = function(evt) {
  //   evt = evt || window.event;
  //   if (evt.keyCode == 27) {
  //     this.setState({
  //       popup: false
  //     })
  //   }
  // };

  render() {
    return (
      <div>
          {
            this.state.popup
            ? <ChatPopup
                popup={this.state.popup}
                popupTitle={this.state.popupTitle}
                popupMsg={this.state.popupMsg}
                closePopup={this.closePopup}
              />          
            : null
          }
        <div id="chatView">            
          {
            this.state.messages.map((message, i) => {
              return(
                <ChatMessage 
                  key={i}
                  title={message.title}
                  message={message.message}
                  messageGrabber={this.messageGrabber}
                  onDeleteHandler={this.onDeleteHandler}
                  id={message._id}
                />
              )
            })
          }
        </div>
      </div>
      
    )
  }
}

export default ChatView;