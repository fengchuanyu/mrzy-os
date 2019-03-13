import React, { Component } from 'react';
import { connect } from 'dva';
import msg_style from'./Message.less'
import Msg_popops from './Popups.js'
import Msg_del from './Del_message_popops.js'
import { Table } from 'antd';
import {Popover} from 'antd';
import {
  Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon,
} from 'antd';

const { Option } = Select;
const columns = [{
  title: '标题',
  dataIndex: 'msg_title',
}, {
  title: '类型',
  dataIndex: 'msg_type',
}, {
  title: '作者',
  dataIndex: 'msg_author',
  render: msg_author => <span>铭仁中医诊所</span>,
}, {
  title: 'Action',
  dataIndex: 'msg_action',
  render: msg_button => 
  <span>
    <Msg_popops></Msg_popops>
    <Msg_del></Msg_del>
    
  </span>,
}
];

const data = [{
  key: '1',
  msg_title: '中医药',
  msg_type: '妇科',
}, {
  key: '2',
  msg_title: '西医',
  msg_type: '吃雅培',
}, {
  key: '3',
  msg_title: '啊啊啊',
  msg_type: '娃娃',
}, 
];
@connect(message => {
  return {
    message,
  };
})
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    
  }
  //抽屉开始
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  //抽屉结束
  render() {
    return (
      <div>
        <form action="">
        <Table 
        columns={columns}
        dataSource={data}
        bordered
        className={msg_style.td} 
        >

        </Table>
        </form>
        
        
      </div>
     
    );
  }
}

export default Message;
