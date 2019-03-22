import React, { Component } from 'react';
import { connect } from 'dva';
import msg_style from './Message.less';
import { Table } from 'antd';
import {
  Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import router from 'umi/router';

const { Option } = Select;

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
      list: [],
      columns: [{
        title: '标题',
        dataIndex: 'article_title',
      }, {
        title: '类型',
        dataIndex: 'cate_name',
      }, {
        title: 'Action',
        dataIndex: 'msg_action',
        width: '20%',
        render: (text, record) => {
          return (
            <div >
              <Button style={{ marginRight: '5px' }} type="primary" onClick={() => this.goAddMessage(record.aid)}>
                编辑
              </Button>
              <Button style={{ marginRight: '5px' }} type="primary" onClick={() => this.deleteMessage(record.aid)}>
                删除
              </Button>
            </div>
          )
        }
      }
      ]
    };

  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'message/gets',
      payload: {},
    });
  }
  componentWillReceiveProps() {
    console.log(this.props)

    this.setState({
      list: [...this.props.message.message.list]
    })
  }

  goAddMessage = (id) => {
    router.push(`/message/addmessage?id=${id}`);
  }

  deleteMessage = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'message/delete',
      payload: {
        aid: id
      },
    });
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
        <div>
          {/* div用于提交数据 */}
          <Table
            columns={this.state.columns}
            dataSource={this.state.list}
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
