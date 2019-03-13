import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Tabs,Button,Table } from 'antd';
import router from 'umi/router';
import Detail from './Detail';

const TabPane = Tabs.TabPane;
const columns = [{
    title: '用户名',
    dataIndex: 'name',
  }, {
    title: '患者姓名',
    className: 'keshi',
    dataIndex: 'patient_name',
  }, {
    title: '挂号医生',
    dataIndex: 'doctor',
  }, {
    title: '挂号日期',
    dataIndex: 'date',
  },{
    title: 'action',
    dataIndex: '',
    render: () => {
      return (
        <div>
          <Detail></Detail>
          <Button type="primary" onClick={goRegistration}>发布病例</Button>
        </div>
        )
      }
  }];

  const data_curr = [{//当前挂号表格
    key: '1',
    name: 'John Brown',
    patient_name: '￥300,000.00',
    doctor: 'New York No. 1 Lake Park',
    date:'1997.09.20',
  }, {
    key: '2',
    name: 'Jim Green',
    patient_name: '￥1,256,000.00',
    doctor: 'London No. 1 Lake Park',
    date:'1997.09.20',
  }, {
    key: '3',
    name: 'Joe Black',
    patient_name: '￥120,000.00',
    doctor: 'Sidney No. 1 Lake Park',
    date:'1997.09.20',
  }];

  const data_prev = [{//往期挂号表格
    key: '1',
    name: 'John Brown',
    patient_name: '￥300,000.00',
    doctor: 'New York No. 1 Lake Park',
    date:'1997.09.20',
  }, {
    key: '2',
    name: 'Jim Green',
    patient_name: '￥1,256,000.00',
    doctor: 'London No. 1 Lake Park',
    date:'1997.09.20',
  }, {
    key: '3',
    name: 'Joe Black',
    patient_name: '￥120,000.00',
    doctor: 'Sidney No. 1 Lake Park',
    date:'1997.09.20',
  }];
  

function callback(key) {
    console.log(key);
  }

function goRegistration(){
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
      this.state = {};
    }

  render() {
    return <div>
      <PageHeaderWrapper title="挂号列表"></PageHeaderWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="当前挂号" key="1">
            <Table
                columns={columns}
                dataSource={data_curr}
                bordered
            />
        </TabPane>
        <TabPane tab="往期挂号" key="2">
            <Table
                columns={columns}
                dataSource={data_prev}
                bordered
            />
        </TabPane>
      </Tabs>,
    </div>;
  }
}
export default Registration;
