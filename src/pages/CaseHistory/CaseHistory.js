import React, { Component } from 'react';
import { connect } from 'dva';

@connect(casehistory => {
  return {
    casehistory,
  };
})
class CaseHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>132</div>;
  }
}
export default CaseHistory;
