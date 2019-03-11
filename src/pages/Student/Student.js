import React, { Component } from 'react';
import { connect } from 'dva';

@connect(student => {
  return {
    student,
  };
})
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'student/gets',
      payload: { testaa: '123123' },
    });
  }

  render() {
    return <div />;
  }
}
export default Student;
