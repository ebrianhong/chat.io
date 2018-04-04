import React from 'react';

import Nav from './components/nav/Nav';
import Main from './components/main/Main';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav />
        <Main />        
      </div>
    )
  }
};

export default App;