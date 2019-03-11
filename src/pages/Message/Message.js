import React, { Component } from 'react';
import { connect } from 'dva';

@connect(message => {
  return {
    message,
  };
})
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>hj</div>;
  }
}
export default Message;
