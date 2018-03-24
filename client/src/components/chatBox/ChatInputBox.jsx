import React from 'react'

class ChatInputBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <input type="text" id="chatInputBox">
        {/* <input type="text" id="chatInputField"/> */}
        
      </input>
      </div>
    )
  }
}

export default ChatInputBox;