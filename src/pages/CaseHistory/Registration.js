import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Tabs, Button, Table,Modal } from 'antd';
import router from 'umi/router';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

function goRegistration() {
  router.push("/casehistory/casesend");
}

@connect(registration => {
  return {
    registration,
  };
})
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: [],//用户列表
      index: 0,
      popupsData: [],//弹出层数据
      columns:[{
        title: '用户名',
        dataIndex: 'rid',
      }, {
        title: '患者姓名',
        className: 'keshi',
        dataIndex: 'r_uid',
      }, {
        title: '挂号医生',
        dataIndex: 'r_did',
      }, {
        title: '挂号日期',
        dataIndex: 'r_time',
      }, {
        title: 'Action',
        dataIndex: '',
        render: (text,record) => {
          return (
            <div>
              <Button type="primary" onClick={() => {
                this.showModal(record.rid);
              }}>查看详情{record.name}</Button>
              <Button style={{ marginLeft: '10px' }} type="primary" onClick={goRegistration}>发布病例</Button>
            </div>
          )
        }
      }]
    };
  }

  showPopups = (data) => {
    let arr = data.list.map(function (obj, index) {
      return (
        <div key={index}>
          <p>用户名：{obj.rid}</p>
          <p>患者姓名：{obj.r_uid}</p>
          <p>挂号医生</p>
        </div>
      )
    })
    // console.log(arr)
    this.setState({
      popupsData: arr
    })
  }

  showModal = (data) => {
    let popupsIndex;//弹出层对应索引
    this.state.data.forEach(function (obj, index) {
      if (obj.rid == data) {
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
      type: 'registration/gets',
      payload: {},
    });
  }
  componentWillReceiveProps() {
    console.log(this.props.registration.registration)
    this.setState({
      data: [...this.props.registration.registration.list]
    })
    this.showPopups(this.props.registration.registration);
  }

  render() {
    let arr = this.state.data;
    return <div>
      <PageHeaderWrapper title="挂号列表"></PageHeaderWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="当前挂号" key="1">
          <Table
            columns={this.state.columns}
            dataSource={arr}
            bordered
          />
        </TabPane>
        <TabPane tab="往期挂号" key="2">
          <Table
            columns={this.state.columns}
            dataSource={arr}
            bordered
          />
        </TabPane>
      </Tabs>,
      <Modal
          title="详情信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.state.popupsData[this.state.index]}
        </Modal>
    </div>;
  }
}
export default Registration;
