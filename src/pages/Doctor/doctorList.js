import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Icon, Button, Modal } from 'antd';
import doctorListStyles from './doctorList.less';
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
      list: [],
      visible: false,
      popupsData: [],//弹出层数据
      index: 0
    };
  }

  // 渲染弹出层---------
  showPopups = (data) =>{
    let arr = data.list.map(function(obj,index){
      return (
        <div key={index}>
          <p></p>
        </div>
      )
    })
    // console.log(arr)
    this.setState({
      popupsData:arr
    })
  }

  showModal = (id) => {
    let popupsIndex;//弹出层对应索引
    this.state.list.forEach(function (obj, index) {
      if (obj.oid == id) {
        popupsIndex = index;
      }
    });
    console.log(popupsIndex);
    this.setState({
      visible: true,
      index: popupsIndex
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'doctor/gets',
      payload: {},
    });
  }
  componentWillReceiveProps() {
    console.log(this.props.doctor);
    this.setState({
      list:[...this.props.doctor.doctor.list]
    }) 
    this.showPopups(this.props.doctor.doctor);
  }
  render() {
    let arr = this.state.list.map((obj, index) => {
      return (
        <Card
          key={index}
          style={{ width: 240, height: 420 }}
          cover={
            <img alt="example" src={obj.doctor_image} className={doctorListStyles.doctorListImg} />
          }
          className={doctorListStyles.doctorListCard}
          bodyStyle={{ padding: 6, marginLeft: 47 }}
        >
          <p>医生姓名:{obj.doctor_name}</p>
          <p>医生所在科室:{obj.o_name}</p>
          <p>医生工作地点:{obj.doctor_place}</p>
          <p>医生职称:{obj.doctor_job}</p>
          <p>挂号金额:{obj.doctor_price}</p>
          <p className={doctorListStyles.card}>医生简介:{obj.doctor_message}</p>
          <Button type="primary"
            onClick={() => {
              this.showModal(obj.oid)
            }}>
            点击进行修改
        </Button>
        </Card>
      );
    });

    return (
      <div className={doctorListStyles.container}>
        <div>
          <PageHeaderWrapper title="医生列表" />
        </div>
        {arr}
        <Card
          style={{ width: 240, height: 420 }}
          className={doctorListStyles.doctorListCard}
          bodyStyle={{ fontSize: 200, marginTop: 20 }}
        >
          <Icon
            type="plus"
            className={doctorListStyles.iconImg}
            onClick={() => {
              router.push('/doctor/list2');
            }}
          />
        </Card>
        <Modal
          title="详情信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.state.popupsData[this.state.index]}
        </Modal>
      </div>
    );
  }
}
export default Doctor;
