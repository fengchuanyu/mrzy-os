import React, { Component } from 'react';
import { connect } from 'dva';
import msg_style from './Message.less';
import Msg_del from './Del_message_popops.js';
import { Table } from 'antd';
import {
  Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import router from 'umi/router';

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
  render: (text,record) => {
    return (
      <div>
        <Button type="primary" onClick={()=>goAddMessage(record.id)}>
          编辑
        </Button>
        <Msg_del></Msg_del>
      </div>
    )
  }
}
];

const data = [{
  id: 1,
  key: '1',
  msg_title: '中医药',
  msg_type: '妇科',
}, {
  id: 2,
  key: '2',
  msg_title: '西医',
  msg_type: '吃雅培',
}, {
  id: 3,
  key: '3',
  msg_title: '啊啊啊',
  msg_type: '娃娃',
},
];

function goAddMessage(id) {
  router.push(`/message/addmessage?id=${id}`);
}

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
  render() {
    return (
      <div>
        <PageHeaderWrapper title='文章列表'></PageHeaderWrapper>
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
