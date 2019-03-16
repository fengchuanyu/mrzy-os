import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Icon, Button } from 'antd';
import doctorListStyles from './doctorList.less';
import Popups from './Popups';
import router from 'umi/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
@connect(doctor => {
  return {
    doctor,
  };
})
class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'doctor/gets',
      payload: {},
    });
  }
  componentWillReceiveProps(){
    console.log(this.props.doctor.doctor.list)
    
    this.setState({
      list:[...this.props.doctor.doctor.list]
    })
    
  }
  render() { 
    let arr = this.state.list.map(function (obj,index) {
      return(
      <Card
          key={index}
          style={{ width: 240, height: 420 }}
          cover={
            <img
              alt="example"
              src={obj.doctor_image}
              className={doctorListStyles.doctorListImg}
            />
          }
          className={doctorListStyles.doctorListCard}
          bodyStyle={{ padding: 6, marginLeft: 47 }}
        >
          <p>医生姓名:{obj.doctor_name}</p>
          <p>医生所在科室:{obj.o_name}</p>
          <p>医生工作地点:{obj.doctor_place}</p>
          <p>医生职称:{obj.doctor_job}</p>
          <p>挂号金额:{obj.doctor_price}</p>
          <p className={doctorListStyles.card}>
            医生简介{obj.doctor_message}
          </p>
          <Popups />
        </Card>
      )
    })

    return (
      <div className={doctorListStyles.container}>
      <div>
        <PageHeaderWrapper title='医生列表'></PageHeaderWrapper>
      </div>
        {arr}
      </div>
    );
  }
}
export default Doctor;
