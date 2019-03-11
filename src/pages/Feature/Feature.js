import React, { Component } from 'react';
import { connect } from 'dva';

@connect(feature => {
  return {
    feature,
  };
})
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>ftyh</div>;
  }
}
export default Feature;
