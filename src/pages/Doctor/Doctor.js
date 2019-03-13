import React, { Component } from 'react';
import { connect } from 'dva';

@connect(doctor => {
  return {
    doctor,
  };
})
class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'doctor/gets',
      payload: { testaa: '123123' },
    });
  }

  render() {
    return <div>我是Doctor页</div>;
  }
}
export default Doctor;
