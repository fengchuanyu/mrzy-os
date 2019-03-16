import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Tabs,Button,Table } from 'antd';
import router from 'umi/router';
import Detail from './Detail';

const TabPane = Tabs.TabPane;
const columns = [{
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
    
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'registration/gets',
        payload: {},
      });
    }
    componentWillReceiveProps(){
      console.log(this.props.registration.registration)
      
      this.setState({
        data_curr:[...this.props.registration.registration.list]
      })
      
    }

  render() {
    let arr = this.state.data_curr;
    return <div>
      <PageHeaderWrapper title="挂号列表"></PageHeaderWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="当前挂号" key="1">
            <Table
                columns={columns}
                dataSource={arr}
                bordered
            />
        </TabPane>
        <TabPane tab="往期挂号" key="2">
            <Table
                columns={columns}
                dataSource={arr}
                bordered
            />
        </TabPane>
      </Tabs>,
    </div>;
  }
}
export default Registration;
