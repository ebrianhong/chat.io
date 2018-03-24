import React from 'react';

import ChatContainer from './components/chatbox/ChatContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>APP</h1>
        <ChatContainer></ChatContainer>
      </div>
    )
  }
};

export default App;