import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChatContainer from '../chatBox/ChatContainer'
import Nav from '../nav/Nav'

class Main extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="Main">
        <Switch>
          <Route exact path='/' component={ChatContainer}/>
          <Route path='/chat' component={ChatContainer}/>
        </Switch>
      </div>
    )
  }
};

export default Main;