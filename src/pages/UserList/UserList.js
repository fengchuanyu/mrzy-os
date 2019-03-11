import React, { Component } from 'react';
import { connect } from 'dva';

@connect(userlist => {
  return {
    userlist,
  };
})
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>yguhj</div>;
  }
}
export default UserList;
