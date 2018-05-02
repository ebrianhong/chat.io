import React from 'react';


class ChatPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div id="popupOpacity">
        </div>
        <div id="popupBox">
          <div className="messageTitle">
            {this.props.popupTitle}
          </div>
          <div className="messageMessage">                
            {this.props.popupMsg}
          </div>
          <div className="messageButtonBox">
            <button type="button" className="messageButton show">
              edit
            </button>
            <button type="button" className="messageButton show">
              delete
            </button>
            <button type="button" className="messageButton show">
              blah
            </button>
            <button type="button" className="messageButton show exit"
              onClick={this.props.closePopup}
            >
              exit
            </button>
          </div>
        </div> 
      </div> 
    );
  }
}


export default ChatPopup;





