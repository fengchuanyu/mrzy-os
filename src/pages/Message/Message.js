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
  dataIndex: 'article_title',
}, {
  title: '类型',
  dataIndex: 'cate_name',
}, {
  title: '作者',
  dataIndex: 'doctor_name',
}, {
  title: 'Action',
  dataIndex: 'msg_action',
  width:'20%',
  render: (text,record) => {
    return (
    <div >
        <Button style={{marginRight:'5px'}} type="primary" onClick={()=>goAddMessage(record.id)}>
          编辑
        </Button>
        <Msg_del></Msg_del>
      </div>
    )
  }
}
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
      visible: false,
      list:[]
    };

  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'message/gets',
      payload: {},
    });
  }
  componentWillReceiveProps(){
    console.log(this.props)
    
    this.setState({
      list:[...this.props.message.message.list]
    })
    
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
    let data = this.state.list;
    return (
      <div>
        <PageHeaderWrapper title='文章列表'></PageHeaderWrapper>
        <div>
          {/* div用于提交数据 */}
          <Table
            columns={columns}
            dataSource={data}
            bordered
            className={msg_style.td}
          >

          </Table>
        </div>


      </div>

    );
  }
}

export default Message;
