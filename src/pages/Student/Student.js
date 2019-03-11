import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

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
    return (
      <div>
        <PageHeaderWrapper title="学生列表">学生管理</PageHeaderWrapper>
      </div>
    );
  }
}
export default Student;
